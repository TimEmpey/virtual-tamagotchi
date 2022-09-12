export default class CleaningAction {
  constructor(happinessLevel, poopLog) {
    this.happiness = happinessLevel;
    this.poopLog = poopLog;
  }

  handlePoop() {
    let min = 60;
    let max = 180;
    let rand = Math.floor(Math.random() * (max - min + 1) + min); 
    setTimeout(rand * 1000);
    this.happiness -= 5;
    this.poopLog += 1;
}

  handleCleaning () {
    if (this.poopLog >= 1) {
      this.happiness += 5;
    } else {
      return false;
    }
  }
}