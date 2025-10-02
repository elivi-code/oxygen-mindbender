import type { Theme, ToastType } from '../../types';
import { toastTypes } from '../../types';

type getMarkingColorProps = {
  type: ToastType;
  theme: Theme;
};

export const getMarkingColor = ({ theme, type }: getMarkingColorProps) => {
  switch (type) {
    case toastTypes.success: {
      return theme.markingColorSuccess;
    }
    case toastTypes.warning: {
      return theme.markingColorWarning;
    }
    case toastTypes.error: {
      return theme.markingColorError;
    }
    case toastTypes.loading: {
      return theme.markingColorLoading;
    }
    case toastTypes.info:
    default: {
      return theme.markingColorInfo;
    }
  }
};

export const getIconMarkingColor = ({ theme, type }: getMarkingColorProps) => {
  switch (type) {
    case toastTypes.success: {
      return theme.markingIconColorSuccess;
    }
    case toastTypes.warning: {
      return theme.markingIconColorWarning;
    }
    case toastTypes.error: {
      return theme.markingIconColorError;
    }
    case toastTypes.loading: {
      return theme.markingIconColorLoading;
    }
    case toastTypes.info:
    default: {
      return theme.markingIconColorInfo;
    }
  }
};
