import React from 'react';
import styled from 'styled-components';

function styleJson(jsonData: object) {
  let formattedJson = JSON.stringify(jsonData, null, 4);

  // Replace property names with spans having class "property-name"
  formattedJson = formattedJson.replace(
    /"(\w+)"(?=\s*:)/g,
    '"<span class="property-name">$1</span>"',
  );

  // Replace property values with spans having class "property-value"
  formattedJson = formattedJson.replace(
    /:\s*"(.*?)"/g,
    ': "<span class="property-value">$1</span>"',
  );

  return formattedJson;
}

const Wrapper = styled.div`
  ${({ theme }) => ({ ...theme.body01 })};
  color: ${({ theme }) => theme.textColor01};
`;

const TextContainer = styled.div`
  max-height: 500px;
  overflow: auto;
  border: 1px solid black;
  height: 100%;
`;

const StyledPre = styled.pre`
  .property-name {
    color: blue;
  }
`;

function JSONViewer({ data, title = '' }: { data: object; title?: string }) {
  return (
    <Wrapper>
      {title && <h3>{title}</h3>}
      <TextContainer>
        <StyledPre dangerouslySetInnerHTML={{ __html: styleJson(data) }} />
      </TextContainer>
    </Wrapper>
  );
}

export default JSONViewer;
