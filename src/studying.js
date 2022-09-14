export default class StudyAction {
  constructor(brainPower) {
    this.brainPower = brainPower;
  }

  handleStudying () {
    if (this.brainPower <= 20) {
      this.brainPower += 5;
      return this.brainPower;
    } else {
      return this.brainPower;
    }
  }

  removeBrainStats () {
    if (this.brainPower > 0) {
      this.brainPower -= 5;
      return this.brainPower;
    } else {
      return this.brainPower;
    }
  }
}