import diceGame from './index';

it('returns an array of two numbers', () => {
  const scores = diceGame([]);
  expect(Array.isArray(scores)).toBe(true);
  expect(scores.length).toBe(2);
  expect(typeof scores[0]).toBe('number');
  expect(typeof scores[1]).toBe('number');
});

it('works with no doubles', () => {
  expect(diceGame([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6])).toStrictEqual([
    21, 21,
  ]);
  expect(diceGame([2, 3, 6, 1, 4, 5, 1, 2])).toStrictEqual([14, 10]);
});

it('works with no doubles but has repeating numbers', () => {
  expect(diceGame([1, 2, 2, 3, 3, 4, 5, 6])).toStrictEqual([10, 16]);
});

it('works with doubles', () => {
  expect(diceGame([1, 1, 2, 3, 3, 4, 1, 2, 3, 4])).toStrictEqual([7, 17]);
  expect(diceGame([1, 2, 2, 2, 3, 3, 4, 5, 6])).toStrictEqual([10, 18]);
});
