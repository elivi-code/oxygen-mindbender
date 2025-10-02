/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { action } from 'storybook/actions';

import {
  MODAL_SIZE,
  MODAL_HEADER_ALIGN_TITLE,
  MODAL_FOOTER_ALIGN,
} from '@8x8/oxygen-modal';

export const argsConfig = {
  // Modal
  shouldCloseOnEsc: undefined,
  shouldCloseOnOverlayClick: undefined,
  initialFocus: undefined,
  hasShadow: undefined,
  size: undefined,
  width: undefined,
  height: undefined,
  modalProps: undefined,
  testId: undefined,

  // ModalHeader
  title: 'Modal Title',
  modalHeaderChildren: undefined,
  alignTitle: undefined,
  onCloseFn: true,
  iconCloseTitle: undefined,
  hasBorderBottom: undefined,
  testIdModalHeader: undefined,
  titleProps: undefined,
  __TYPE_HEADER: 'ModalHeader',

  // ModalFooter
  align: undefined,
  isSmall: undefined,
  hasButtonSpacing: undefined,
  hasBorderTop: undefined,
  testIdModalFooter: undefined,
  __TYPE_FOOTER: 'ModalFooter',

  // Test Label
  position: 'relative',
  zIndex: 1,
  top: '0px',
};

export const argTypesConfig = {
  // Modal
  shouldCloseOnEsc: {
    control: { type: 'boolean' },
    table: {
      category: 'Modal',
    },
  },
  shouldCloseOnOverlayClick: {
    control: { type: 'boolean' },
    table: {
      category: 'Modal',
    },
  },
  initialFocus: {
    control: { type: 'text' },
    table: {
      category: 'Modal',
    },
  },
  hasShadow: {
    control: { type: 'boolean' },
    table: {
      category: 'Modal',
    },
  },
  size: {
    control: { type: 'select' },
    options: Object.values(MODAL_SIZE),
    table: {
      category: 'Modal',
    },
  },
  width: {
    control: { type: 'text' },
    table: {
      category: 'Modal',
    },
  },
  height: {
    control: { type: 'text' },
    table: {
      category: 'Modal',
    },
  },
  modalProps: {
    control: { type: 'object' },
    table: {
      category: 'Modal',
    },
  },
  testId: {
    control: { type: 'text' },
    table: {
      category: 'Modal',
    },
  },
  // Modal Header
  title: {
    control: { type: 'text' },
    table: {
      category: 'ModalHeader',
    },
  },
  modalHeaderChildren: {
    control: { type: 'text' },
    table: {
      category: 'ModalHeader',
    },
  },
  hasBorderBottom: {
    control: { type: 'boolean' },
    table: {
      category: 'ModalHeader',
    },
  },
  alignTitle: {
    control: { type: 'select' },
    options: Object.values(MODAL_HEADER_ALIGN_TITLE),
    table: {
      category: 'ModalHeader',
    },
  },
  iconCloseTitle: {
    control: { type: 'text' },
    table: {
      category: 'ModalHeader',
    },
  },
  onCloseFn: {
    control: { type: 'boolean' },
    table: {
      category: 'ModalHeader',
    },
  },
  testIdModalHeader: {
    control: { type: 'text' },
    table: {
      category: 'ModalHeader',
    },
  },
  titleProps: {
    control: { type: 'object' },
    table: {
      category: 'ModalHeader',
    },
  },
  __TYPE_HEADER: {
    table: {
      disable: true,
    },
  },

  // ModalFooter
  align: {
    control: { type: 'select' },
    options: Object.values(MODAL_FOOTER_ALIGN),
    table: {
      category: 'ModalFooter',
    },
  },
  isSmall: {
    control: { type: 'boolean' },
    table: {
      category: 'ModalFooter',
    },
  },
  hasBorderTop: {
    control: { type: 'boolean' },
    table: {
      category: 'ModalFooter',
    },
  },
  hasButtonSpacing: {
    control: { type: 'boolean' },
    table: {
      category: 'ModalFooter',
    },
  },
  testIdModalFooter: {
    table: {
      category: 'ModalFooter',
    },
  },
  __TYPE_FOOTER: {
    table: {
      disable: true,
    },
  },

  // Test Label
  position: {
    control: { type: 'select' },
    options: ['static', 'relative', 'fixed', 'absolute', 'sticky'],
    table: {
      category: 'Test Label',
    },
  },
  zIndex: {
    table: {
      category: 'Test Label',
    },
  },
  top: {
    table: {
      category: 'Test Label',
    },
  },
};

export const getModalProps = args => {
  return {
    modalProps: {
      ...(args.shouldCloseOnEsc && { shouldCloseOnEsc: args.shouldCloseOnEsc }),
      ...(args.shouldCloseOnOverlayClick && {
        shouldCloseOnOverlayClick: args.shouldCloseOnOverlayClick,
      }),
      ...(args.initialFocus && { initialFocus: args.initialFocus }),
      ...(args.hasShadow && { hasShadow: args.hasShadow }),
      ...(args.size && { size: args.size }),
      ...(args.width && { width: args.width }),
      ...(args.height && { height: args.height }),
      ...(args.testId && { testId: args.testId }),
      ...(args.modalProps && { modalProps: args.modalProps }),
    },

    modalHeaderProps: {
      ...(args.alignTitle && { alignTitle: args.alignTitle }),
      ...(args.hasBorderBottom && { hasBorderBottom: args.hasBorderBottom }),
      ...(args.iconCloseTitle && { iconCloseTitle: args.iconCloseTitle }),
      ...(args.modalHeaderChildren && { children: args.modalHeaderChildren }),
      ...(args.title && { title: args.title }),
      ...(args.testIdModalHeader && { testId: args.testIdModalHeader }),
      ...(args.titleProps && { titleProps: args.titleProps }),
      ...(args.__TYPE_HEADER && { __TYPE: args.__TYPE_HEADER }),
    },

    modalFooterProps: {
      ...(args.align && { align: args.align }),
      ...(args.isSmall && { isSmall: args.isSmall }),
      ...(args.hasButtonSpacing && { hasButtonSpacing: args.hasButtonSpacing }),
      ...(args.hasBorderTop && { hasBorderTop: args.hasBorderTop }),
      ...(args.testIdModalFooter && { testId: args.testIdModalFooter }),
      ...(args.__TYPE_FOOTER && { __TYPE: args.__TYPE_FOOTER }),
    },

    testLabelProps: {
      ...(args.position && { position: args.position }),
      ...(args.zIndex && { zIndex: args.zIndex }),
      ...(args.top && { top: args.top }),
    },
  };
};

export const useModalState = args => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    action('onClose');
    setIsOpen(false);
  };

  const onOpen = () => {
    action('onOpen');
    setIsOpen(true);
  };

  const { modalProps, modalHeaderProps, modalFooterProps } =
    getModalProps(args);

  modalProps.onClose = onClose;

  if (args.onCloseFn) {
    modalHeaderProps.onClose = onClose;
  }

  return {
    isOpen,
    onClose,
    onOpen,
    modalProps,
    modalHeaderProps,
    modalFooterProps,
  };
};
