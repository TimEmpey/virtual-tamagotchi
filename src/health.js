import CleaningAction from "./cleaning.js";
import EatingAction from "./eating.js";
import ExerciseAction from "./exercise.js";
import StudyingAction from "./studying.js";

export default class Health {
  constructor(totalHealth, happiness, hunger, fitness, brainPower){
    this.totalHealth = totalHealth;
    this.happiness = happiness;
    this.hunger = hunger;
    this.fitness = fitness;
    this.brainPower = brainPower;
    happiness = CleaningAction.happiness;
    hunger = EatingAction.hunger;
    fitness = ExerciseAction.fitness;
    brainPower = StudyingAction.brainPower;
  }

  calculateHealth () {
    this.totalHealth = this.happiness + this.hunger + this.fitness + this.brainPower;
  }

  calculateLife () {
    if (this.happiness <= 0 || this.hunger <= 0 || this.fitness <= 0 || this.brainPower <= 0) {
      return false;
    } else {
      return true;
    }
  }
}