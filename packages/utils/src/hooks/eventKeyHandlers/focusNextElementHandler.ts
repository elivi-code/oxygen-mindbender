import { Dispatch, SetStateAction } from 'react';
import getNextIndexElement from './getNextIndexElement';

const focusNextElementHandler = (
  direction: boolean,
  elementCount: number,
  setFocusIdHandler: Dispatch<SetStateAction<number>>,
): void => {
  setFocusIdHandler((prevState: number) =>
    getNextIndexElement(direction, elementCount, prevState),
  );
};

export default focusNextElementHandler;
