import Modal, { MODAL_SIZE } from './components/Modal';
import ModalPortal from './components/ModalPortal';
import ModalHeader, { MODAL_HEADER_ALIGN_TITLE } from './components/ModalHeader';
import ModalFooter, { MODAL_FOOTER_ALIGN } from './components/ModalFooter';
import ModalContent from './components/ModalContent';
import { Container, Content, FooterContainer, HeaderCloseIcon, HeaderContainer, HeaderTitle, HeaderTitleWrapper, HeaderSubtitle } from './styled';
var Styled = {
  Container: Container,
  Content: Content,
  FooterContainer: FooterContainer,
  HeaderCloseIcon: HeaderCloseIcon,
  HeaderContainer: HeaderContainer,
  HeaderTitle: HeaderTitle,
  HeaderTitleWrapper: HeaderTitleWrapper,
  HeaderSubtitle: HeaderSubtitle
};
export default Modal;
export { ModalPortal, ModalHeader, ModalFooter, ModalContent, MODAL_SIZE, MODAL_HEADER_ALIGN_TITLE, MODAL_FOOTER_ALIGN, Styled };