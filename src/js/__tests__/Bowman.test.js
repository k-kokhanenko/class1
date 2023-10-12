import Bowman from '../Bowman';

test('Bowman', () => {
  const obj = new Bowman('name');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Bowman',
  };
  expect(obj).toEqual(correct);
});
