import React from 'react';

import Accordion, {
  AccordionGroup,
  expandTrigger,
} from '@8x8/oxygen-accordion';
import { IconButton } from '@8x8/oxygen-button';
import Tooltip from '@8x8/oxygen-tooltip';
import { InfoCircleIcon, VideoIcon } from '@8x8/oxygen-icon';
import { AIBadge } from '@8x8/oxygen-badge';

import { ComponentItem, Doc } from '@8x8/oxygen-storybook-utils';
import { generateLongText, lipsum } from './data';

function AccordionExpandTrigger() {
  return (
    <>
      <Doc>
        <h1>
          <code>Accordion</code> with <code>expandTrigger</code> Prop
        </h1>
        <p>
          The <code>expandTrigger</code> prop enables arrow-only interaction
          mode, where only the chevron icon is clickable for
          expanding/collapsing. This allows custom content in the header to have
          independent interactions without interfering with the accordion&apos;s
          toggle functionality.
        </p>
        <p>
          You can use the <code>expandTrigger</code> prop in two ways:
        </p>
        <ul>
          <li>
            <strong>String literals:</strong>{' '}
            <code>expandTrigger=&quot;arrow&quot;</code> or{' '}
            <code>expandTrigger=&quot;header&quot;</code>
          </li>
          <li>
            <strong>Imported constants (recommended):</strong>{' '}
            <code>expandTrigger=&#123;expandTrigger.arrow&#125;</code> or{' '}
            <code>expandTrigger=&#123;expandTrigger.header&#125;</code> -
            provides better type safety and IntelliSense
          </li>
        </ul>
      </Doc>

      <Doc>
        <h2>Group-Level Configuration with String Literals</h2>
        <p>
          Setting <code>expandTrigger</code> and <code>translations</code> at
          the <code>AccordionGroup</code> level applies them to all child
          accordions. Individual accordions can still override these settings
          when needed.
        </p>
        <p>
          This approach uses traditional string literals and is fully supported
          for backward compatibility.
        </p>
      </Doc>

      <pre>
        {`
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import { IconButton } from '@8x8/oxygen-button';
import Tooltip from '@8x8/oxygen-tooltip';
import { InfoCircleIcon, VideoIcon } from '@8x8/oxygen-icon';
import { AIBadge } from '@8x8/oxygen-badge';

// Group-level configuration with string literals
<AccordionGroup 
  expandTrigger="arrow"
  translations={{
    expand: 'Open',
    collapse: 'Close',
  }}
>
  <Accordion
    title="Additional information"
    contentAfterTitle={
      <>
        <Tooltip title="AI" includeWrapper={false}>
          <IconButton size="small2XIconXs" aria-label="AI information">
            <InfoCircleIcon />
          </IconButton>
        </Tooltip>
        <AIBadge />
      </>
    }
  >
    Content inherits group settings...
  </Accordion>

  <Accordion
    title="Settings"
    text="Arrow-only trigger with group translations"
    contentAfterTitle={
      <Tooltip title="Click me!" includeWrapper={false} showOn="click">
        <IconButton size="small2XIconXs" aria-label="Settings information">
          <InfoCircleIcon />
        </IconButton>
      </Tooltip>
    }
  >
    Custom content can have its own interactions...
  </Accordion>
</AccordionGroup>
        `}
      </pre>

      <ComponentItem>
        <AccordionGroup
          expandTrigger="arrow"
          translations={{
            expand: 'Open',
            collapse: 'Close',
          }}
        >
          <Accordion
            title="Additional information"
            contentAfterTitle={
              <>
                <Tooltip title="AI" includeWrapper={false}>
                  <IconButton size="small2XIconXs" aria-label="AI information">
                    <InfoCircleIcon />
                  </IconButton>
                </Tooltip>
                <AIBadge />
              </>
            }
          >
            {generateLongText(5)}
          </Accordion>

          <Accordion
            title="Settings (Uses group configuration)"
            text="Arrow-only trigger with group translations"
            contentAfterTitle={
              <Tooltip
                title="Click me! I'm interactive"
                includeWrapper={false}
                showOn="click"
              >
                <IconButton
                  size="small2XIconXs"
                  aria-label="Settings information"
                >
                  <InfoCircleIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <p>
              This accordion inherits{' '}
              <code>expandTrigger=&quot;arrow&quot;</code> and custom
              translations from the <code>AccordionGroup</code>.
            </p>
            {generateLongText(3)}
          </Accordion>

          <Accordion
            title="Topics (Click tooltip demo)"
            text="Help information"
            iconLeft={<VideoIcon />}
            contentAfterTitle={
              <Tooltip
                title="This section provides helpful topics and guidance"
                includeWrapper={false}
                showOn="click"
              >
                <IconButton
                  size="small2XIconXs"
                  aria-label="Topics help information"
                >
                  <InfoCircleIcon />
                </IconButton>
              </Tooltip>
            }
          >
            {lipsum}
          </Accordion>
        </AccordionGroup>
      </ComponentItem>

      <Doc>
        <h2>Using Imported Constants (Recommended)</h2>
        <p>
          Using the imported <code>expandTrigger</code> object provides better
          type safety, IntelliSense support, and helps prevent typos. This is
          the recommended approach for TypeScript projects.
        </p>
      </Doc>

      <pre>
        {`
import Accordion, { 
  AccordionGroup, 
  expandTrigger 
} from '@8x8/oxygen-accordion';
import { IconButton } from '@8x8/oxygen-button';
import Tooltip from '@8x8/oxygen-tooltip';
import { InfoCircleIcon, VideoIcon } from '@8x8/oxygen-icon';
import { AIBadge } from '@8x8/oxygen-badge';

// Type-safe approach with imported constants
<AccordionGroup
  expandTrigger={expandTrigger.arrow}
  translations={{
    expand: 'Show Details',
    collapse: 'Hide Details',
  }}
>
  <Accordion
    title="Using expandTrigger.arrow (Recommended)"
    text="Type-safe constant with IntelliSense support"
    iconLeft={<InfoCircleIcon />}
  >
    This provides better type safety and IntelliSense...
  </Accordion>

  <Accordion
    title="Override to Header Mode"
    expandTrigger={expandTrigger.header}
  >
    Individual overrides are also type-safe...
  </Accordion>
</AccordionGroup>
        `}
      </pre>

      <ComponentItem>
        <AccordionGroup
          expandTrigger={expandTrigger.arrow}
          translations={{
            expand: 'Show Details',
            collapse: 'Hide Details',
          }}
        >
          <Accordion
            title="Using expandTrigger.arrow (Recommended)"
            text="Type-safe constant with IntelliSense support"
            iconLeft={<InfoCircleIcon />}
            contentAfterTitle={
              <Tooltip title="Type-safe implementation" includeWrapper={false}>
                <IconButton
                  size="small2XIconXs"
                  aria-label="Type-safe information"
                >
                  <InfoCircleIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <p>
              This accordion uses{' '}
              <code>expandTrigger=&#123;expandTrigger.arrow&#125;</code> which
              provides:
            </p>
            <ul>
              <li>Better IntelliSense and autocomplete</li>
              <li>Type safety - prevents invalid values</li>
              <li>Consistent with other Oxygen components</li>
              <li>Easier refactoring and maintenance</li>
            </ul>
          </Accordion>

          <Accordion
            title="Mixed Content with Type Safety"
            contentAfterTitle={
              <>
                <Tooltip title="Video content" includeWrapper={false}>
                  <IconButton
                    size="small2XIconXs"
                    aria-label="Video content information"
                  >
                    <VideoIcon />
                  </IconButton>
                </Tooltip>
                <AIBadge />
              </>
            }
          >
            {generateLongText(3)}
          </Accordion>

          <Accordion
            title="Override to Header Mode"
            expandTrigger={expandTrigger.header}
            contentAfterTitle={
              <Tooltip title="Full header clickable" includeWrapper={false}>
                <IconButton
                  size="small2XIconXs"
                  aria-label="Header mode information"
                >
                  <InfoCircleIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <p>
              This accordion overrides to use{' '}
              <code>expandTrigger=&#123;expandTrigger.header&#125;</code>,
              making the entire header clickable.
            </p>
          </Accordion>
        </AccordionGroup>
      </ComponentItem>

      <Doc>
        <h2>Individual Configuration (Mixed Approaches)</h2>
        <p>
          You can also configure each accordion individually. This example shows
          both string literals and imported constants side by side for
          comparison.
        </p>
      </Doc>

      <pre>
        {`
import Accordion, { 
  AccordionGroup, 
  expandTrigger 
} from '@8x8/oxygen-accordion';

// Individual configuration with mixed approaches
<AccordionGroup>
  <Accordion
    title="Using String (Traditional)"
    expandTrigger="arrow"
  >
    String literal approach...
  </Accordion>

  <Accordion
    title="Using Constant (Recommended)"
    expandTrigger={expandTrigger.arrow}
    translations={{
      expand: 'Expand',
      collapse: 'Contract',
    }}
  >
    Type-safe constant approach...
  </Accordion>
</AccordionGroup>
        `}
      </pre>

      <ComponentItem>
        <AccordionGroup>
          <Accordion
            title="Individual Arrow Mode (Using String)"
            expandTrigger="arrow"
            contentAfterTitle={
              <Tooltip title="String literal approach" includeWrapper={false}>
                <IconButton
                  size="small2XIconXs"
                  aria-label="Individual arrow mode information"
                >
                  <InfoCircleIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <p>
              This accordion uses <code>expandTrigger=&quot;arrow&quot;</code>{' '}
              with string literals (traditional approach).
            </p>
          </Accordion>

          <Accordion
            title="Individual Arrow Mode (Using Constant)"
            expandTrigger={expandTrigger.arrow}
            translations={{
              expand: 'Expand',
              collapse: 'Contract',
            }}
            contentAfterTitle={
              <Tooltip
                title="Type-safe constant approach"
                includeWrapper={false}
              >
                <IconButton
                  size="small2XIconXs"
                  aria-label="Type-safe approach information"
                >
                  <InfoCircleIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <p>
              This accordion uses{' '}
              <code>expandTrigger=&#123;expandTrigger.arrow&#125;</code> with
              imported constants (recommended approach).
            </p>
          </Accordion>
        </AccordionGroup>
      </ComponentItem>
    </>
  );
}

AccordionExpandTrigger.storyName = 'Accordion with expandTrigger';

export { AccordionExpandTrigger };
