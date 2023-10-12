import Magician from '../Magician';

test('Magician', () => {
  const obj = new Magician('name');
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Magician',
  };
  expect(obj).toEqual(correct);
});
