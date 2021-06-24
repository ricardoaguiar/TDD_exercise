import diceGame from './index';

it('returns an array of two numbers', () => {
  const scores = diceGame([]);
  expect(Array.isArray(scores)).toBe(true);
  expect(scores.length).toBe(2);
  expect(typeof scores[0]).toBe('number');
  expect(typeof scores[1]).toBe('number');
});
