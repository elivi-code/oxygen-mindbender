import styled from 'styled-components';

const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-right: 8px;
`;

const IconContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.iconBackground};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  width: 40px;
`;

const Text = styled.div`
  ${({ theme }) => ({ ...theme.text })}
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
`;

const TextOverflow = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Title = styled.b`
  ${({ theme }) => ({ ...theme.title })}
  color: ${({ theme }) => theme.titleColor};
`;

export { AvatarWrapper, IconContainer, Text, TextOverflow, Title };
