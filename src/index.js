import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Health from "./health.js";

let newTamagotchi = new Health(40, 10, 10, 10, 10);

// function handleClickHappiness (e) {
//   e.preventDefault();
//   document.querySelector("span#happinessLevel").innerText = newTamagotchi.hapinessLevel.handleCleaning();
//   } 

function handleClickFitness (e) {
  e.preventDefault();
  document.querySelector("span#fitnessLevel").innerText = newTamagotchi.fitness.handleExercise();
}

function handleClickBrain (e) {
  e.preventDefault();
  document.querySelector("span#brainLevel").innerText = newTamagotchi.brainPower.handleStudying();
}

function handleClickHunger (e) {
  e.preventDefault();
  document.querySelector("span#hungerLevel").innerText = newTamagotchi.hunger.handleEating();
}

// window.addEventListener("load", function (){
//   document.getElementById("cleaningButton").addEventListener("click", handleClickHappiness);
// })

window.addEventListener("load", function (){
  document.getElementById("exerciseButton").addEventListener("click", handleClickFitness);
});

window.addEventListener("load", function (){
  document.getElementById("studyingButton").addEventListener("click", handleClickBrain);
})

window.addEventListener("load", function (){
  document.getElementById("eatingButton").addEventListener("click", handleClickHunger);
})