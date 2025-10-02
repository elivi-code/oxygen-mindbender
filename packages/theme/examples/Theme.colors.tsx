import React from 'react';
import styled from 'styled-components';
import themes from '@8x8/oxygen-theme';
import { Doc } from '@8x8/oxygen-storybook-utils';

const Color = styled.td`
  width: 100px;
  height: 30px;
`;

export const Colors = () => (
  <Doc>
    <h1>Colors</h1>
    <table>
      <thead>
        <th>Color</th>
        <th>Name</th>
        <th>Value</th>
      </thead>
      <tbody>
        {Object.keys(themes.novoColorPalette).map(colorKey => {
          return (
            <tr key={colorKey}>
              <Color
                style={{ background: themes.novoColorPalette[colorKey] }}
              />
              <td>
                <code>{colorKey}</code>
              </td>
              <td>
                <code>{themes.novoColorPalette[colorKey]}</code>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </Doc>
);
