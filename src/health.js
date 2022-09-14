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
}