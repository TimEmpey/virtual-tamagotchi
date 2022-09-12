import StudyAction from "../src/studying";

describe('studyAction', () => {

  test('should set brainPower to 0', () => {
    let studyAction = new StudyAction(0);
    expect(studyAction.brainPower).toEqual(0);
  });

  test('should set brainPower to 0', () => {
    let studyAction = new StudyAction(0);
    studyAction.handleStudying();
    expect(studyAction.brainPower).toEqual(5);
  });
});