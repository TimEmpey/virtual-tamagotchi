import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Health from "./health.js";

let newTomagotchi = new Health(0, 0, 2, 0, 0, 0);

function handleClickHappiness (e) {
  e.preventDefault();
  document.querySelector("span#happinessLevel").innerText = newTomagotchi.happiness.handleCleaning();
  newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
  document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
} 

function handleClickFitness (e) {
  e.preventDefault();
  document.querySelector("span#fitnessLevel").innerText = newTomagotchi.fitness.handleExercise();
  newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
  document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
}

function handleClickBrain (e) {
  e.preventDefault();
  document.querySelector("span#brainLevel").innerText = newTomagotchi.brainPower.handleStudying();
  newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
  document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
}

function handleClickHunger (e) {
  e.preventDefault();
  document.querySelector("span#hungerLevel").innerText = newTomagotchi.hunger.handleEating();
  newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
  document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
}

window.addEventListener("load", function (){
  document.getElementById("cleaningButton").addEventListener("click", handleClickHappiness);
});

window.addEventListener("load", function (){
  document.getElementById("exerciseButton").addEventListener("click", handleClickFitness);
});

window.addEventListener("load", function (){
  document.getElementById("studyingButton").addEventListener("click", handleClickBrain);
});

window.addEventListener("load", function (){
  document.getElementById("eatingButton").addEventListener("click", handleClickHunger);
});