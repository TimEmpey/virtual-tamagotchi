import Health from "../src/health.js";

describe('Health', () => {

  test('should set totalHealth to 100', () => {
    let health = new Health(100, 25, 25, 25, 25);
    health.calculateHealth();
    expect(health.totalHealth).toEqual(100);
  });
});
  describe('calculateLife', () => {

    test('should return false', () => {
      let health = new Health(100, 0, 25, 25, 25);
      health.calculateLife();
      expect(health.calculateLife()).toEqual(false);
    });

    test('should return true', () => {
      let health = new Health(100, 25, 25, 25, 25);
      health.calculateLife();
      expect(health.calculateLife()).toEqual(true);
    });
});
