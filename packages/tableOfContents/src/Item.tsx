import React from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { Li } from './styled/List';
import { Button } from './styled/Button';
import { ItemProps } from './types';

export const Item: React.FC<
  React.PropsWithChildren & ItemProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ children, isActive, onClick, testId, ...props }) => {
  return (
    <Li {...getTestAttributes(`${testId}_ITEM`)}>
      <Button isActive={isActive} onClick={onClick} {...props}>
        {children}
      </Button>
    </Li>
  );
};
