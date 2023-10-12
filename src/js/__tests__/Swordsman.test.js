import Swordsman from '../Swordsman';

test('Swordsman', () => {
  const obj = new Swordsman('name');
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Swordsman',
  };
  expect(obj).toEqual(correct);
});
