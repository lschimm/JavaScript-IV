/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
*/

// function GameObject (att1){
//     this.createdAt = att1.createdAt;
//     this.name = att1.name;
//     this.dimensions = att1.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`
//   }


//   function CharacterStats (att2){
//     GameObject.call(this, att2);
//     this.healthPoints = att2.healthPoints;
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);

//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`
//   }


class GameObject{
      constructor(att1){
        this.createdAt = att1.createdAt;
        this.name = att1.name;
        this.dimensions = att1.dimensions;
      }
      destroy() {
          return `${this.name} was removed from the game.`
      }
  }
  
  class CharacterStats extends GameObject {
      constructor (att2){
          super(att2)
          this.healthPoints = att2.healthPoints;
      }
      takeDamage() {
          return `${this.name} took damage.`
      }
  }
  

  
class Humanoid extends CharacterStats{
    constructor (att3){
        super(att3)
        this.team = att3.team;
        this.weapons = att3.weapons;
        this.language = att3.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }
}


   
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
  
   
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

/*
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
