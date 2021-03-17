import api from '../src/Objects/api';

test('Should read score from api', async () => {
  await api.readScores().then((data) => {
    expect(typeof data).toBe('object');
  });
});

test('Should read score from api', async () => {
  await api.writeScore().then((data) => {
    expect(typeof data).toBe('object');
  });
});