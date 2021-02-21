const Potion = require('./Potion');
const Characters = require('./Characters');

class Enemy extends Characters{
  constructor(name,weapon){
    super(name);
    this.weapon = weapon;
    this.potion = new Potion();
  }
  
  getDescription(){
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }

}

module.exports = Enemy;