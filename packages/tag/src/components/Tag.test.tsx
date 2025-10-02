import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { tagNovo, tagNovoDark } from '@8x8/oxygen-constants';
import { variants } from '../constants';

import Tag from './Tag';

describe('Tag', () => {
  it('should render Avatar if avatar is provided', async () => {
    render(<Tag avatar={{}}>Josephine Lu</Tag>);
    expect(screen.getByTestId('TAG_AVATAR')).toBeInTheDocument();
  });
  it('should not render Avatar if avatar not provided', async () => {
    render(<Tag>Josephine Lu</Tag>);
    expect(screen.queryByTestId('TAG_AVATAR')).not.toBeInTheDocument();
  });
  it('should render CloseButton if action is provided', async () => {
    render(<Tag action={() => {}}>Josephine Lu</Tag>);
    expect(screen.getByTestId('TAG_ACTION')).toBeInTheDocument();
  });
  it('should not render CloseButton if action not provided', async () => {
    render(<Tag>Josephine Lu</Tag>);
    expect(screen.queryByTestId('TAG_ACTION')).not.toBeInTheDocument();
  });
  it('should render its children', async () => {
    render(<Tag>Josephine Lu</Tag>);
    expect(screen.queryByText('Josephine Lu')).toBeInTheDocument();
  });
  describe('variants', () => {
    it.each`
      theme          | variant            | textColor    | backgroundColor
      ${tagNovo}     | ${undefined}       | ${'#292929'} | ${'#E0E0E0'}
      ${tagNovo}     | ${variants.light}  | ${'#292929'} | ${'#E0E0E0'}
      ${tagNovo}     | ${variants.dark}   | ${'#FFFFFF'} | ${'#666666'}
      ${tagNovo}     | ${variants.blue}   | ${'#292929'} | ${'#CCDDF9'}
      ${tagNovo}     | ${variants.yellow} | ${'#292929'} | ${'#F8AE1A'}
      ${tagNovoDark} | ${undefined}       | ${'#FFFFFF'} | ${'#666666'}
      ${tagNovoDark} | ${variants.light}  | ${'#FFFFFF'} | ${'#666666'}
      ${tagNovoDark} | ${variants.dark}   | ${'#FFFFFF'} | ${'#666666'}
      ${tagNovoDark} | ${variants.blue}   | ${'#292929'} | ${'#CCDDF9'}
      ${tagNovoDark} | ${variants.yellow} | ${'#292929'} | ${'#F8AE1A'}
    `(
      'should have the correct text, background & icon color for $variant',
      ({ theme, variant, textColor, backgroundColor }) => {
        const wrapper = renderer.create(
          <Tag variant={variant} theme={theme} action={() => {}} />,
        );

        expect(wrapper.toJSON()).toHaveStyleRule('color', textColor);
        expect(wrapper.toJSON()).toHaveStyleRule('background', backgroundColor);
        expect(wrapper.root.findByType('svg').props.color).toEqual(textColor);
      },
    );
  });
});
