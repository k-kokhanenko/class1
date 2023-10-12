import Undead from '../Undead';

test('Undead', () => {
  const obj = new Undead('name');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Undead',
  };
  expect(obj).toEqual(correct);
});
