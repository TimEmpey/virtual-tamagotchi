export default class ExerciseAction {
  constructor(fitness) {
    this.fitness = fitness;
  }

  handleExercise (fitness, active) {
    if (this.fitness <= 20) {
      active = true;
      this.fitness += 5;
    } else {
      active = false;
    }
  }

  removeFitnessStats () {
    if (this.fitness > 0) {
      fitness -= 5;
    }
  }
}