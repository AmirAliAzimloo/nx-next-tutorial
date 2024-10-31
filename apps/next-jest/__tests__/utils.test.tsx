import '@testing-library/jest-dom';

function sum(a: number, b: number) {
  return a + b;
}

test('Adds 2+3 should be wqual to 5', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(2, 3)).not.toBe(6);
});

test('object assignment', () => {
  const data: any = { one: 1 };

  data['two'] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

test('There is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

async function getResponse() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ value: 'Hello World' });
    }, 100);
  });
}

test('async getResponse should return Hello World', async () => {
  const reponse = await getResponse();
  expect(reponse).toEqual({ value: 'Hello World' });
});