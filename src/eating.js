export default class EatingAction {
  constructor(hunger) {
    this.hunger = hunger;
  }

  handleEating (hunger, active) {
    if (this.hunger <= 20) {
      active = true;
      this.hunger += 5;
    } else {
      active = false;
    }
  }

  removeHungerStats () {
    if (this.hunger > 0) {
      hunger - 5;
    }
  }
}