import {healthStatus} from '../src/index.js'
import {heroys,sort} from '../src/sort.js'


describe("healthStatus", () => {
  test('critical', () => {
    healthStatus('Маг', 14)
    expect('critical').toBe('critical');
  });

  test('wounded', () => {
    healthStatus('Маг', 40)
    expect('wounded').toBe('wounded');
  });

  test('healthy', () => {
    healthStatus('Маг', 80)
    expect('healthy').toBe('healthy');
  });
})

describe("Heroy Sort", () => {
  test('Heroy Sort', () => {
   const toEqual = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
    expect(sort(heroys)).toEqual(toEqual);
  })
})