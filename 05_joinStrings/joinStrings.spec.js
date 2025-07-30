const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Kenaw', () => {
    expect(values.firstName).toEqual('Kenaw');
  });
  test('lastName is Marie', () => {
    expect(values.lastName).toEqual('Marie');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2001', () => {
    expect(values.birthYear).toEqual(2001);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Kenaw Marie and I am 24 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Kenaw Marie', () => {
    expect(values.fullName).toEqual('Kenaw Marie');
  });
  test('age is 24', () => {
    expect(values.age).toEqual(24);
  });
});
