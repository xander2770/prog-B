console.log('OOP is here');

class Being {
  //Superclass for beings
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello from ${this.name}, ${this.age} years old`);
  }
}

class Alien extends Being {
  constructor(name, age, planet) {
    super(name, age);
    this.planet = planet;
  }

  introduce() {
    super.introduce();
    console.log(`AND I am an ALIEN, I'm a legal alien from the planet of ${this.planet}`);
  }
}

class Human extends Being {
  constructor(name, age, nof) {
    super(name, age);
    this.nof = nof;
  }

  introduce() {
    super.introduce();
    console.log(`I am a human and I have ${this.nof} fingers!`);
  }
}
