import { faker } from '@faker-js/faker';
import { Person } from './person';

const range = (len: number) => {
  const arr: number[] = [];

  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }

  return arr;
};

const newPerson = (idx?: number): Person => {
  return {
    firstName: faker.person.firstName() + (idx !== undefined ? ` ${idx}` : ''),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    status: faker.helpers.shuffle<Person['status']>([
      'relationship',
      'complicated',
      'single',
    ])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const len = lens[depth]!;

    return range(len).map((d): Person => {
      return {
        ...newPerson(d),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
