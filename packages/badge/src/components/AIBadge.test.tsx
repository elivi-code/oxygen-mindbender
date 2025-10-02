import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { OxygenProvider } from '@8x8/oxygen-config';
import AIBadge from './AIBadge';
import { AIBadgeProps } from '../types';

describe('<AIBadge />', () => {
  const renderAIBadge = (props: AIBadgeProps = {}) => {
    return render(
      <OxygenProvider>
        <AIBadge {...props} />
      </OxygenProvider>,
    );
  };

  describe('Rendering', () => {
    it('should render with default "AI" text when no children provided', () => {
      renderAIBadge();

      expect(screen.getByText('AI')).toBeInTheDocument();
    });

    it('should render with custom children when provided', () => {
      renderAIBadge({ children: 'ML' });

      expect(screen.getByText('ML')).toBeInTheDocument();
      expect(screen.queryByText('AI')).not.toBeInTheDocument();
    });

    it('should render with custom text content', () => {
      renderAIBadge({ children: 'Bot' });

      expect(screen.getByText('Bot')).toBeInTheDocument();
    });

    it('should render with JSX children', () => {
      renderAIBadge({
        children: <span data-test-id="custom-content">Custom Content</span>,
      });

      expect(screen.getByText('Custom Content')).toBeInTheDocument();
    });

    it('should render with empty children', () => {
      renderAIBadge({ children: '' });

      expect(screen.queryByText('AI')).not.toBeInTheDocument();
      // Star icon should still be present
      expect(
        screen.getByRole('presentation', { hidden: true }),
      ).toBeInTheDocument();
    });

    it('should render with number children', () => {
      renderAIBadge({ children: 42 });

      expect(screen.getByText('42')).toBeInTheDocument();
    });
  });

  describe('Star Icon', () => {
    it('should render the star icon', () => {
      renderAIBadge();

      // StarIcon renders as an SVG with presentation role
      const svgElement = screen.getByRole('presentation', { hidden: true });

      expect(svgElement).toBeInTheDocument();
    });

    it('should always render star icon regardless of children', () => {
      renderAIBadge({ children: 'Custom Text' });

      expect(
        screen.getByRole('presentation', { hidden: true }),
      ).toBeInTheDocument();
      expect(screen.getByText('Custom Text')).toBeInTheDocument();
    });

    it('should render star icon with both text and JSX children', () => {
      renderAIBadge({ children: <span>JSX Content</span> });

      expect(
        screen.getByRole('presentation', { hidden: true }),
      ).toBeInTheDocument();
      expect(screen.getByText('JSX Content')).toBeInTheDocument();
    });
  });

  describe('Test ID', () => {
    it('should render with default testId', () => {
      renderAIBadge();

      expect(screen.getByTestId('AI_BADGE')).toBeInTheDocument();
    });

    it('should render with custom testId', () => {
      renderAIBadge({ testId: 'CUSTOM_AI_BADGE' });

      expect(screen.getByTestId('CUSTOM_AI_BADGE')).toBeInTheDocument();
      expect(screen.queryByTestId('AI_BADGE')).not.toBeInTheDocument();
    });
  });

  describe('Props Spreading', () => {
    it('should spread additional props to the wrapper element', () => {
      const customProps = {
        'data-custom': 'custom-value',
        className: 'custom-class',
        role: 'button',
      };

      renderAIBadge(customProps);

      const badge = screen.getByTestId('AI_BADGE');

      expect(badge).toHaveAttribute('data-custom', 'custom-value');
      expect(badge).toHaveClass('custom-class');
      expect(badge).toHaveAttribute('role', 'button');
    });

    it('should handle aria attributes correctly', () => {
      renderAIBadge({ 'aria-label': 'AI Status Badge', 'aria-hidden': 'true' });

      const badge = screen.getByTestId('AI_BADGE');

      expect(badge).toHaveAttribute('aria-label', 'AI Status Badge');
      expect(badge).toHaveAttribute('aria-hidden', 'true');
    });

    it('should support standard HTML div attributes from type extension', () => {
      renderAIBadge({
        id: 'custom-id',
        title: 'Custom Title',
        style: { color: 'red' },
        onClick: () => {},
        onMouseOver: () => {},
      });

      const badge = screen.getByTestId('AI_BADGE');

      expect(badge).toHaveAttribute('id', 'custom-id');
      expect(badge).toHaveAttribute('title', 'Custom Title');
      expect(badge).toHaveStyle('color: red');
    });
  });

  describe('Component Structure', () => {
    it('should render star icon and text content', () => {
      renderAIBadge({ children: 'ML' });

      const badge = screen.getByTestId('AI_BADGE');
      const starIcon = screen.getByRole('presentation', { hidden: true });

      // Check that both elements are within the badge
      expect(badge).toContainElement(starIcon);
      expect(screen.getByText('ML')).toBeInTheDocument();
    });

    it('should maintain structure with complex children', () => {
      renderAIBadge({
        children: (
          <div>
            <span>Complex</span>
            <strong>Content</strong>
          </div>
        ),
      });

      expect(
        screen.getByRole('presentation', { hidden: true }),
      ).toBeInTheDocument();
      expect(screen.getByText('Complex')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Display Name', () => {
    it('should have correct displayName', () => {
      expect(AIBadge.displayName).toBe('AIBadge');
    });
  });

  describe('Edge Cases', () => {
    it('should handle null children gracefully', () => {
      renderAIBadge({ children: null });

      expect(
        screen.getByRole('presentation', { hidden: true }),
      ).toBeInTheDocument();
      expect(screen.getByTestId('AI_BADGE')).toBeInTheDocument();
    });

    it('should handle undefined children gracefully', () => {
      renderAIBadge({ children: undefined });

      // Should fall back to default "AI" text
      expect(screen.getByText('AI')).toBeInTheDocument();
      expect(
        screen.getByRole('presentation', { hidden: true }),
      ).toBeInTheDocument();
    });

    it('should handle boolean children', () => {
      renderAIBadge({ children: true });

      expect(
        screen.getByRole('presentation', { hidden: true }),
      ).toBeInTheDocument();
      // Boolean true should not render as text
      expect(screen.queryByText('true')).not.toBeInTheDocument();
    });

    it('should handle zero as children', () => {
      renderAIBadge({ children: 0 });

      expect(screen.getByText('0')).toBeInTheDocument();
      expect(
        screen.getByRole('presentation', { hidden: true }),
      ).toBeInTheDocument();
    });
  });
});
