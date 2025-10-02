import React from 'react';
import styled from 'styled-components';
import { useOxygen } from '@8x8/oxygen-config';
import themes from '@8x8/oxygen-theme';
import { Doc } from '@8x8/oxygen-storybook-utils';

const Color = styled.td`
  width: 100px;
  height: 30px;
`;

export const Tokens = () => {
  const { theme } = useOxygen();

  const colors = {};

  for (const [key, value] of Object.entries(themes.colorPalette)) {
    // handle opacity in hex value
    const v = value.length === 9 ? value.substr(0, 7) : value;

    if (!colors[v]) {
      colors[v] = key;
    } else {
      // a few color tokens share the same value
      colors[v] += ` / ${key}`;
    }
  }

  return (
    <Doc>
      <h1>Tokens</h1>
      <p>
        Use the theme selector above to change the theme between light & dark
        and see the values for each of them.
      </p>
      <table>
        <thead>
          <th>token</th>
          <th>color token</th>
          <th>value</th>
          <th>color (where applicable)</th>
        </thead>
        <tbody>
          {Object.keys(theme).map(token => {
            if (typeof theme[token] === 'string') {
              // handle opacity in hexvalue
              const t =
                theme[token].length === 9
                  ? theme[token].substring(0, 7)
                  : theme[token];

              return (
                <tr key={token}>
                  <td>
                    <code>{token}</code>
                  </td>
                  <td>
                    <code>{colors[t]}</code>
                  </td>
                  <td>
                    <code>{theme[token]}</code>
                  </td>
                  <Color style={{ background: theme[token] }} />
                </tr>
              );
            }

            return Object.keys(theme[token]).map(subToken => {
              return (
                <tr key={`${token}.${subToken}`}>
                  <td>
                    <code>
                      {token}.{subToken}
                    </code>
                  </td>
                  <td>-</td>
                  <td>
                    <code>{theme[token][subToken]}</code>
                  </td>
                  <Color style={{ background: theme[token][subToken] }} />
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </Doc>
  );
};

Tokens.storyName = 'Tokens';

Tokens.parameters = {
  chromatic: { disable: false },
};
