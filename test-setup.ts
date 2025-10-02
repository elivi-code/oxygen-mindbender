/* eslint-disable import/no-extraneous-dependencies */
import { configure as enzymeConfigure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';
import { configure } from '@testing-library/react';
import '@testing-library/jest-dom';

global.ResizeObserver = require('resize-observer-polyfill');

Element.prototype.scrollIntoView = jest.fn();

enzymeConfigure({ adapter: new Adapter() });
configure({ testIdAttribute: 'data-test-id' });
