import React from 'react';
import { ButtonProps } from '@8x8/oxygen-button';
import { ActionProps } from './types';
type Props = ButtonProps & {
    actions: ActionProps[];
};
declare const ActionsDropdownButton: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<React.FC<Props>>>;
export { ActionsDropdownButton };
//# sourceMappingURL=ActionsDropdownButton.d.ts.map