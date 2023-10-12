import Zombie from '../Zombie';

test('Zombie', () => {
  const obj = new Zombie('name');
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Zombie',
  };
  expect(obj).toEqual(correct);
});
