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
      let min = 60;
      let max = 180;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); 
      setTimeout(rand * 1000);
      this.fitness -= 5;
    }
  }
}