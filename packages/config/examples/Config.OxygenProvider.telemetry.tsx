import React from 'react';
import { Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const ConfigOxygenProviderTelemetry = () => {
  return (
    <Doc>
      <h1>
        <code>OxygenProvider - Telemetry</code>
      </h1>
      <p>
        To use the Oxygen telemetryCallback, you will use the{' '}
        <code>OxygenProvider</code> to wrap your app.
      </p>
      <p>
        OxygenProvider accepts an optional prop: <code>telemetryCallback</code>{' '}
        - defaults to noop if not provided. This function is made available on
        context. At the component level it will be used to instrument telemetry
        events as defined for each component.
      </p>
      <p>Usage on the ProductApp level will be something like this:</p>
      <pre>{`
import { OxygenProvider } from '@8x8/oxygen-config';

const AppRoot = () => {
  function telemetryCallback (eventName, payload) {
    // send the data forward
    analytics.track(eventName, payload);
  }
  return (
    <OxygenProvider telemetryCallback={telemetryCallback}>
      <App />
    </OxygenProvider>
  );
};
        `}</pre>
      <h3>On the oxygen component level:</h3>
      <p>Components will not automatically send telemetry data.</p>
      <p>
        After having the OxygenProvider setup with the telemetryCallback and
        components add support for this, they need to accept a{' '}
        <code>telemetryProps</code> prop. This needs to be included with the{' '}
        <b>payload</b> and the <b>uiArea</b>.
      </p>
      <p>Ths info will allow to:</p>
      <ul>
        <li>
          send <b>telemetry</b> data from specific instances of Oxygen
          components which were evaluated that we want their data
        </li>
        <li>identify them for specific flows</li>
      </ul>
      <p>
        An example how this will work on the component level can be found down
        below with something like this:
      </p>
      <pre>{`
import { useOxygen } from '@8x8/oxygen-config';

const Component = ({ telemetryProps }) => {
  const { telemetryCallback } = useOxygen();

  // on action that needs to be tracked
  if (telemetryProps && telemetryCallback) {
    telemetryCallback('my-event', { telemetryProps.uiArea, data1: 'value1', data2: 'value2' })
  }
};
        `}</pre>
    </Doc>
  );
};
ConfigOxygenProviderTelemetry.args = argsConfig;
ConfigOxygenProviderTelemetry.argTypes = argTypesConfig;
ConfigOxygenProviderTelemetry.storyName = 'OxygenProvider - Telemetry';
