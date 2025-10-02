import React from 'react';
import { InputProps } from '../components/InputProps';
import { InputTheme } from '../types';

export type InputFieldProps = Pick<InputProps, 'fixed' | 'isReadOnly'> & {
  theme: InputTheme;
  isDisabled: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'disabled'>;
