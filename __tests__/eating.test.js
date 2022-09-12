import EatingAction from "../src/eating";

describe('EatingAction', () => {

  test('should set hunger to 0', () => {
    let eatingAction = new EatingAction(0);
    expect(eatingAction.hunger).toEqual(0);
  });

  test('should set hunger to 0', () => {
    let eatingAction = new EatingAction(0);
    eatingAction.handleEating();
    expect(eatingAction.hunger).toEqual(5);
  });
});