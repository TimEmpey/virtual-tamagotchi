import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Health from "./health.js";
import myPix from "./images.js";


let newTomagotchi = new Health(40, 10, 0, 10, 10, 10);

function startGame (e) {
  e.preventDefault();
  document.querySelector("span#totalHealth").innerText = 40;
  document.querySelector("span#happinessLevel").innerText = 10;
  document.querySelector("span#fitnessLevel").innerText = 10;
  document.querySelector("span#brainLevel").innerText = 10;
  document.querySelector("span#hungerLevel").innerText = 10;
  choosePic();
  setInterval(newTomagotchi.happiness.handlePoop, 180000);
  setInterval(newTomagotchi.fitness.removeFitnessStats, 7000);
  setInterval(newTomagotchi.brainPower.removeBrainStats, 120000);
  setInterval(newTomagotchi.hunger.removeHungerStats, 7000);
}

function choosePic() {
  let randomNum = Math.floor(Math.random() * myPix.length);
  const image = document.createElement("img");
  image.src = myPix[randomNum];
  document.querySelector("span#tom-pic").append(image);
  console.log(newTomagotchi);
}


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

// function debuffTimer () {
//   let min = 60000;
//   let max = 120000;
//   let timeDebuff = Math.floor(Math.random() * (max - min + 1) + min);
//   return timeDebuff;
// }

// function chooseDebuff () {
//   let min = 1;
//   let max = 4;
//   let debuff = Math.floor(Math.random() * (max - min + 1) + min);

//   if (debuff === 1) {
//     newTomagotchi.happiness.handlePoop;
//     newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
//     document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
//   }else if (debuff === 2) {
//     newTomagotchi.fitness.removeFitnessStats;
//     newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
//     document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
//   }else if (debuff === 3) {
//     newTomagotchi.brainPower.removeBrainStats;
//     newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
//     document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
//   }else if (debuff === 4) {
//     newTomagotchi.hunger.removeHungerStats;
//     newTomagotchi.totalHealth = newTomagotchi.happiness.happiness + newTomagotchi.fitness.fitness + newTomagotchi.brainPower.brainPower + newTomagotchi.hunger.hunger;
//     document.querySelector("span#totalHealth").innerText = newTomagotchi.totalHealth;
//   }
// }

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

// window.addEventListener("load" , function (){
//   setInterval(debuffTimer, 59000);
//   setInterval(chooseDebuff, debuffTimer);
// });