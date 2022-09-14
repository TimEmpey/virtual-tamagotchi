import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Health from "./health.js";
import myPix from "./images.js";

let newTomagotchi = new Health(100, 25, 0, 25, 25, 25);

function startGame (e) {
  e.preventDefault();
  document.querySelector("span#totalHealth").innerText = 100;
  document.querySelector("span#happinessLevel").innerText = 25;
  document.querySelector("span#fitnessLevel").innerText = 25;
  document.querySelector("span#brainLevel").innerText = 25;
  document.querySelector("span#hungerLevel").innerText = 25;
  choosePic();
  setTimer();
}

function setTimer() {
  setInterval(() => happiness(), 60000);
  setInterval(() => fitness(), 45000);
  setInterval(() => hunger(), 30000);
  setInterval(() => brainPower(), 70000);
}

function happiness() {
  newTomagotchi.happiness.handlePoop();
  removeStats(true, false, false, false);
}
function fitness() {
  newTomagotchi.fitness.removeFitnessStats();
  removeStats(false, true, false, false);
}
function hunger() {
  newTomagotchi.hunger.removeHungerStats();
  removeStats(false, false, true, false);
}
function brainPower() {
  newTomagotchi.brainPower.removeBrainStats();
  removeStats(false, false, false, true);
}

function removeStats (happiness, fitness, hunger, brainPower) {
  if (happiness === true) {
    document.querySelector("span#happinessLevel").innerText = newTomagotchi.happiness.handlePoop();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
  } else if (fitness === true) {
    document.querySelector("span#fitnessLevel").innerText = newTomagotchi.fitness.removeFitnessStats();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
  } else if (hunger === true) {
    document.querySelector("span#hungerLevel").innerText = newTomagotchi.hunger.removeHungerStats();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
  } else if (brainPower === true) {
    document.querySelector("span#brainLevel").innerText = newTomagotchi.brainPower.removeBrainStats();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
  }
}

function updateStats (happiness, fitness, hunger, brainPower) {
  if (happiness === true) {
    document.querySelector("span#happinessLevel").innerText = newTomagotchi.happiness.handleCleaning();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
  } else if (fitness === true) {
    document.querySelector("span#fitnessLevel").innerText = newTomagotchi.fitness.handleExercise();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
  } else if (hunger === true) {
    document.querySelector("span#hungerLevel").innerText = newTomagotchi.hunger.handleEating();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
  } else if (brainPower === true) {
    document.querySelector("span#brainLevel").innerText = newTomagotchi.brainPower.handleStudying();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
  }
}

function choosePic() {
  let randomNum = Math.floor(Math.random() * myPix.length);
  const image = document.createElement("img");
  image.src = myPix[randomNum];
  document.querySelector("span#tom-pic").append(image);
}

function handleClickHappiness (e) {
  e.preventDefault();
  updateStats(true, false, false, false);
} 

function handleClickFitness (e) {
  e.preventDefault();
  updateStats(false, true, false, false);
}

function handleClickBrain (e) {
  e.preventDefault();
  updateStats(false, false, false, true);
}

function handleClickHunger (e) {
  e.preventDefault();
  updateStats(false, false, true, false);
}

window.addEventListener("load", function (){
  document.getElementById("startButton").addEventListener("click", startGame);
});

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