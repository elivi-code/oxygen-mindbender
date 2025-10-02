import { alertBannerNovo } from '@8x8/oxygen-constants';

export type Theme = Partial<typeof alertBannerNovo>;

export type AlertBannerProps = {
  children: React.ReactNode;
  actionText?: string;
  actionCallback?: () => void;
  testId?: string;
  theme?: Theme;
};
