export default class EatingAction {
  constructor(hunger) {
    this.hunger = hunger;
  }

  handleEating (active) {
    this.active = active
    if (this.hunger <= 20) {
      active = true;
      this.hunger += 5;
    } else {
      active = false;
    }
  }

  removeHungerStats () {
    if (this.hunger > 0) {
      let min = 60;
      let max = 180;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); 
      setTimeout(rand * 1000);
      hunger -= 5;
    }
  }
}