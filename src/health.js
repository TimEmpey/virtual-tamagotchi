import CleaningAction from "./cleaning.js";
import EatingAction from "./eating.js";
import ExerciseAction from "./exercise.js";
import StudyingAction from "./studying.js";

export default class Health {
  constructor(totalHealth, happiness, hunger, fitness, brainPower){
    this.totalHealth = totalHealth;
    this.happiness = new CleaningAction(happiness);
    this.hunger = new EatingAction(hunger);
    this.fitness = new ExerciseAction(fitness);
    this.brainPower = new StudyingAction(brainPower);
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