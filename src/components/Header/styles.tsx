import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.View``;

export const Portrait = styled.Image``;

export const ProfileText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;

  display: flex;
  align-items: center;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const SwitchText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
