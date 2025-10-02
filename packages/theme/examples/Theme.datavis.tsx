import React from 'react';
import styled from 'styled-components';
import { useOxygen } from '@8x8/oxygen-config';
import { Doc } from '@8x8/oxygen-storybook-utils';

const Color = styled.td`
  width: 100px;
  height: 30px;
`;

const DataVisArr = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
];

export const DataVis = () => {
  const { theme } = useOxygen();

  return (
    <Doc>
      <h1>Data Visualisation</h1>
      <p>Data visualisation tokens</p>
      <table>
        <thead>
          <th>color token</th>
          <th>text color token</th>
          <th>background & text color exemplified</th>
        </thead>
        <tbody>
          {DataVisArr.map(n => {
            const token = `data${n}`;
            const textColorToken = `dataText${n}`;

            return (
              <tr key={n}>
                <td>
                  <code>{token}</code>
                </td>
                <td>
                  <code>{textColorToken}</code>
                </td>
                <Color
                  style={{
                    background: theme[token],
                    color: theme[textColorToken],
                    width: '400px',
                  }}
                >
                  <code style={{ background: 'none' }}>
                    background: {theme[token]}
                  </code>
                  <br />
                  <code style={{ background: 'none' }}>
                    color: {theme[textColorToken]}
                  </code>
                </Color>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Doc>
  );
};
