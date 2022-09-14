export default class ExerciseAction {
  constructor(fitness) {
    this.fitness = fitness;
  }

  handleExercise () {
    if (this.fitness <= 20) {
      this.fitness += 5;
      return this.fitness;
    } else {
      return this.fitness;
    }
  }

  removeFitnessStats () {
    if (this.fitness > 0) {
      this.fitness -= 5;
      return this.fitness;
    } else {
      return this.fitness;
    }
  }
}