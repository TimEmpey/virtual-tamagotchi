import { TestScheduler } from "jest";
import ExerciseAction from "../src/exercise";

describe('ExerciseAction', () => {

  test('should set fitness to 0', () => {
    let exerciseAction = new ExerciseAction(0);
    expect(exerciseAction.fitness).toEqual(0);
  });

  test('should set fitness to 0', () => {
    let exerciseAction = new ExerciseAction(0);
    exerciseAction.handleExercise();
    expect(exerciseAction.fitness).toEqual(5);
  });
});