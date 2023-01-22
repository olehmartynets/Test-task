const getResponse = require('./index');

test('it should return GN', () => {
    expect(getResponse(15)).toBe('GN');
});

test('it should return N', () => {
    expect(getResponse(5)).toBe('N');
});

test('it should return G', () => {
    expect(getResponse(3)).toBe('G');
});

test('it should return GN', () => {
    expect(getResponse(11)).toBe(11);
});

test('it should return undefined', () => {
    expect(getResponse()).toBe(undefined);
});