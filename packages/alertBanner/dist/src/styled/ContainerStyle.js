import React from 'react';
import themes from '@8x8/oxygen-theme';
const { novo } = themes;
export const ContainerStyle = () => (React.createElement("style", null, `@container (max-width: 576px) {
        .alert-banner-wrapper {
          flex-direction: column;
          align-items: stretch;
          padding: ${novo.spacing05};
        }
        .alert-banner-button {
          width: 100%;
        }
    }`));
