import {ThemeProvider} from 'styled-components';

import {Loading} from './src/components/Loading';

import {ConsumerApi} from './src/screens/ConsumerApi';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {THEME} from './src/global/styles/theme';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return (
      <ThemeProvider theme={THEME}>
        <Loading/>
      </ThemeProvider>
    );
  } 
   
  
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
        />
       <ConsumerApi />
    </ThemeProvider>
  );
}