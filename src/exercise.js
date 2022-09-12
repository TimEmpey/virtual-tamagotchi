export default class ExerciseAction {
  constructor(fitness) {
    this.fitness = fitness;
  }

  handleExercise (active) {
    this.active = active;
    if (this.fitness <= 20) {
      this.fitness += 5;
    } else {
      active = false;
    }
  }

  removeFitnessStats () {
    if (this.fitness > 0) {
      let min = 60;
      let max = 180;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); 
      setTimeout(rand * 1000);
      fitness -= 5;
    }
  }
}