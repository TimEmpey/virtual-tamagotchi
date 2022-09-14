export default class ExerciseAction {
  constructor(fitness) {
    this.fitness = fitness;
    console.log(this.fitness);
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
// TODO Band aid solution
    if (isNaN(this.fitness)) {
      this.fitness -= 5;
    }
  }
}