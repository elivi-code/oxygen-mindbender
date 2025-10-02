import { RadioGroup } from './RadioGroup';

jest.mock('../styled/RadioGroupWrapper', () => 'RadioGroupWrapper');

describe('<RadioGroup>', () => {
  let testSpecificMocks;

  beforeEach(() => {
    testSpecificMocks = {};
  });

  it('should render the RadioGroup component', () => {
    testSpecificMocks.props = {
      children: 'mockedChildren',
      isHorizontal: true,
      name: 'mockedName',
      onChange: 'mockedOnChange',
      theme: 'mockedTheme',
      value: 'mockedValue',
    };
    expect(RadioGroup(testSpecificMocks.props)).toMatchSnapshot();
  });
});
