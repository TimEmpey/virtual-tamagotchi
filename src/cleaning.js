export default class CleaningAction {
  constructor(happinessLevel) {
    this.happiness = happinessLevel;
  }

  handlePoop() {
    let min = 60;
    let max = 180;
    let rand = Math.floor(Math.random() * (max - min + 1) + min); 
    setTimeout(rand * 1000);
    this.happiness -= 5;
}

  handleCleaning (active) {
    this.active = active;
    if (this.happiness < 20) {
      this.active = true;
      this.happiness += 5;
    } else {
      this.active = false;
    }
  }

  removeHappinessStats () {
    if (this.happiness > 0) {
      happiness - 5;
    }
  }
}