import React from 'react';
import {Platform, StatusBar, View} from 'react-native'
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components'
import {NavigationContainer} from '@react-navigation/native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import {AppRoutes} from './src/routes/app.routes' 
import theme from './src/global/styles/theme'
import AppProvider from './src/hooks';
// import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          {Platform.OS === 'ios' && (
            <View style={{ height: 40, backgroundColor: `${theme.colors.gray50}` }} />
          )}
          <StatusBar backgroundColor={theme.colors.gray50} />
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  );
}

