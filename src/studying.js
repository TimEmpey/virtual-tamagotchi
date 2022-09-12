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
      let min = 60;
      let max = 180;
      let rand = Math.floor(Math.random() * (max - min + 1) + min); 
      setTimeout(rand * 1000);
      this.brainPower -= 5;
    }
  }

}