import React, { useState } from 'react';
import { Popover } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { popoverArgsConfig, popoverArgTypesConfig } from './config';

export const PopoverExtremes = args => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Doc>
        <h1>
          <code>Popover</code> Extremes
        </h1>
        <p>
          This example demonstrates max dimensions: 1064px width and 400px
          height.
        </p>
        <pre>
          {`
import { Popover } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';

const itemsHorizontalScroll = (
  <div>
    <div style={{ width: '500px', whiteSpace: 'nowrap' }}>
      This is a very wide div element to demonstrate horizontal scrolling inside
      the popover. This is a very wide div element to demonstrate horizontal scrolling inside
      the popover. This is a very wide div element to demonstrate horizontal scrolling inside
      the popover. This is a very wide div element to demonstrate horizontal scrolling inside
      the popover.
    </div>
    ,
    <div style={{ width: '600px', whiteSpace: 'nowrap' }}>
      Another wide div element that should also cause horizontal scrolling due
      to its fixed width exceeding the popover's width.
    </div>
  </div>
);

<Popover
  isOpen={isOpenHorizontal}
  setIsOpen={setIsOpenHorizontal}
  floatingContent={itemsHorizontalScroll}
>
  <DropdownButton>Dropdown Button</DropdownButton>
</Popover>
          `}
        </pre>
      </Doc>
      <ComponentSection>
        <Popover
          {...args}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          floatingContent={
            <div>
              <p style={{ whiteSpace: 'nowrap' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio aperiam ipsum tempore molestiae porro incidunt minus
                vel repellat a, quia in sunt tenetur quibusdam aliquam
                necessitatibus at aspernatur corporis vitae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                dolor omnis assumenda quasi ut? Aut rerum magni sint delectus
                illum corrupti impedit rem amet, maxime animi tempore placeat
                ratione explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                est corporis magnam culpa voluptate vero expedita? Laudantium
                unde minima reprehenderit perferendis quia dolores dolore
                quaerat, perspiciatis facere, quae error nulla?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate atque quibusdam aut quidem iste officia reiciendis
                consequuntur minima sit enim, ipsa aliquam saepe repellendus
                nostrum ducimus? Mollitia vitae facilis ex.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                dolor omnis assumenda quasi ut? Aut rerum magni sint delectus
                illum corrupti impedit rem amet, maxime animi tempore placeat
                ratione explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                est corporis magnam culpa voluptate vero expedita? Laudantium
                unde minima reprehenderit perferendis quia dolores dolore
                quaerat, perspiciatis facere, quae error nulla?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate atque quibusdam aut quidem iste officia reiciendis
                consequuntur minima sit enim, ipsa aliquam saepe repellendus
                nostrum ducimus? Mollitia vitae facilis ex.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                dolor omnis assumenda quasi ut? Aut rerum magni sint delectus
                illum corrupti impedit rem amet, maxime animi tempore placeat
                ratione explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                est corporis magnam culpa voluptate vero expedita? Laudantium
                unde minima reprehenderit perferendis quia dolores dolore
                quaerat, perspiciatis facere, quae error nulla?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate atque quibusdam aut quidem iste officia reiciendis
                consequuntur minima sit enim, ipsa aliquam saepe repellendus
                nostrum ducimus? Mollitia vitae facilis ex.
              </p>
            </div>
          }
        >
          <DropdownButton onClick={() => setIsOpen(!isOpen)}>
            Dropdown Button
          </DropdownButton>
        </Popover>
      </ComponentSection>
    </>
  );
};

PopoverExtremes.storyName = 'Popover Extremes';
PopoverExtremes.args = popoverArgsConfig;
PopoverExtremes.argTypes = popoverArgTypesConfig;
PopoverExtremes.parameters = { controls: { sort: 'requiredFirst' } };
