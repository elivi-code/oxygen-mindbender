import React from 'react';
import styled from 'styled-components';

import { SkeletonBlock, SkeletonCircle } from '@8x8/oxygen-skeletons';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 0 8px;
  width: 450px;
`;

const Row = styled.div`
  margin: 8px 0;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Divider = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

const Actions = styled.div`
  display: flex;
  gap: 24px;
`;

const Loader = args => (
  <Container>
    <Row>
      <SkeletonBlock {...args} size="32px" />
    </Row>
    <Row>
      <SkeletonBlock {...args} style={{ width: '50%' }} />
    </Row>
    <Divider />
    <Row>
      <Flex>
        <SkeletonBlock {...args} style={{ width: '100px' }} />
        <Actions>
          <SkeletonCircle {...args} />
          <SkeletonCircle {...args} />
          <SkeletonCircle {...args} />
          <SkeletonCircle {...args} />
        </Actions>
      </Flex>
    </Row>
  </Container>
);

export default Loader;
