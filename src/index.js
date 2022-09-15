import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import 'animate.css';
import Health from "./health.js";
import myPix from "./images.js";

let newTomagotchi = new Health(100, 25, 0, 25, 25, 25);

function startGame (e) {
  e.preventDefault();
  document.getElementById("startButton").setAttribute("class", "hidden");
  document.getElementById("gameOver").setAttribute("class", "hidden");
  document.getElementById("hideGame").removeAttribute("class");
  document.querySelector("span#totalHealth").innerText = 100;
  document.querySelector("span#happinessLevel").innerText = 25;
  document.querySelector("span#fitnessLevel").innerText = 25;
  document.querySelector("span#brainLevel").innerText = 25;
  document.querySelector("span#hungerLevel").innerText = 25;
  choosePic();
  setTimer();
}

function choosePic() {
  let randomNum = Math.floor(Math.random() * myPix.length);
  const image = document.createElement("img");
  image.src = myPix[randomNum];
  document.querySelector("span#tom-pic").append(image);
}

function gameOver () {
  if (newTomagotchi.totalHealth === 0) {
    document.getElementById("gameOver").removeAttribute("class");
    document.getElementById("hideGame").setAttribute("class", "hidden");
  }
}

function setTimer() {
  setInterval(() => fitness(), 30000);
  setInterval(() => happiness(), 45000); 
  setInterval(() => hunger(), 15000);
  setInterval(() => brainPower(), 60000);
}

function happiness() {
  removeStats(true, false, false, false);
  gameOver();
}
function fitness() {
  removeStats(false, true, false, false);
  gameOver();
}
function hunger() {
  removeStats(false, false, true, false);
  gameOver();
}
function brainPower() {
  removeStats(false, false, false, true);
  gameOver();
}

function removeStats (happiness, fitness, hunger, brainPower) {
  if (happiness === true) {
    document.querySelector("span#happinessLevel").innerText = newTomagotchi.happiness.handlePoop();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
    document.querySelector("div#poopDiv").removeAttribute("class");
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

function removeWeights () {
  document.querySelector("div#weightDiv").setAttribute("class", "hidden");
}

function removeBrain () {
  document.querySelector("div#brainDiv").setAttribute("class", "hidden");
}

function removeFood () {
  document.querySelector("div#foodDiv").setAttribute("class", "hidden");
}

function removePoop () {
  document.querySelector("div#poopDiv").setAttribute("class", "hidden");
}

function removeToiletDiv() {
  document.querySelector("div#toiletDiv").setAttribute("class", "hidden");
}

function removeToilet () {
  document.querySelector("img#gameToilet").removeAttribute("class");
  document.querySelector("img#gameToilet").setAttribute("class", "toiletRemove");
  setTimeout(removePoop, 900);
  setTimeout(removeToiletDiv, 2000);
}
function updateStats (happiness, fitness, hunger, brainPower) {
  if (happiness === true) {
    document.querySelector("span#happinessLevel").innerText = newTomagotchi.happiness.handleCleaning();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
    document.querySelector('div#toiletDiv').removeAttribute("class");
    document.querySelector('img#gameToilet').setAttribute("class", "toilet");
    setTimeout(removeToilet, 2000);
  } else if (fitness === true) {
    document.querySelector("span#fitnessLevel").innerText = newTomagotchi.fitness.handleExercise();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
    document.querySelector('div#weightDiv').removeAttribute("class");
    setTimeout(removeWeights, 5000);
    } else if (hunger === true) {
    document.querySelector("span#hungerLevel").innerText = newTomagotchi.hunger.handleEating();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
    document.querySelector('div#foodDiv').removeAttribute("class");
    setTimeout(removeFood, 5000);
  } else if (brainPower === true) {
    document.querySelector("span#brainLevel").innerText = newTomagotchi.brainPower.handleStudying();
    newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
    document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
    document.querySelector('div#brainDiv').removeAttribute("class");
    setTimeout(removeBrain, 5000);
  }
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