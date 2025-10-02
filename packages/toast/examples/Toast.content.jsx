import React from 'react';
import { action } from 'storybook/actions';

import { Toast } from '@8x8/oxygen-toast';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

export const ToastContent = args => (
  <>
    <Doc>
      <h1>
        <code>Toast</code> content
      </h1>
      <p>
        Use the <code>title</code> and <code>description</code> props to provide
        content to the <code>Toast</code> component.
      </p>
      <blockquote>
        ⚠️ <strong>Note</strong> the <code>children</code> prop is{' '}
        <strong>deprecated</strong>. The Classic theme for toast had only a
        single type of content defined and it was provided via{' '}
        <code>children</code>. If you need rich content (React components) you
        can still provide them via the <code>description</code> prop
      </blockquote>
      <h2>
        Use <code>title</code> for a short message
      </h2>
      <p>
        This is the most basic of notifications you can provide. A short message
        for the user
      </p>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="I am a notification"/>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast {...args} title="I am a notification" description={undefined} />
    </ComponentSection>
    <Doc>
      <h2>
        Use <code>description</code> for a longer message
      </h2>
      <blockquote>
        ⚠️ <strong>Note</strong> you should not be using{' '}
        <code>description</code> without a <code>title</code>.
      </blockquote>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="I am a notification" description="Here is a longer description for the notification. Use this when you want convey additional information" />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast
        {...args}
        title="I am a notification"
        // eslint-disable-next-line max-len
        description="Here is a longer description for the notification. Use this when you want convey additional information"
      />
    </ComponentSection>
    <Doc>
      <h2>
        Provide <code>actions</code>
      </h2>
      <p>
        If you want to give the use the possibility to <em>act</em> on a
        notification, you can provide a list of <code>action</code>s
      </p>
      <p>
        The <code>action</code> prop requires an array of <code>Action</code>{' '}
        type objects
      </p>
      <pre>
        {`
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="Description" actions={[
  { title: 'Action 1', callback: action('Action 1'), id: 1 },
  { title: 'Action 2', callback: action('Action 2'), id: 2 },
]} />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Toast
        {...args}
        actions={[
          { title: 'Action 1', callback: action('Action 1'), id: 1 },
          { title: 'Action 2', callback: action('Action 2'), id: 2 },
        ]}
      />
    </ComponentSection>
    <Doc>
      <h2>Toaster handling text overflow</h2>
    </Doc>
    <ComponentSection>
      <Toast
        {...args}
        title={`TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle`}
        description={`DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescripti
onDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription`}
        actions={[
          {
            title:
              'ActionActionActionActionActionActionActionActionActionActionAction',
            callback: action('Action 1'),
            id: 1,
          },
          {
            title:
              'Action2Action2Action2Action2Action2Action2Action2Action2Action2Action2',
            callback: action('Action 2'),
            id: 2,
          },
        ]}
      />
    </ComponentSection>
    <Doc>
      <h2>
        <em>Deprecated</em> content as children + actions
      </h2>
      <p>
        This is deprecated. Used as example here to verify Classic theme with
        Actions
      </p>
    </Doc>
    <ComponentSection>
      <Toast
        {...args}
        actions={[
          { title: 'Action 1', callback: action('Action 1'), id: 1 },
          { title: 'Action 2', callback: action('Action 2'), id: 2 },
        ]}
      >
        This is the title of the notifcation
      </Toast>
    </ComponentSection>
  </>
);
ToastContent.storyName = 'Toast content';
ToastContent.args = argsConfig;
ToastContent.argTypes = argTypesConfig;
