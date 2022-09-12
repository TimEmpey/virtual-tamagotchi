export default class StudyAction {
  constructor(brainPower) {
    this.brainPower = brainPower;
  }

  handleStudying (brainPower, active) {
    if (this.brainPower <= 20) {
      active = true;
      this.brainPower += 5;
    } else {
      active = false;
    }
  }

  removeBrainStats () {
    if (this.brainPower > 0) {
      brainPower - 5;
    }
  }

}