import {
  convertDateTimeRangeToDates,
  convertDateTimeRangeToString,
} from './dateTimeRangeUtils';

describe('dateTimeRangeUtils', () => {
  it('should convertDateTimeRangeToDates with both values as strings', () => {
    expect(
      convertDateTimeRangeToDates({
        startDate: '"2021-01-01T00:00:00.000Z"',
        endDate: '"2021-01-02T00:00:00.000Z"',
      }),
    ).toEqual({
      startDate: new Date('2021-01-01T00:00:00.000Z'),
      endDate: new Date('2021-01-02T00:00:00.000Z'),
    });
  });

  it('should convert convertDateTimeRangeToDates with both values as non-parsable strings', () => {
    expect(
      convertDateTimeRangeToDates({
        startDate: '2021-01-01T00:00:00.000Z',
        endDate: '2021-01-02T00:00:00.000Z',
      }),
    ).toEqual({
      startDate: new Date('2021-01-01T00:00:00.000Z'),
      endDate: new Date('2021-01-02T00:00:00.000Z'),
    });
  });

  it('should convertDateTimeRangeToDates with both values as Dates', () => {
    const startDate = new Date('2021-01-01T00:00:00.000Z');
    const endDate = new Date('2021-01-02T00:00:00.000Z');

    expect(
      convertDateTimeRangeToDates({
        startDate,
        endDate,
      }),
    ).toEqual({
      startDate,
      endDate,
    });
  });

  it('should convertDateTimeRangeToDates with startDate as string and endDate as Date', () => {
    const endDate = new Date('2021-01-02T00:00:00.000Z');

    expect(
      convertDateTimeRangeToDates({
        startDate: '"2021-01-01T00:00:00.000Z"',
        endDate,
      }),
    ).toEqual({
      startDate: new Date('2021-01-01T00:00:00.000Z'),
      endDate,
    });
  });

  it('should convertDateTimeRangeToDates with startDate as Date and endDate as string', () => {
    const startDate = new Date('2021-01-01T00:00:00.000Z');

    expect(
      convertDateTimeRangeToDates({
        startDate,
        endDate: '"2021-01-02T00:00:00.000Z"',
      }),
    ).toEqual({
      startDate,
      endDate: new Date('2021-01-02T00:00:00.000Z'),
    });
  });

  it('should convertDateTimeRangeToString with both values as Dates', () => {
    const startDate = new Date('2021-01-01T00:00:00.000Z');
    const endDate = new Date('2021-01-02T00:00:00.000Z');

    expect(
      convertDateTimeRangeToString({
        startDate,
        endDate,
      }),
    ).toEqual({
      startDate: JSON.stringify(startDate),
      endDate: JSON.stringify(endDate),
    });
  });
});
