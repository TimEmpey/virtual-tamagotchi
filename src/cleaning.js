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

  handleCleaning (active) {
    this.active = active;
    if (this.poopLog >= 1) {
      this.active = true;
      this.happiness += 5;
    } else {
      this.active = false;
    }
  }

  removeHappinessStats() {
    if (this.happiness > 0) {
      happiness -= 5;
    }
  }
}