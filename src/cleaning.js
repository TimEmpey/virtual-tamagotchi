export default class CleaningAction {
  constructor(happiness, poopLog) {
    this.happiness = happiness;
    this.poopLog = poopLog;
  }

  handlePoop() {
    let min = 60;
    let max = 180;
    let rand = Math.floor(Math.random() * (max - min + 1) + min); 
    setTimeout(rand * 10000);
    this.happiness -= 5;
    this.poopLog += 1;
    return this.happiness;
  }

  handleCleaning () {
    if (this.poopLog >= 1 && this.happiness <= 20) {
      this.happiness += 5;
      this.poopLog -= 1;
      return this.happiness;
    } else {
      return this.happiness;
    }
  }
}