import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { withTheme } from '@8x8/oxygen-config';
import BreadcrumbsCollapsed from './BreadcrumbsCollapsed';
import {
  BreadcrumbsList,
  BreadcrumbsListItem,
  BreadcrumbsSeparator,
  BreadcrumbContent,
} from '../styled';

import { THEME_NAME } from '../constants/themeName';

class Breadcrumbs extends PureComponent {
  static propTypes = {
    /**
     * Breadcrumbs theme
     */
    theme: PropTypes.object,
    /**
     * Recommend to use Breadcrumb as a children but you can use Link component from React Router
     */
    children: PropTypes.node.isRequired,
    /**
     * Set the maximum number of breadcrumbs to display. When there are more than the maximum number,
     * only the first and last will be shown, with an ellipsis in between
     */
    maxItems: PropTypes.number,
    /**
     * If max items is exceeded, the number of items to show before the ellipsis
     */
    itemsBeforeCollapse: PropTypes.number,
    /**
     * If max items is exceeded, the number of items to show after the ellipsis
     */
    itemsAfterCollapse: PropTypes.number,
    /**
     * Text element displays between items
     */
    separator: PropTypes.node,
    /**
     * Pass aria-label to nav element
     */
    ariaLabel: PropTypes.string,
    /**
     * Shows HTML title text on ellipsis
     */
    collapsedTitle: PropTypes.string,
  };

  static defaultProps = {
    maxItems: 4,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 1,
    separator: '/',
    ariaLabel: 'Breadcrumbs',
    collapsedTitle: 'Show all links',
  };

  state = {
    isExpanded: false,
  };

  handleOnExpand = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const {
      theme,
      children,
      maxItems,
      itemsBeforeCollapse,
      itemsAfterCollapse,
      separator,
      ariaLabel,
      collapsedTitle,
    } = this.props;
    const { isExpanded } = this.state;
    const key = uuidv4();

    return (
      <ThemeProvider theme={theme}>
        <nav aria-label={ariaLabel}>
          <BreadcrumbsList>
            {React.Children.map(children, (item, index) => {
              const itemCount = React.Children.count(children);
              const isLastItem = index === itemCount - 1;
              const showCollapsedDots =
                !isExpanded &&
                itemCount > maxItems &&
                index === itemsBeforeCollapse &&
                itemCount > itemsBeforeCollapse + itemsAfterCollapse;
              const shouldRenderChildren =
                itemCount <= maxItems ||
                index < itemsBeforeCollapse ||
                index > itemCount - itemsAfterCollapse - 1 ||
                isExpanded;

              if (showCollapsedDots) {
                return (
                  <BreadcrumbsCollapsed
                    key={key}
                    title={collapsedTitle}
                    separator={separator}
                    onClick={this.handleOnExpand}
                  />
                );
              }

              return (
                shouldRenderChildren && (
                  <BreadcrumbsListItem key={key}>
                    <BreadcrumbContent>
                      {item}
                      {!isLastItem && (
                        <BreadcrumbsSeparator role="separator">
                          {separator}
                        </BreadcrumbsSeparator>
                      )}
                    </BreadcrumbContent>
                  </BreadcrumbsListItem>
                )
              );
            })}
          </BreadcrumbsList>
        </nav>
      </ThemeProvider>
    );
  }
}

export default withTheme(Breadcrumbs, THEME_NAME);
