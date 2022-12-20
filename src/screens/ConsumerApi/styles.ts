import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  padding:0 24px;
  background-color: ${({theme})=>theme.colors.background_primary};
`;

export const Header = styled.View`
  width:100%;
  margin-top: 50px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: ${({theme})=>theme.fonts.heading};
  color: ${({theme})=>theme.colors.title};
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  font-family: ${({theme})=>theme.fonts.body};
  color: ${({theme})=>theme.colors.text};
  line-height:25px;
  margin-top: 16px;
`;

export const ContainerButton = styled.View`
  margin-top:25px;
`;

export const Content = styled.View`
  flex:1;
  margin-top:25px;
  align-items:center;
`;

export const TitleList = styled.Text`
  font-size: 30px;
  font-family: ${({theme})=>theme.fonts.heading};
  color: ${({theme})=>theme.colors.title};
  margin-bottom:16px;
`;