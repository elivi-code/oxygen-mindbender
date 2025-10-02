import React from 'react';

export default function isReactDevMode() {
  return '_self' in React.createElement('div');
}
