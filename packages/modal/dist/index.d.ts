/* eslint-disable */
import React, {
  ReactNode,
  ReactElement,
  Component,
  FunctionComponent,
} from 'react';

// copied from focus-trap types
type MouseEventToBoolean = (event: MouseEvent | TouchEvent) => boolean;

type ModalSizes = 'small' | 'medium' | 'big';
type TitleAlignments = 'left' | 'right' | 'center';
type FooterAlignments =
  | 'left'
  | 'center'
  | 'right'
  | 'space-between'
  | 'space-around';

interface ModalPortalProps {
  isVisible?: boolean;
  hasShadow?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  allowOutsideClick?: boolean | MouseEventToBoolean;
  /**
   * @deprecated current implementation does not have any effect
   */
  disableAutoFocus?: boolean;
  size?: ModalSizes;
  width?: string;
  height?: string;
  onClose?: () => void;
  children?: ReactNode;
  shouldUseFocusTrap?: boolean;
  initialFocus?: HTMLElement | ReactNode | SVGElement | string;
  portalRef?:
    | React.RefObject<HTMLDivElement>
    | ((instance: HTMLDivElement | null) => void);
  testId?: string;
  theme?: object;
  focusAfterCloseItemRef?: React.RefObject<HTMLElement>;
}

interface ModalProps extends ModalPortalProps {
  targetNode?: HTMLElement | ReactElement;
}

interface ModalHeaderProps {
  hasBorderBottom?: boolean;
  alignTitle?: TitleAlignments;
  title?: string;
  onClose?: () => void;
  children?: ReactNode;
  testId?: string;
  theme?: object;
  iconCloseTitle?: string;
  buttonCloseRef?: React.Ref<any> | Function;
}

interface ModalFooterProps {
  hasBorderTop?: boolean;
  hasButtonSpacing?: boolean;
  isSmall?: boolean;
  align?: FooterAlignments;
  children?: ReactNode;
  testId?: string;
  theme?: object;
}

interface ModalSize {
  /**
   * 'small'
   */
  SMALL: 'small';
  /**
   * 'medium'
   */
  MEDIUM: 'medium';
  /**
   * 'big'
   */
  BIG: 'big';
}

interface ModalHeaderAlignTitle {
  /**
   * 'left'
   */
  LEFT: 'left';
  /**
   * 'right'
   */
  RIGHT: 'right';
  /**
   * 'center'
   */
  CENTER: 'center';
}

interface ModalFooterAlign {
  /**
   * 'left'
   */
  LEFT: 'left';
  /**
   * 'center'
   */
  CENTER: 'center';
  /**
   * 'right'
   */
  RIGHT: 'right';
  /**
   * 'space-between'
   */
  SPACE_BETWEEN: 'space-between';
  /**
   * 'space-around'
   */
  SPACE_AROUND: 'space-around';
}

interface StyledComponents {
  Container: Component;
  Content: Component;
  HeaderContainer: Component;
  HeaderTitle: Component;
  HeaderCloseIcon: Component;
  FooterContainer: Component;
}

declare class Modal extends Component<ModalProps, any> {}

declare class ModalPortal extends Component<ModalPortalProps, any> {}

declare const ModalHeader: FunctionComponent<ModalHeaderProps>;
declare const ModalContent: FunctionComponent<React.PropsWithChildren>;
declare const ModalFooter: FunctionComponent<ModalFooterProps>;

declare const MODAL_SIZE: ModalSize;
declare const MODAL_HEADER_ALIGN_TITLE: ModalHeaderAlignTitle;
declare const MODAL_FOOTER_ALIGN: ModalFooterAlign;
declare const Styled: {
  Container: FunctionComponent<React.PropsWithChildren>;
  Content: FunctionComponent<React.PropsWithChildren>;
  FooterContainer: FunctionComponent<React.PropsWithChildren>;
  HeaderContainer: FunctionComponent<React.PropsWithChildren>;
  HeaderSubtitle: FunctionComponent<React.PropsWithChildren>;
  HeaderTitle: FunctionComponent<React.PropsWithChildren>;
  HeaderTitleWrapper: FunctionComponent<React.PropsWithChildren>;
  HeaderCloseIcon: FunctionComponent<React.PropsWithChildren>;
};

export default Modal;
export {
  ModalPortal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalSizes,
  MODAL_SIZE,
  MODAL_HEADER_ALIGN_TITLE,
  MODAL_FOOTER_ALIGN,
  ModalProps,
  ModalPortalProps,
  ModalHeaderProps,
  ModalFooterProps,
  Styled,
};
