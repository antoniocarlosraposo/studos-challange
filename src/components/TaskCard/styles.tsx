import styled from 'styled-components/native';

export const Container = styled.View`
  background: #1e45c7;
  padding: 10px;
  border-radius: 6px;
  width: 372px;
`;

export const TimerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const TimerText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
`;

export const TitleText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #fff;
  padding-bottom: 15px;
`;

export const SubjectText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding-bottom: 2px;
`;

export const TempContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
