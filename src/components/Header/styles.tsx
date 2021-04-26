import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: #c7c7c7;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Theme = styled.TouchableOpacity`
  padding: 20px;
`;

export const PortraitButton = styled.TouchableOpacity`
  flex-direction: row;
  background: #fff;

  flex: 1;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeText = styled.Text`
  font-weight: bold;
  color: #fff;
  margin-left: 15px;
  flex: 1;
  margin-right: auto;
`;

export const Portrait = styled.View``;
