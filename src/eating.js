export default class EatingAction {
  constructor(hunger) {
    this.hunger = hunger;
  }

  handleEating () {
    if (this.hunger <= 20) {
      this.hunger += 5;
      return this.hunger;
    } else {
      return this.hunger;
    }
  }

  removeHungerStats () {
    if (this.hunger > 0) {
      let min = 60;
      let max = 180;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); 
      setTimeout(rand * 1000);
      this.hunger -= 5;
    }
  }
}