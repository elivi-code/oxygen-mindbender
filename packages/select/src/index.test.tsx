import Select, {
  components,
  ClearIndicator,
  DropdownIndicator,
  SingleValue,
  MultiValue,
  Option,
  Styled,
  ValueContainer,
  VirtualMenuList,
} from './index';

describe('public exports', () => {
  it('should export Select', () => {
    expect(Select).toBeDefined();
  });
  it('should export components', () => {
    expect(components).toBeDefined();
  });
  it('should export ClearIndicator', () => {
    expect(ClearIndicator).toBeDefined();
  });
  it('should export DropdownIndicator', () => {
    expect(DropdownIndicator).toBeDefined();
  });
  it('should export SingleValue', () => {
    expect(SingleValue).toBeDefined();
  });
  it('should export MultiValue', () => {
    expect(MultiValue).toBeDefined();
  });
  it('should export Option', () => {
    expect(Option).toBeDefined();
  });
  it('should export Styled', () => {
    expect(Styled).toBeDefined();
  });
  it('should export ValueContainer', () => {
    expect(ValueContainer).toBeDefined();
  });
  it('should export VirtualMenuList', () => {
    expect(VirtualMenuList).toBeDefined();
  });
});
