import React, { useState } from 'react';
import Avatar from '@8x8/oxygen-avatar';
import Button, { ButtonGroup } from '@8x8/oxygen-button';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

const imageUrl = `https://cdn-icons-png.flaticon.com/512/147/147144.png`;
const failImageUrl = `https://test`;
const noImageUrl = undefined;

export const AvatarImageHandling = args => {
  const [componentKey, setComponentKey] = useState(0);
  const [currentImg, setCurrentImg] = useState<string | undefined>(undefined);

  return (
    <>
      <Doc>
        <h1>
          <code>Avatar</code> examples for image handling
        </h1>

        <p>
          How the <code>Avatar</code> component handles different issues when it
          comes to error handling, loading states etc
        </p>

        <pre>{`
import Avatar from '@8x8/oxygen-avatar';

<Avatar {...args} src={imageUrl} />
        `}</pre>
      </Doc>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Button onClick={() => setComponentKey(prev => prev + 1)}>
          Refresh images
        </Button>

        <br />

        <AvatarsExample {...args} key={componentKey} />
      </div>

      <Doc>
        <h2>Test for image reset</h2>
        <p>
          Test for <a href="https://agile.8x8.com/browse/OX-2458">OX-2458</a>
        </p>
        <ButtonGroup>
          <Button onClick={() => setCurrentImg(imageUrl)}>
            Set src to image
          </Button>
          <Button onClick={() => setCurrentImg(noImageUrl)}>
            Set src to undefined
          </Button>
        </ButtonGroup>
      </Doc>
      <ComponentSection>
        <Avatar {...args} src={currentImg} />
      </ComponentSection>
    </>
  );
};

function AvatarsExample({ ...args }) {
  return (
    <>
      <Doc>Image loading - Avatar with Name</Doc>
      <ComponentSection>
        <Avatar {...args} src={imageUrl} name="John Doe" />
      </ComponentSection>

      <Doc>Image loading - Avatar without Name</Doc>
      <ComponentSection>
        <Avatar {...args} src={imageUrl} name={undefined} />
      </ComponentSection>

      <Doc>Failing load - Avatar with name</Doc>
      <ComponentSection>
        <Avatar {...args} src={failImageUrl} name="John Doe" />
      </ComponentSection>

      <Doc>Failing load - Avatar without name</Doc>
      <ComponentSection>
        <Avatar {...args} src={failImageUrl} name={undefined} />
      </ComponentSection>
    </>
  );
}

AvatarImageHandling.args = argsConfig;
AvatarImageHandling.argTypes = argTypesConfig;
AvatarImageHandling.storyName = 'Avatar image handling';
