import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
`;
