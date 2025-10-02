import React, { useEffect, useState } from 'react';
import { ProgressBar } from '@8x8/oxygen-loaders';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

const useProgressInterval = (step, reloadProgressTimer) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(oldProgress => {
        const newProgress = oldProgress + step;

        if (newProgress === 100) {
          clearInterval(interval);
        }

        return newProgress;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (reloadProgressTimer) {
      setProgress(0);
    }
  }, [reloadProgressTimer]);

  return progress;
};

export const ProgressBarSimulator = args => {
  const progress = useProgressInterval(
    args.progressStep,
    args.reloadProgressTimer,
  );

  return <ProgressBar {...args} value={progress} />;
};

ProgressBarSimulator.storyName = '11. Simulator';
ProgressBarSimulator.args = {
  ...argsConfig,
  reloadProgressTimer: false,
  progressStep: 5,
};
ProgressBarSimulator.argTypes = argTypesConfig;

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  decorators: [PlaygroundDecorator],
};
