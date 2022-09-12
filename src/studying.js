export default class StudyAction {
  constructor(brainPower) {
    this.brainPower = brainPower;
  }

  handleStudying (active) {
    this.active = active;
    if (this.brainPower <= 20) {
      active = true;
      this.brainPower += 5;
    } else {
      active = false;
    }
  }

  removeBrainStats () {
    if (this.brainPower > 0) {
      let min = 60;
      let max = 180;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); 
      setTimeout(rand * 1000);
      brainPower -= 5;
    }
  }

}