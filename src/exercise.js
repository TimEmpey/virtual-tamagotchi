export default class ExerciseAction {
  constructor(fitness) {
    this.fitness = fitness;
  }

  handleExercise (e) {
    e.preventDefault();
    fitness = document.getElementById("fitnessStats").value;
    active = document.getElementById("active").value;
    if (fitness < 20) {
      active = true;
      document.getElementById("exerciseAnimation").setAttribute("class", "hidden");
      setTimeout(exerciseAnimation, 10000);
      fitness + 5;
    } else {
      active = false;
      document.getElementById("message").innerHTML = "Oops, your friend just exercised"
    }
    setInterval(removeFitnessStats, 120000);
  }

  exerciseAnimation () {
    document.getElementById("exerciseAnimation").removeAttribute("class");
  }

  removeFitnessStats () {
    fitness = document.getElementById("fitness").value;
    fitness - 5;
  }
}

window.addEventListener("load", function() {
  document.getElementById("exerciseButton").addEventListener("click", handleExercise);
});