const winston = require('winston');


function info(route, message) {
  if (!route || !message) throw new Error('Given parameters b*tch');
  winston.info(`Route ${route} says '${message}'`);
}

info.lol = 'haha';

class UneClasse {
  constructor(unParam) {
    this.unPrama = unParam;
  }
  laugh() {
    console.log(this.unPrama);
  }
}

module.exports = {
  info,
  UneClasse,
};
