import React from 'react';
import renderTitle from './renderTitle';

describe('renderTitle', () => {
  it('should return text if type is string', () => {
    const mockText = 'Action';

    expect(renderTitle(mockText)).toEqual(mockText);
  });

  it('should return text if type is number', () => {
    const mockText = 1;

    expect(renderTitle(mockText)).toEqual(String(mockText));
  });

  it('should return undefined if type is different than number or string', () => {
    const mockText = <div>Test</div>;

    expect(renderTitle(mockText)).toBeUndefined();
  });
});
