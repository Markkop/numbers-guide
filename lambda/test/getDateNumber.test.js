const getDateNumber = require('../helpers/getDateNumber');

describe('getDateNumber', () => {
  it('gets the number for 2021-12-01', () => {
    const number = getDateNumber('2021-12-01');
    expect(number).toBe(9);
  });

  it('gets the number for 2021-12-19', () => {
    const number = getDateNumber('2021-12-09');
    expect(number).toBe(8);
  });
});
