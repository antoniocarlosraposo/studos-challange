import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  padding: 8px 8px;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Portrait = styled.Image`
  width: 50px;
  height: 50px;
  background: #c3c3c3;
  border-radius: 25px;
`;

export const ProfileText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
  align-items: center;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const SwitchText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;

  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
