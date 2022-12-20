import React from 'react';
import {ActivityIndicator} from 'react-native'
import { TouchableOpacityProps } from 'react-native';
import {useTheme} from 'styled-components';
import { Loading } from '../Loading';

import { Container,Title } from './styles';

interface Props extends TouchableOpacityProps{
  title:string;
  color?:string;
  loading?:boolean;
}

export function ButtonCustom({
  title,
  color,
  loading= false,
  ...rest
}:Props){

  const theme = useTheme();

  return (
    <Container 
      {...rest} 
      color={color? color: theme.colors.main}
      activeOpacity={0.5}
    >
      {loading ?
        <Loading />
        :
        <Title>{title}</Title>
      }      
    </Container>
  );
}