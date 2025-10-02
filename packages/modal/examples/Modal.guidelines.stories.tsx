import React, { Children, useRef } from 'react';
import { action } from 'storybook/actions';

import Modal, {
  type ModalProps,
  ModalHeader,
  ModalFooter,
  ModalContent,
  MODAL_SIZE,
  MODAL_HEADER_ALIGN_TITLE,
  MODAL_FOOTER_ALIGN,
} from '@8x8/oxygen-modal';
import Button, { buttonVariant } from '@8x8/oxygen-button';
import Select from '@8x8/oxygen-select';
import Textarea from '@8x8/oxygen-textarea';
import Label from '@8x8/oxygen-label';
import Input from '@8x8/oxygen-input';

import {
  Label as StorybookLabel,
  Section,
  Headline,
  ComponentSection,
  ComponentItem,
} from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig, useModalState } from './config';

const ModalStory: React.FunctionComponent<
  {
    children: React.ReactNode;
    controls: typeof argsConfig;
    showNotification?: boolean;
  } & ModalProps
> = ({ children, controls, showNotification, ...rest }) => {
  const { isOpen, onOpen, modalProps, modalHeaderProps, modalFooterProps } =
    useModalState(controls);

  return (
    <>
      {isOpen && (
        <Modal {...modalProps} {...rest}>
          {Children.map(children, child => {
            if (React.isValidElement(child) && typeof child.type !== 'string') {
              if (child.type.name === 'ModalHeader') {
                return React.cloneElement(child, {
                  ...modalHeaderProps,
                  ...(child.props as object),
                });
              }

              if (child.type.name === 'ModalFooter') {
                return React.cloneElement(child, {
                  ...modalFooterProps,
                  ...(child.props as object),
                });
              }
            }

            return child;
          })}
        </Modal>
      )}

      {isOpen && showNotification && (
        <div
          data-test-id="floating-notification-area"
          style={{
            zIndex: 10000,
            position: 'fixed',
            top: '32px',
            right: '16px',
          }}
        >
          <Button isDestructive onClick={action('I was Clicked!')}>
            Click Me!
          </Button>
        </div>
      )}
      <Button variant={buttonVariant.secondary} onClick={onOpen}>
        Open modal
      </Button>
    </>
  );
};

const ModalContentExample: React.FunctionComponent<{
  children?: React.ReactNode;
}> = props => (
  <ModalContent>
    {props.children ||
      'Press Escape to close the modal, or click on the Close icon in the title if available'}
  </ModalContent>
);

export const ModalGuidelines = args => {
  const inputRef = useRef(null);

  window.inputRef = inputRef;

  return (
    <>
      <Section>
        <Headline>Modal size configuration</Headline>
        <ComponentSection>
          <ComponentItem width="33%">
            <StorybookLabel>Size: Small</StorybookLabel>
            <ModalStory controls={args} size={MODAL_SIZE.SMALL}>
              <ModalContentExample />
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="33%">
            <StorybookLabel>Size: Large</StorybookLabel>
            <ModalStory controls={args} size={MODAL_SIZE.BIG}>
              <ModalContentExample />
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="33%">
            <StorybookLabel>Size: Custom</StorybookLabel>
            <ModalStory controls={args} width="200px" height="600px">
              <ModalContentExample />
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Header configuration</Headline>
        <ComponentSection>
          <ComponentItem width="33%">
            <StorybookLabel>Title Align: Left</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader alignTitle={MODAL_HEADER_ALIGN_TITLE.LEFT} />
              <ModalContentExample />
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="33%">
            <StorybookLabel>Title Align: Center</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader alignTitle={MODAL_HEADER_ALIGN_TITLE.CENTER} />
              <ModalContentExample />
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="33%">
            <StorybookLabel>Title Align: Right</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader alignTitle={MODAL_HEADER_ALIGN_TITLE.RIGHT} />
              <ModalContentExample />
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
        <ComponentSection>
          <ComponentItem width="33%">
            <StorybookLabel>Multiline Headline</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader title="Lorem ipsum dolor sit amet, elit consectetur adipiscing" />
              <ModalContentExample />
            </ModalStory>
          </ComponentItem>

          <ComponentItem width="33%">
            <StorybookLabel>Secondary Title</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader>Select, reorder and freeze columns</ModalHeader>
              <ModalContentExample />
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="33%">
            <StorybookLabel>With Border Bottom</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader hasBorderBottom />
              <ModalContentExample />
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Closing modal configuration</Headline>
        <ComponentSection>
          <ComponentItem width="33%">
            <StorybookLabel>Only ESC Key</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader onClose={undefined} />
              <ModalContent>Only Escape will close the Modal</ModalContent>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="33%">
            <StorybookLabel>Only Close Icon Button</StorybookLabel>
            <ModalStory controls={args} shouldCloseOnEsc={false}>
              <ModalHeader />
              <ModalContent>
                Click the Close Icon button to close the modal.
              </ModalContent>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="33%">
            <StorybookLabel>Only Overlay Click</StorybookLabel>
            <ModalStory
              controls={args}
              shouldCloseOnEsc={false}
              shouldCloseOnOverlayClick
            >
              <ModalHeader onClose={undefined} />
              <ModalContent>
                Click on the overlay to close the modal.
              </ModalContent>
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Footer configuration</Headline>
        <ComponentSection>
          <ComponentItem width="50%">
            <StorybookLabel>Buttons Align: Left</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter align={MODAL_FOOTER_ALIGN.LEFT}>
                <Button>Submit</Button>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="50%">
            <StorybookLabel>Buttons Align: Right</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter align={MODAL_FOOTER_ALIGN.RIGHT}>
                <Button>Submit</Button>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
        <ComponentSection>
          <ComponentItem width="50%">
            <StorybookLabel>Buttons Align: Space Between</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter align={MODAL_FOOTER_ALIGN.SPACE_BETWEEN}>
                <Button>Submit</Button>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="50%">
            <StorybookLabel>Buttons Align: Space Around</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter align={MODAL_FOOTER_ALIGN.SPACE_AROUND}>
                <Button>Submit</Button>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
        <ComponentSection>
          <ComponentItem width="50%">
            <StorybookLabel>
              With ModalFooter <code>hasBorderTop</code>
            </StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter hasBorderTop>
                <Button>Submit</Button>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="50%">
            <StorybookLabel>Small Footer</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter isSmall hasBorderTop>
                <Button size="small">Submit</Button>
                <Button size="small" variant={buttonVariant.secondary}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="50%">
            <StorybookLabel>2 rows of small buttons</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter isSmall hasBorderTop>
                <Button size="small">Really long button 1</Button>
                <Button size="small">Really long button 2</Button>
                <Button size="small">Really long button 3</Button>
                <Button size="small">Submit</Button>
                <Button size="small" variant={buttonVariant.secondary}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="50%">
            <StorybookLabel>2 rows of buttons</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter isSmall hasBorderTop>
                <Button>Really long button 1</Button>
                <Button>Really long button 2</Button>
                <Button>Really long button 3</Button>
                <Button>Submit</Button>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
      </Section>

      <Section>
        <Headline>Focus trap configuration</Headline>
        <ComponentSection>
          <ComponentItem width="50%">
            <StorybookLabel>With Focus Trap (default behaviour)</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
                <Button>Save</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>

          <ComponentItem width="50%">
            <StorybookLabel>Without Focus Trap</StorybookLabel>
            <ModalStory controls={args} shouldUseFocusTrap={false}>
              <ModalHeader />
              <ModalContentExample />
              <ModalFooter>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
                <Button>Save</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
        </ComponentSection>

        <ComponentSection>
          <ComponentItem width="50%">
            <StorybookLabel>
              With Focus Trap and shouldCloseOnOverlayClick false +
              allowOutsideClick cb
            </StorybookLabel>
            <ModalStory
              controls={args}
              showNotification
              shouldCloseOnOverlayClick={false}
              allowOutsideClick={e => {
                return e?.target?.closest(
                  '[data-test-id="floating-notification-area"]',
                );
              }}
            >
              <ModalHeader />
              <ModalContentExample>
                The red Button CAN be clicked because the focus trap is disabled
                while the mouse event occurs in a ancestor of
                floating-notification-area!
              </ModalContentExample>
              <ModalFooter>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
                <Button>Save</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>

          <ComponentItem width="50%">
            <StorybookLabel>
              With Focus Trap and shouldCloseOnOverlayClick false + no
              allowOutsideClick
            </StorybookLabel>
            <ModalStory
              controls={args}
              showNotification
              shouldCloseOnOverlayClick={false}
            >
              <ModalHeader />
              <ModalContentExample>
                The red Button CANNOT be clicked because the focus trap blocks
                the mouse event!
              </ModalContentExample>
              <ModalFooter>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
                <Button>Save</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
        </ComponentSection>

        <ComponentSection>
          <ComponentItem width="50%">
            <StorybookLabel>With initial focus via ref</StorybookLabel>
            <ModalStory controls={args} initialFocus={() => inputRef.current}>
              <ModalHeader />
              <ModalContent>
                <p>
                  Note that initialFocus can receive a function which returns an
                  element. With a ref it works like this:{' '}
                  <code>{`initialFocus={() => inputRef.current}`}</code>
                </p>
                <Label value="Input label" />
                <Input inputRef={inputRef} />
              </ModalContent>
              <ModalFooter>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
                <Button>Save</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="50%">
            <StorybookLabel>
              With initial focus via DOM querySelector string
            </StorybookLabel>
            <ModalStory controls={args} initialFocus="#initialFocusTarget">
              <ModalHeader />
              <ModalContent>
                <Label value="The initial focus is on input below, using a querySelector string ('#initialFocusTarget')" />
                <Input id="initialFocusTarget" />
              </ModalContent>
              <ModalFooter>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
                <Button>Save</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
      </Section>

      <Section>
        <Headline>Usage examples</Headline>
        <ComponentSection>
          <ComponentItem width="50%">
            <StorybookLabel>Form</StorybookLabel>
            <ModalStory controls={args} size={MODAL_SIZE.BIG}>
              <ModalHeader />
              <ModalContent>
                <Select
                  options={[
                    { value: '+40778367839', label: '+40 778 367 839' },
                  ]}
                  labelValue="Pick a phone number"
                  isRequired
                />
                <Select
                  options={[
                    { value: '+40778367839', label: '+40 778 367 839' },
                  ]}
                  labelValue="Site"
                />
                <Label value="Greeting" htmlFor="textarea-form-1" isRequired />
                <Textarea
                  id="textarea-form-1"
                  placeholder="Give feedback or suggest an improvement"
                />
              </ModalContent>
              <ModalFooter>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
                <Button>Save</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="50%">
            <StorybookLabel>Confirmation</StorybookLabel>
            <ModalStory controls={args} size={MODAL_SIZE.SMALL}>
              <ModalHeader title="Are you sure you want to delete this entry?" />
              <ModalFooter>
                <Button variant={buttonVariant.secondary}>Cancel</Button>
                <Button isDestructive>Delete</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
        <ComponentSection>
          <ComponentItem width="50%">
            <StorybookLabel>Medium Text Content</StorybookLabel>
            <ModalStory controls={args}>
              <ModalHeader title="Contact Center Connection" />
              <ModalContent>
                <p>
                  Before accepting a call you need to establish a connection to
                  the contact center.
                </p>
                <p>
                  Tip: There are two types of connection modes: Persistent and
                  On Demand.
                </p>
                <p>
                  Tip: Your contact center administrator can setup the
                  connection for you.
                </p>
                <p>
                  Tip: If you reject the connection you will be asked to fill in
                  a reason.
                </p>
              </ModalContent>
              <ModalFooter>
                <Button variant={buttonVariant.secondary}>Reject</Button>
                <Button>Accept</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
          <ComponentItem width="50%">
            <StorybookLabel>Large Text Content</StorybookLabel>
            <ModalStory controls={args} size={MODAL_SIZE.BIG}>
              <ModalHeader
                title="A modal with overflow content"
                hasBorderBottom
              />
              <ModalContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean lobortis porta pharetra. Nulla facilisi. Suspendisse
                  eleifend dolor vestibulum pharetra ultricies. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas. Aenean consequat at arcu quis pharetra.
                  Suspendisse accumsan sapien id odio pellentesque tincidunt.
                  Duis volutpat eu ex in laoreet. Sed scelerisque velit eget
                  tortor ornare finibus. Vestibulum a consectetur metus, sit
                  amet pellentesque nunc.
                </p>
                <p>
                  Fusce nec magna id ipsum congue placerat. Fusce congue, tellus
                  ac iaculis pretium, tortor libero tincidunt ligula, nec
                  commodo lacus odio eu diam. Donec egestas, turpis eget
                  malesuada convallis, justo metus dignissim neque, sit amet
                  accumsan ex mi eget sapien. Cras accumsan maximus
                  sollicitudin. Praesent egestas lorem in elit pretium, ut
                  consequat justo venenatis. Donec sollicitudin urna risus, ac
                  tempor elit consectetur ac. Etiam sed euismod nisi. Proin enim
                  quam, consectetur eu facilisis ut, feugiat vel nisl. Aliquam
                  semper est non mi fermentum, nec aliquet ex fermentum.
                  Suspendisse at enim aliquet, venenatis diam in, lobortis est.
                </p>
                <p>
                  Ut rhoncus arcu nulla, non porta arcu congue sed. Duis
                  pharetra neque sit amet efficitur vehicula. Phasellus ornare
                  leo bibendum rutrum condimentum. Nam et ex tincidunt erat
                  pellentesque varius. Praesent sit amet odio vehicula massa
                  porttitor lacinia. Cras maximus hendrerit ante, at hendrerit
                  nisi tincidunt et. Suspendisse potenti. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus. Cras tempus luctus
                  turpis et accumsan. Etiam mattis justo tellus, a volutpat
                  lectus dapibus vel. Sed gravida blandit augue nec egestas.
                  Curabitur venenatis nisi eget bibendum congue. In sollicitudin
                  ex sem, sit amet semper enim tempus sed. Donec rutrum odio
                  felis, nec lacinia nibh cursus at.
                </p>
                <p>
                  Fusce justo velit, viverra vitae eleifend et, rhoncus ut
                  turpis. Phasellus et ex velit. Ut lacinia volutpat massa eget
                  tincidunt. Donec pellentesque urna quis augue molestie, vel
                  viverra nibh cursus. Phasellus laoreet neque quis nisl
                  convallis ullamcorper. Etiam condimentum quis felis imperdiet
                  cursus. Vivamus aliquet lectus magna, vel congue urna luctus
                  et. Vestibulum nisl mauris, elementum eget magna et, pretium
                  accumsan ligula.
                </p>
                <p>
                  Sed turpis nibh, blandit at sapien id, volutpat pretium nisi.
                  Suspendisse sodales commodo justo, quis tristique elit
                  facilisis non. Vestibulum blandit ullamcorper urna vel
                  pulvinar. Etiam ultrices erat in leo auctor, ut pretium nisl
                  pharetra. Nunc pellentesque tincidunt lacus non finibus.
                  Phasellus tortor nibh, porta mattis pharetra et, iaculis
                  venenatis mauris. Mauris ullamcorper justo et pellentesque
                  pretium. Curabitur dictum magna ut nisl molestie venenatis. Ut
                  sed interdum mauris.
                </p>
              </ModalContent>
              <ModalFooter hasBorderTop>
                <Button>Cancel</Button>
                <Button variant={buttonVariant.primary}>Save</Button>
              </ModalFooter>
            </ModalStory>
          </ComponentItem>
        </ComponentSection>
      </Section>
    </>
  );
};

ModalGuidelines.storyName = '01. Guidelines';
ModalGuidelines.args = argsConfig;
ModalGuidelines.argTypes = argTypesConfig;

export default {
  title: 'Components/Modal',
};
