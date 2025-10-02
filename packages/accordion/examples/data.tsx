import styled from 'styled-components';

const StyledComponent = styled.div`
  padding: 16px;
  border: 2px solid black;
`;

const StyledContainer = styled.div`
  height: 500px;
  border: 2px solid black;
`;

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
sit amet commodo nisl. Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Phasellus vel cursus velit. Nulla malesuada est eu
pulvinar dignissim. Morbi dolor dolor, imperdiet eget blandit id,
consectetur id urna. In luctus gravida cursus. Vestibulum ante ipsum
primis in faucibus orci luctus et ultrices posuere cubilia curae;
Sed ultricies blandit ipsum tempor tempus. In volutpat sem ac arcu
fermentum elementum. Donec consectetur elementum dui et blandit.
Nulla elementum tortor id interdum sagittis. Nullam elementum metus
nisl, a imperdiet justo efficitur a. Ut dolor orci, efficitur ac
accumsan vel, tempus sed lacus. Praesent leo leo, elementum id
elementum id, laoreet a risus. Aenean ut orci varius, porta dolor
ac, venenatis tellus. Sed dictum et nunc et ultrices. Donec maximus
cursus tincidunt. Morbi eu volutpat massa, eu ullamcorper risus. In
in eros vel nunc elementum tempus. Class aptent taciti sociosqu ad
litora torquent per conubia nostra, per inceptos himenaeos.
Curabitur posuere euismod lacinia. Nulla orci sapien, hendrerit in
cursus vitae, ultrices sed urna. Sed et posuere nunc, non pretium
felis. Nunc a tincidunt libero, id elementum dui. Cras dictum
porttitor arcu non congue. Etiam ornare lobortis mauris eu ultrices.
Donec ut quam rutrum, scelerisque tortor quis, molestie ligula.`;

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
sit amet commodo nisl. Lorem ipsum dolor sit amet, consectetur`;

function generateLongText(count: number) {
  let generatedString = '';

  for (let i = 0; i < count; i += 1) {
    generatedString += lipsum;
  }

  return generatedString;
}

export { StyledComponent, StyledContainer, lipsum, longText, generateLongText };
