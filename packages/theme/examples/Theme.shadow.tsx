import React from 'react';
import styled from 'styled-components';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

const shadowTokens = ['shadowLow', 'shadowMedium', 'shadowHigh'] as const;

const ShadowExample = styled.div<{
  shadowToken: 'shadowLow' | 'shadowMedium' | 'shadowHigh';
}>`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  text-align: center;
  line-height: 120px;
  box-shadow: ${({ theme, shadowToken }) => theme[shadowToken]};
`;

const CustomBackground = styled(ComponentSection)`
  background: ${({ theme }) => theme.icon05};
  gap: 20px;
`;

export const Shadow = () => (
  <>
    <Doc>
      <h1>Shadow props</h1>
      <p>
        Possible shadow tokens: <code>shadowLow</code>,{' '}
        <code>shadowMedium</code>, <code>shadowHigh</code>
      </p>
      <p>
        Shadows need to be applied to element <code>box-shadow</code> CSS
        property
      </p>
      <h2>Shadows</h2>
      <pre>{`
const ShadowExample = styled.div\`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  box-shadow: \${({ theme }) => theme.shadowMedium};
\`
        `}</pre>
    </Doc>

    <CustomBackground>
      {shadowTokens.map(shadowKey => (
        <div key={shadowKey}>
          <ShadowExample shadowToken={shadowKey}>
            <code>{shadowKey}</code>
          </ShadowExample>
        </div>
      ))}
    </CustomBackground>
  </>
);

Shadow.storyName = 'Shadow';

Shadow.parameters = {
  chromatic: { disable: false },
};
