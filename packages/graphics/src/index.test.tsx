import React from 'react';

import { render, prettyDOM } from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';

import {
  Ghostly,
  WorkingDesk,
  AdministratorPanel,
  IncomingCall,
  GetConnected,
  Clock,
  NothingToSeeHere,
  EmptyClipboards,
  Logo8x8,
  Action,
  Error,
  NoData,
  NoEvents,
  NoResults,
  Subscribe,
  Target,
} from './index';

describe('graphics package', () => {
  it.each`
    Component
    ${Ghostly}
    ${WorkingDesk}
    ${AdministratorPanel}
    ${IncomingCall}
    ${GetConnected}
    ${Clock}
    ${EmptyClipboards}
    ${NothingToSeeHere}
  `('exports and renders deprecated $Component', ({ Component }) => {
    expect(Component).toBeDefined();
    const { container } = render(<Component />);

    expect(prettyDOM(container)).toMatchSnapshot();
  });

  it.each`
    enableNeo
    ${false}
    ${true}
  `('renders Logo8x8 based on enableNeo=$enableNeo', ({ enableNeo }) => {
    const { container } = render(
      <OxygenProvider enableNeo={enableNeo}>
        <Logo8x8 />
      </OxygenProvider>,
    );

    expect(prettyDOM(container)).toMatchSnapshot();
  });

  it.each`
    Component
    ${Action}
    ${Error}
    ${NoData}
    ${NoEvents}
    ${NoResults}
    ${Subscribe}
    ${Target}
  `('exports and renders $Component in light theme', ({ Component }) => {
    expect(Component).toBeDefined();
    const { container } = render(
      <OxygenProvider themeName="light">
        <Component />
      </OxygenProvider>,
    );

    expect(prettyDOM(container)).toMatchSnapshot();
  });

  it.each`
    Component
    ${Action}
    ${Error}
    ${NoData}
    ${NoEvents}
    ${NoResults}
    ${Subscribe}
    ${Target}
  `('exports and renders $Component in dark theme', ({ Component }) => {
    expect(Component).toBeDefined();
    const { container } = render(
      <OxygenProvider themeName="dark">
        <Component />
      </OxygenProvider>,
    );

    expect(prettyDOM(container)).toMatchSnapshot();
  });
});
