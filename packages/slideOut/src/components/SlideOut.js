import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';
import noop from 'lodash.noop';
import clamp from 'lodash.clamp';

import * as Styled from '../styled';

const slideOutOnResizeStyle = {
  cursor: 'col-resize',
  userSelect: 'none',
};

function SlideOut({
  theme,
  testId,
  children,
  className,
  isVisible,
  isResizable,
  hasAnimation,
  defaultWidth,
  minWidth,
  maxWidth,
  onResize,
}) {
  const containerRef = useRef(null);
  const width = useRef(defaultWidth);
  const initialWidth = useRef();
  const initialSplitterPosition = useRef();
  const [resizeInProgress, setResizeInProgress] = useState(false);

  const initialParentStyles = useRef({});

  useEffect(() => {
    if (!defaultWidth) {
      return;
    }

    updateWidth();
  }, [defaultWidth]);

  function updateWidth() {
    if (!containerRef.current) {
      return;
    }

    const newWidth = clamp(defaultWidth, minWidth, maxWidth);

    width.current = newWidth;
    containerRef.current.style.width = `${newWidth}px`;
  }

  function storeInitialElementStyles(element) {
    if (element) {
      Object.keys(slideOutOnResizeStyle).forEach(key => {
        initialParentStyles.current[key] = element.style[key];
      });
    }
  }

  function onDragStart(e) {
    if (!isResizable && !containerRef.current) {
      return;
    }

    if (e.nativeEvent.which !== 1) {
      return;
    }

    const parentContainer = containerRef.current.parentNode;

    if (!parentContainer) {
      return;
    }

    initialSplitterPosition.current = e.clientX;
    initialWidth.current = width.current;

    setResizeInProgress(true);

    storeInitialElementStyles(parentContainer);

    if (parentContainer && parentContainer.style) {
      Object.keys(slideOutOnResizeStyle).forEach(key => {
        parentContainer.style[key] = slideOutOnResizeStyle[key];
      });
    }

    window.addEventListener('mousemove', onDrag);
    window.addEventListener('mouseup', onDragEnd);
  }

  function onDrag(e) {
    setElementWidth(initialSplitterPosition.current, e.clientX);
  }

  function onDragEnd(e) {
    if (!containerRef.current) {
      return;
    }

    setElementWidth(initialSplitterPosition.current, e.clientX);

    initialSplitterPosition.current = undefined;
    initialWidth.current = undefined;

    setResizeInProgress(false);

    const parentContainer = containerRef.current.parentNode;

    if (parentContainer && parentContainer.style) {
      Object.keys(initialParentStyles.current).forEach(key => {
        parentContainer.style[key] = initialParentStyles.current[key];
      });
    }

    window.removeEventListener('mousemove', onDrag);
    window.removeEventListener('mouseup', onDragEnd);
  }

  function setElementWidth(initialPosition, currentPosition) {
    if (!containerRef.current) {
      return;
    }

    let newWidth = initialWidth.current + (initialPosition - currentPosition);

    newWidth = clamp(newWidth, minWidth, maxWidth);

    width.current = newWidth;
    containerRef.current.style.width = `${newWidth}px`;

    onResize(newWidth);
  }

  return (
    <ThemeProvider theme={theme}>
      <Styled.Container
        className={className}
        ref={containerRef}
        isVisible={isVisible}
        hasAnimation={hasAnimation}
        resizeInProgress={resizeInProgress}
        minWidth={minWidth}
        maxWidth={maxWidth}
        {...getTestAttributes(`${testId}_CONTAINER`)}
      >
        {isResizable && (
          <Styled.Splitter
            {...getTestAttributes(`${testId}_SPLITTER`)}
            // eslint-disable-next-line react/jsx-no-bind
            onMouseDown={onDragStart}
          />
        )}

        <Styled.Content {...getTestAttributes(`${testId}_CONTENT`)}>
          {children}
        </Styled.Content>
      </Styled.Container>
    </ThemeProvider>
  );
}

SlideOut.propTypes = {
  theme: PropTypes.object,
  testId: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  isResizable: PropTypes.bool,
  hasAnimation: PropTypes.bool,
  defaultWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  onResize: PropTypes.func,
};

SlideOut.defaultProps = {
  testId: 'SLIDE_OUT',
  className: undefined,
  isVisible: false,
  isResizable: true,
  hasAnimation: true,
  defaultWidth: 400,
  minWidth: undefined,
  maxWidth: undefined,
  onResize: noop,
};

export { SlideOut };

export default withTheme(SlideOut, 'slideOut');
