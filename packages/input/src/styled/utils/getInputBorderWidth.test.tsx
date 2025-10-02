import getInputBorderWidth from './getInputBorderWidth';

describe('utils/getInputBorderWidth', () => {
  let theme = {};

  it('should return border:none if no border values set', () => {
    const expected = 'none';
    const result = getInputBorderWidth({ theme });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if one theme value set', () => {
    theme = {
      borderWidth: '2px',
    };
    const withSuffix = false;
    const withPrefix = false;
    const isReadOnly = false;
    const expected = '2px 2px 2px 2px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if two theme values set', () => {
    theme = {
      borderWidth: '2px 4px',
    };
    const withSuffix = false;
    const withPrefix = false;
    const isReadOnly = false;
    const expected = '2px 4px 2px 4px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if three theme values set', () => {
    theme = {
      borderWidth: '2px 3px 4px',
    };
    const withSuffix = false;
    const withPrefix = false;
    const isReadOnly = false;
    const expected = '2px 3px 4px 3px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if four theme values set', () => {
    theme = {
      borderWidth: '2px 3px 4px 5px',
    };
    const withSuffix = false;
    const withPrefix = false;
    const isReadOnly = false;
    const expected = '2px 3px 4px 5px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if one theme value set and withPrefix', () => {
    theme = {
      borderWidth: '2px',
    };
    const withSuffix = false;
    const withPrefix = true;
    const isReadOnly = false;
    const expected = '2px 2px 2px 0';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if two theme values set and withPrefix', () => {
    theme = {
      borderWidth: '2px 4px',
    };
    const withSuffix = false;
    const withPrefix = true;
    const isReadOnly = false;
    const expected = '2px 4px 2px 0';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if three theme values set and withPrefix', () => {
    theme = {
      borderWidth: '2px 3px 4px',
    };
    const withSuffix = false;
    const withPrefix = true;
    const isReadOnly = false;
    const expected = '2px 3px 4px 0';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if four theme values set and withPrefix', () => {
    theme = {
      borderWidth: '2px 3px 4px 5px',
    };
    const withSuffix = false;
    const withPrefix = true;
    const isReadOnly = false;
    const expected = '2px 3px 4px 0';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if one theme value set and withSuffix', () => {
    theme = {
      borderWidth: '2px',
    };
    const withSuffix = true;
    const withPrefix = false;
    const isReadOnly = false;
    const expected = '2px 0 2px 2px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if two theme values set and withSuffix', () => {
    theme = {
      borderWidth: '2px 4px',
    };
    const withSuffix = true;
    const withPrefix = false;
    const isReadOnly = false;
    const expected = '2px 0 2px 4px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if three theme values set and withSuffix', () => {
    theme = {
      borderWidth: '2px 3px 4px',
    };
    const withSuffix = true;
    const withPrefix = false;
    const isReadOnly = false;
    const expected = '2px 0 4px 3px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidth if four theme values set and withSuffix', () => {
    theme = {
      borderWidth: '2px 3px 4px 5px',
    };
    const withSuffix = true;
    const withPrefix = false;
    const isReadOnly = false;
    const expected = '2px 0 4px 5px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if one theme value set', () => {
    theme = {
      borderWidthReadOnly: '2px',
    };
    const withSuffix = false;
    const withPrefix = false;
    const isReadOnly = true;
    const expected = '2px 2px 2px 2px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if two theme values set', () => {
    theme = {
      borderWidthReadOnly: '2px 4px',
    };
    const withSuffix = false;
    const withPrefix = false;
    const isReadOnly = true;
    const expected = '2px 4px 2px 4px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if three theme values set', () => {
    theme = {
      borderWidthReadOnly: '2px 3px 4px',
    };
    const withSuffix = false;
    const withPrefix = false;
    const isReadOnly = true;
    const expected = '2px 3px 4px 3px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if four theme values set', () => {
    theme = {
      borderWidthReadOnly: '2px 3px 4px 5px',
    };
    const withSuffix = false;
    const withPrefix = false;
    const isReadOnly = true;
    const expected = '2px 3px 4px 5px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if one theme value set and withPrefix', () => {
    theme = {
      borderWidthReadOnly: '2px',
    };
    const withSuffix = false;
    const withPrefix = true;
    const isReadOnly = true;
    const expected = '2px 2px 2px 0';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if two theme values set and withPrefix', () => {
    theme = {
      borderWidthReadOnly: '2px 4px',
    };
    const withSuffix = false;
    const withPrefix = true;
    const isReadOnly = true;
    const expected = '2px 4px 2px 0';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if three theme values set and withPrefix', () => {
    theme = {
      borderWidthReadOnly: '2px 3px 4px',
    };
    const withSuffix = false;
    const withPrefix = true;
    const isReadOnly = true;
    const expected = '2px 3px 4px 0';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if four theme values set and withPrefix', () => {
    theme = {
      borderWidthReadOnly: '2px 3px 4px 5px',
    };
    const withSuffix = false;
    const withPrefix = true;
    const isReadOnly = true;
    const expected = '2px 3px 4px 0';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if one theme value set and withSuffix', () => {
    theme = {
      borderWidthReadOnly: '2px',
    };
    const withSuffix = true;
    const withPrefix = false;
    const isReadOnly = true;
    const expected = '2px 0 2px 2px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if two theme values set and withSuffix', () => {
    theme = {
      borderWidthReadOnly: '2px 4px',
    };
    const withSuffix = true;
    const withPrefix = false;
    const isReadOnly = true;
    const expected = '2px 0 2px 4px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if three theme values set and withSuffix', () => {
    theme = {
      borderWidthReadOnly: '2px 3px 4px',
    };
    const withSuffix = true;
    const withPrefix = false;
    const isReadOnly = true;
    const expected = '2px 0 4px 3px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });

  it('should return correct borderWidthReadOnly if four theme values set and withSuffix', () => {
    theme = {
      borderWidthReadOnly: '2px 3px 4px 5px',
    };
    const withSuffix = true;
    const withPrefix = false;
    const isReadOnly = true;
    const expected = '2px 0 4px 5px';
    const result = getInputBorderWidth({
      theme,
      withSuffix,
      withPrefix,
      isReadOnly,
    });

    expect(result).toEqual(expected);
  });
});
