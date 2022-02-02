import { getDateMeaning } from '../src/utilities/numerology';

describe('getDateMeaning', () => {
  it('gets the number for 2021-12-01', () => {
    const number = getDateMeaning('2021-12-01');
    expect(number).toBe(9);
  });

  it('gets the number for 2021-12-19', () => {
    const number = getDateMeaning('2021-12-09');
    expect(number).toBe(8);
  });
});
