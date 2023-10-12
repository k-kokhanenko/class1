import Daemon from '../Daemon';

test('Daemon', () => {
  const obj = new Daemon('name');
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Daemon',
  };
  expect(obj).toEqual(correct);
});
