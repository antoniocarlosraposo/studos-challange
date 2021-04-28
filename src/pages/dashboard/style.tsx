import styled from 'styled-components/native';

interface TextProps {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const TaskContainer = styled.View`
  background: #dcecfa;
  border-radius: 6px;
  flex: 1;
  padding: 0 10px;
`;

export const HeaderText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #414042;
  padding-bottom: 10px;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  padding-bottom: 20px;
`;

export const FilterButton = styled.TouchableOpacity``;

export const FilterText = styled.Text<TextProps>`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #414042
    ${({active}) =>
      active &&
      `
    color: #339CF7;
  `};
`;

export const TempContainer = styled.ScrollView`
  flex: 1;
`;
