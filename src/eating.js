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
    console.log(this.hunger)
    if (this.hunger > 0) {
      this.hunger -= 2.5;
      return this.hunger;
    } else {
    return this.hunger;
    }
  }
}