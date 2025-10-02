import React from 'react';
import { MenuListProps, GroupBase } from 'react-select';
import { SelectOption } from './SelectProps';
declare const VirtualMenuList: <OptionValue, Option extends SelectOption<OptionValue>, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: MenuListProps<Option, IsMulti, Group>) => React.JSX.Element;
export { VirtualMenuList };
declare const _default: (<OptionValue, Option extends SelectOption<OptionValue>, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: MenuListProps<Option, IsMulti, Group>) => React.JSX.Element) & React.ForwardRefExoticComponent<MenuListProps<SelectOption<unknown>, boolean, GroupBase<SelectOption<unknown>>> & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=VirtualMenuList.d.ts.map