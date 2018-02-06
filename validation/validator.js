const Validation = require('jsonschema').Validator;

const planteSchema = {
  type: 'object',
  properties: {
    categorie: {
      type: 'string',
      enum: ['Fougère', 'Plante vivace', 'Arbuste', 'Arbre feuillu', 'Conifère'],
    },
    sousCategorie: {
      type: 'string',
      enum: ['persistant', 'semi-persistant', 'caduque', 'monocotyle', 'dicotylé', 'marcescent'],
    },
    nomLatin: { type: 'string' },
    nom: { type: 'string' },
    cultivarPrincipal: { type: 'string' },
    cultivarSecondaires: {
      type: 'array',
      items: { type: 'string' },
    },
    indiceRusticite: {
      type: 'string',
      enum: ['tres', 'normal', 'peu', 'pas'],
    },
    envergure: {
      type: 'number',
      minimum: 0.01,
    },
    hauteur: {
      type: 'number',
      minimum: 0.01,
    },
    port: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'arborescent', 'arbustif', 'arque', 'arrondi', 'buissonnant', 'compacte', 'conique',
          'divergent', 'en rosette', 'érigé', 'étalé', 'évasé', 'graminiforme', 'grimpant',
          'large couronne', 'nain', 'pleureur', 'prostré', 'ombelliforme', 'ovoïde', 'pyramidal',
          'rampant', 'sphérique', 'stolonifere', 'tapissant', 'touffu',
        ],
      },
    },
    feuillage: { $ref: '/FeuillageSchema' },
    floraison: { $ref: '/FloraisonSchema' },
    fruit: {
      nom: { type: 'string' },
      debutPeriode: { $ref: '/MonthsSchema' },
      finPeriode: { $ref: '/MonthsSchema' },
    },
    sol: { $ref: '/SolSchema' },
    exposition: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['soleil', 'mi-ombre', 'ombre'],
      },
    },
    nombrePlantations: {
      type: 'integer',
      minimum: 1,
    },
    utilisations: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'alignement', 'bac', 'berge de ruisseaux', 'bordure', 'bosquet', 'couvre-mur', 'couvre-sol',
          'groupe', 'haie', 'haie défensive', 'haie fleurie', 'haie libre', 'isolé', 'lisière',
          'massif', 'parc', 'plante aromatique', 'platebande de vivace', 'plantation forestière',
          'pot', 'sous-bois', 'terrasse', 'terrain marécageux', 'rocaille', 'pièce d’eau', 'topiaire',
          'verger',
        ],
      },
    },
    remarque: { type: 'string' },
    representation: { type: 'string' },
  },
};

const feuillageSchema = {
  type: 'object',
  properties: {
    couleur: {
      type: 'string',
      enum: [
        'bleu', 'bleu-gris', 'brun', 'gris', 'selon cultivar', 'vert', 'vert bleuté',
        'vert clair', 'vert foncé', 'vert-gris', 'vert-jaune', 'vert-rouge',
      ],
    },
    resistanceFroid: {
      type: 'string',
      enum: ['caduque', 'persistant', 'marcescent', 'semi-persistant'],
    },
    limbe: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'aciculaire', 'alterne', 'circulaire', 'composé', 'cordé', 'creux', 'duveteux',
          'effilé', 'elliptique', 'gaufré', 'lancéolé', 'linéaire', 'obovale', 'ovoïde',
          'palmé', 'piquant', 'sagitté', 'spatulé',
        ],
      },
    },
  },
};

const floraisonSchema = {
  type: 'object',
  properties: {
    debut: { $ref: '/MonthsSchema' },
    fin: { $ref: '/MonthsSchema' },
    couleur: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['blanc', 'bleu', 'brun', 'jaune', 'lila', 'orange', 'rose', 'rouge', 'vert'],
      },
    },
  },
};

const solSchema = {
  type: 'object',
  properties: {
    humus: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'sècheresse', 'sec', 'frais', 'très frais', 'moyen', 'humide', 'très humide',
          'détrempé', 'marécageux', 'aquatique',
        ],
      },
    },
    tauxHumus: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['très faible', 'faible', 'moyen', 'important', 'humeux'],
      },
    },
    ph: {
      type: 'number',
      minimum: 4,
      maximum: 8.5,
    },
  },
};

const monthsSchema = {
  type: 'string',
  enum: ['feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'oct'],
};

function validatePlante(plante) {
  if (!plante) {
    throw new Error('No data received');
  }

  const validateForMe = new Validation();

  validateForMe.addSchema(monthsSchema, '/MonthsSchema');
  validateForMe.addSchema(feuillageSchema, '/FeuillageSchema');
  validateForMe.addSchema(floraisonSchema, '/FloraisonSchema');
  validateForMe.addSchema(solSchema, '/SolSchema');

  return validateForMe.validate(plante, planteSchema);
}

module.exports = {
  validatePlante,
};
