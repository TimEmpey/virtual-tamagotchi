import CleaningAction from "../src/cleaning";

describe('CleaningAction', () => {

  test('should set the happinessLevel to 0.', () => {
    let cleaningAction = new CleaningAction(0);
    expect(cleaningAction.happiness).toEqual(0);
  });

  test('should set the happinessLevel to 20.', () => {
    let cleaningAction = new CleaningAction(25);
    cleaningAction.handlePoop();
    expect(cleaningAction.happiness).toEqual(20);
  });

  test('should add 1 to poopLog.', () => {
    let cleaningAction = new CleaningAction(25, 0);
    cleaningAction.handlePoop();
    expect(cleaningAction.poopLog).toEqual(1);
  });

  test('should set the happinessLevel to 20.', () => {
    let cleaningAction = new CleaningAction(15, 1);
    cleaningAction.handleCleaning();
    expect(cleaningAction.happiness).toEqual(20);
  });
});
