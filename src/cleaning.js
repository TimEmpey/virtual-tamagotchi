export default class CleaningAction {
  constructor(happiness, poopLog) {
    this.happiness = happiness;
    this.poopLog = poopLog;
  }

  handlePoop() {
    if (this.happiness > 0){
    this.happiness -= 5;
    this.poopLog += 1;
    return this.happiness;
    } else {
    return this.happiness;
    }
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