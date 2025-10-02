import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from 'storybook/actions';

import AlertBanner from '@8x8/oxygen-alert-banner';
import type { AlertBannerProps } from '@8x8/oxygen-alert-banner';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

export const AlertBannerUsage: StoryFn<AlertBannerProps> = args => (
  <>
    <Doc>
      <h1>
        <code>Alert</code> usage
      </h1>
      <p>
        The <code>Alert</code> component is meant for important system messages.
        This is to be shown at the top of the application. It should push the
        content down and not overlap it.
      </p>
      <p>
        The <code>Alert</code> component does not allow user dismissal
        (therefore it does not provide a UI affordance for closing). The
        application is responsible for closing (removing) the <code>Alert</code>{' '}
        when the present issue has been resolved
      </p>
      <pre>
        {`
import AlertBanner from '@8x8/oxygen-alert-banner';

<AlertBanner>Hello. Uh oh! Something very specific went wrong. Please contact your supervisor or admin.</AlertBanner>
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <AlertBanner {...args}>
        {args.children ||
          'Hello. Uh oh! Something very specific went wrong. Please contact your supervisor or admin.'}
      </AlertBanner>
    </ComponentSection>
    <Doc>
      <h2>
        With <code>action</code>
      </h2>
      <p>
        You can provide an <code>action</code> to the user. This will be
        rendered as a button.
      </p>
      <pre>
        {`
import AlertBanner from '@8x8/oxygen-alert-banner';

<AlertBanner
  actionText="I need to act"
  actionCallback={action('actionCallback')}
>
  Hello. Uh oh! Something very specific went wrong. Please contact your supervisor or admin.
</AlertBanner>
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <AlertBanner
        {...args}
        actionText="I need to act"
        actionCallback={action('actionCallback')}
      >
        {args.children ||
          'Hello. Uh oh! Something very specific went wrong. Please contact your supervisor or admin.'}
      </AlertBanner>
    </ComponentSection>
    <Doc>
      <h2>Breakpoint under 576px</h2>
      <p>
        The <code>Alert</code> component renders the action button under the
        main content when the width of the <code>Alert</code> is under{' '}
        <em>576px</em>.
      </p>
      <p>
        In the below example the <code>Alert</code>&amps;s container width is
        limited to <em>576px</em>
      </p>
      <p>
        The <code>Alert</code> component is meant to live above your
        application, so this width change should come from the browser window
        being narrower than 576px
      </p>
      <pre>
        {`
import AlertBanner from '@8x8/oxygen-alert-banner';

<div style={{ maxWidth: '576px' }}>
  <AlertBanner
    actionText="I need to act"
    actionCallback={action('actionCallback')}
  >
    Hello. Uh oh! Something very specific went wrong. Please contact your supervisor or admin.
  </AlertBanner>
</div>
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <div style={{ maxWidth: '576px' }}>
        <AlertBanner
          {...args}
          actionText="I need to act"
          actionCallback={action('actionCallback')}
        />
      </div>
    </ComponentSection>
  </>
);
AlertBannerUsage.storyName = 'AlertBanner usage';
AlertBannerUsage.args = argsConfig;
AlertBannerUsage.argTypes = argTypesConfig;
