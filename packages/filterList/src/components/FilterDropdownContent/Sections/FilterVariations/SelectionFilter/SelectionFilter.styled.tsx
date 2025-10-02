import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 0;
  flex-shrink: 1;
  flex-direction: column;
  padding: ${({ theme }) =>
    `0 ${theme.spacing03} ${theme.spacing03} ${theme.spacing03}`};
  gap: ${({ theme }) => theme.spacing02};
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 11px;
  padding-left: 4px;
  width: 302px;
  flex-grow: 1;
  overflow: auto;
  gap: 16px;
`;

const SelectedLegend = styled.legend`
  ${({ theme }) => ({ ...theme.label01 })};
  color: ${({ theme }) => theme.textColor02};
  padding: 0 4px 0 0;
  float: left;
`;

const SelectedFieldset = styled.fieldset`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.ui01};
  padding: 1px 0 12px;
  margin: 0 0 -4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing03};
`;

const NoResultsLabel = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => ({ ...theme.body01 })};
  color: ${({ theme }) => theme.textColor01};
`;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing02};
`;

const FreeformLabel = styled.div`
  flex-shrink: 0;
  ${({ theme }) => ({ ...theme.label01 })};
  color: ${({ theme }) => theme.textColor02};
`;

export {
  Container,
  OptionsContainer,
  SelectedLegend,
  SelectedFieldset,
  LoaderContainer,
  NoResultsLabel,
  CheckboxWrapper,
  FreeformLabel,
};
