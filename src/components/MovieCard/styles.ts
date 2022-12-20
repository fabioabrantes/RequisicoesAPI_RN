import styled from 'styled-components/native';


export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background_secondary};
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 14px;
  margin-bottom:10px;
`;

export const Footer = styled.View`
  align-items: center;
`;

export const Avatar = styled.Image`
  width:250px;
  height:400px;
`;