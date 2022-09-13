import CleaningAction from "./cleaning.js";
import EatingAction from "./eating.js";
import ExerciseAction from "./exercise.js";
import StudyingAction from "./studying.js";

export default class Health {
  constructor(totalHealth, happiness, poopLog, hunger, fitness, brainPower){
    this.totalHealth = totalHealth;
    this.happiness = new CleaningAction(happiness, poopLog);
    this.hunger = new EatingAction(hunger);
    this.fitness = new ExerciseAction(fitness);
    this.brainPower = new StudyingAction(brainPower);
  }
  
  calculateHealth () {
    this.totalHealth = this.happiness.happiness + this.hunger.hunger + this.fitness.fitness + this.brainPower.brainPower;
    return this.totalHealth;
  }

  calculateLife () {
    if (this.happiness.happiness <= 0 || this.hunger.hunger <= 0 || this.fitness.fitness <= 0 || this.brainPower.brainPower <= 0) {
      return false;
    } else {
      return true;
    }
  }
}