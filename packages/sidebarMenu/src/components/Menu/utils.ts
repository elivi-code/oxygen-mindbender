import { type MenuItemProps } from '../../types';

export const scrollToRef = (
  ref: React.MutableRefObject<HTMLElement | null>,
): void => {
  ref.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

type PropsWithAll = {
  linkComponent: MenuItemProps['linkComponent'];
  link: MenuItemProps['link'];
  linkProp: MenuItemProps['linkProp'];
};
type PropsWithEither = {
  linkComponent?: MenuItemProps['linkComponent'];
  link?: MenuItemProps['link'];
  linkProp?: MenuItemProps['linkProp'];
};

// overload signatures
export function getCustomButtonOverrideProps(
  arg0: boolean,
  arg1: PropsWithAll,
): {
  as: React.ComponentType<any>;
  linkProp: string;
};
export function getCustomButtonOverrideProps(
  arg0: boolean,
  arg1: PropsWithEither,
): Record<string, never>;

export function getCustomButtonOverrideProps(
  customCheck: boolean,
  { linkComponent, link, linkProp }: PropsWithEither,
) {
  if (!customCheck) {
    return {};
  }

  if (!linkComponent || !link || !linkProp) {
    return {};
  }

  return {
    as: linkComponent,
    [linkProp]: link,
  };
}
