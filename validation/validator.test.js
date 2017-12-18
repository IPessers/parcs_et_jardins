const validator = require('./validator');
const assert = require('assert');

describe('the json schema validator', () => {
  it('should invalide when no parameters given', () => {
    assert.throws(() => validator.validatePlante());
  });

  it('should not valid all properties of type string are not a string', () => {
    const invalidData = {
      categorie: 4,
      sousCategorie: 4,
      nomLatin: 4,
      nom: 4,
      cultivarPrincipal: 4,
      cultivarSecondaires: [4],
      indiceRusticite: 4,
      envergure: 80,
      hauteur: 60,
      port: [4],
      feuillage: {
        couleur: 4,
        resistanceFroid: 4,
        limbe: [4],
      },
      floraison: {
        debutFloraison: 4,
        finFloraison: 4,
        couleur: [4],
      },
      fruit: {
        nom: 4,
        debutPeriode: 4,
        finPeriode: 4,
      },
      sol: {
        humus: [4],
        tauxHumus: [4],
        ph: 6,
      },
      exposition: [4],
      nombrePlantations: 3,
      utilisations: [4],
      remarque: 4,
      representation: 4,
    };

    const result = validator.validatePlante(invalidData);

    assert.notEqual(result.errors.length, 0);
  });

  it('should not valid all properties of type number are not a number', () => {
    const invalidData = {
      categorie: 'Fougère',
      sousCategorie: 'persistant',
      nomLatin: 'Fougus communum',
      nom: 'Foougère commune',
      cultivarPrincipal: 'alba',
      cultivarSecondaires: ['bleu', 'rouge'],
      indiceRusticite: 'normal',
      envergure: 'broken',
      hauteur: 'broken',
      port: ['arque', 'étalé'],
      feuillage: {
        couleur: 'vert-gris',
        resistanceFroid: 'persistant',
        limbe: ['effilé', 'alterne'],
      },
      floraison: {
        debutFloraison: 'apr',
        finFloraison: 'jun',
        couleur: ['lila', 'jaune'],
      },
      fruit: {
        nom: 'baie',
        debutPeriode: 'jul',
        finPeriode: 'aug',
      },
      sol: {
        humus: ['frais', 'marécageux'],
        tauxHumus: ['très faible', 'faible'],
        ph: 'broken',
      },
      exposition: ['soleil', 'mi-ombre'],
      nombrePlantations: 'broken',
      utilisations: ['bac', 'massif'],
      remarque: 'cette plante est fictionnelle',
      representation: 'myLittleFougere.jpg',
    };

    const result = validator.validatePlante(invalidData);

    assert.notEqual(result.errors.length, 0);
  });

  it('should not valid not an enum', () => {
    const invalidData = {
      categorie: 'broken',
      sousCategorie: 'broken',
      nomLatin: 'Fougus communum',
      nom: 'Foougère commune',
      cultivarPrincipal: 'alba',
      cultivarSecondaires: ['bleu', 'rouge'],
      indiceRusticite: 'broken',
      envergure: 80,
      hauteur: 60,
      port: ['broken'],
      feuillage: {
        couleur: 'broken',
        resistanceFroid: 'broken',
        limbe: ['broken'],
      },
      floraison: {
        debutFloraison: 'broken',
        finFloraison: 'broken',
        couleur: ['broken'],
      },
      fruit: {
        nom: 'baie',
        debutPeriode: 'broken',
        finPeriode: 'broken',
      },
      sol: {
        humus: ['broken'],
        tauxHumus: ['broken'],
        ph: 6,
      },
      exposition: ['broken'],
      nombrePlantations: 3,
      utilisations: ['broken'],
      remarque: 'cette plante est fictionnelle',
      representation: 'myLittleFougere.jpg',
    };

    const result = validator.validatePlante(invalidData);

    assert.notEqual(result.errors.length, 0);
  });

  it('should not valid to low value for number', () => {
    const invalidData = {
      categorie: 'Fougère',
      sousCategorie: 'persistant',
      nomLatin: 'Fougus communum',
      nom: 'Foougère commune',
      cultivarPrincipal: 'alba',
      cultivarSecondaires: ['bleu', 'rouge'],
      indiceRusticite: 'normal',
      envergure: 0,
      hauteur: 0,
      port: ['arque', 'étalé'],
      feuillage: {
        couleur: 'vert-gris',
        resistanceFroid: 'persistant',
        limbe: ['effilé', 'alterne'],
      },
      floraison: {
        debutFloraison: 'apr',
        finFloraison: 'jun',
        couleur: ['lila', 'jaune'],
      },
      fruit: {
        nom: 'baie',
        debutPeriode: 'jul',
        finPeriode: 'aug',
      },
      sol: {
        humus: ['frais', 'marécageux'],
        tauxHumus: ['très faible', 'faible'],
        ph: 3,
      },
      exposition: ['soleil', 'mi-ombre'],
      nombrePlantations: 0,
      utilisations: ['bac', 'massif'],
      remarque: 'cette plante est fictionnelle',
      representation: 'myLittleFougere.jpg',
    };

    const result = validator.validatePlante(invalidData);

    assert.notEqual(result.errors.length, 0);
  });

  it('should not valid to low value for number', () => {
    const invalidData = {
      categorie: 'Fougère',
      sousCategorie: 'persistant',
      nomLatin: 'Fougus communum',
      nom: 'Foougère commune',
      cultivarPrincipal: 'alba',
      cultivarSecondaires: ['bleu', 'rouge'],
      indiceRusticite: 'normal',
      envergure: 80,
      hauteur: 60,
      port: ['arque', 'étalé'],
      feuillage: {
        couleur: 'vert-gris',
        resistanceFroid: 'persistant',
        limbe: ['effilé', 'alterne'],
      },
      floraison: {
        debutFloraison: 'apr',
        finFloraison: 'jun',
        couleur: ['lila', 'jaune'],
      },
      fruit: {
        nom: 'baie',
        debutPeriode: 'jul',
        finPeriode: 'aug',
      },
      sol: {
        humus: ['frais', 'marécageux'],
        tauxHumus: ['très faible', 'faible'],
        ph: 9,
      },
      exposition: ['soleil', 'mi-ombre'],
      nombrePlantations: 3,
      utilisations: ['bac', 'massif'],
      remarque: 'cette plante est fictionnelle',
      representation: 'myLittleFougere.jpg',
    };

    const result = validator.validatePlante(invalidData);

    assert.notEqual(result.errors.length, 0);
  });

  it('should valid the given plante', () => {
    const validData = {
      categorie: 'Fougère',
      sousCategorie: 'persistant',
      nomLatin: 'Fougus communum',
      nom: 'Foougère commune',
      cultivarPrincipal: 'alba',
      cultivarSecondaires: ['bleu', 'rouge'],
      indiceRusticite: 'normal',
      envergure: 80,
      hauteur: 60,
      port: ['arque', 'étalé'],
      feuillage: {
        couleur: 'vert-gris',
        resistanceFroid: 'persistant',
        limbe: ['effilé', 'alterne'],
      },
      floraison: {
        debutFloraison: 'apr',
        finFloraison: 'jun',
        couleur: ['lila', 'jaune'],
      },
      fruit: {
        nom: 'baie',
        debutPeriode: 'jul',
        finPeriode: 'aug',
      },
      sol: {
        humus: ['frais', 'marécageux'],
        tauxHumus: ['très faible', 'faible'],
        ph: 6,
      },
      exposition: ['soleil', 'mi-ombre'],
      nombrePlantations: 3,
      utilisations: ['bac', 'massif'],
      remarque: 'cette plante est fictionnelle',
      representation: 'myLittleFougere.jpg',
    };

    const result = validator.validatePlante(validData);

    assert.equal(result.errors.length, 0);
  });
});
