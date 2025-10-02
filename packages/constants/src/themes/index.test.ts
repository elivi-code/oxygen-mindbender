import { classicTheme, novoTheme, novoDarkTheme } from '.';

describe('theme objects', () => {
  it('all themes should have the same properties/keys', () => {
    const classic = Object.keys(classicTheme).sort();
    const novo = Object.keys(novoTheme).sort();
    const novoDark = Object.keys(novoDarkTheme).sort();

    expect(classic).toEqual(novo);
    expect(novo).toEqual(novoDark);
  });
});
