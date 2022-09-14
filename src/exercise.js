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
    console.log(this.fitness)
    if (this.fitness > 0) {
      this.fitness -= 2.5;
      return this.fitness;
    } else {
      return this.fitness;
    }
  }
}