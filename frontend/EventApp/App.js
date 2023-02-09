/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Navigation} from './Component/Navigation/Navigation';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Updatevent } from './Component/UpdateEvent/UpdateEvent'; 

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {AuthContext} from './Component/Context';

const App = () => {
  const customDefaultTheme = {
    ...DefaultTheme,
    ...PaperDefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      backgroundColor: '#F3FEFF',
      background: '#F3FEFF',
      text: '#353844',
      secondbackground: '#FAFFFF',
    },
  };
  const customDarkTheme = {
    ...DarkTheme,
    ...PaperDarkTheme,

    colors: {
      ...DarkTheme.colors,
      backgroundColor: '#353844',
      background: '#353844',
      text: '#ffffff',
      secondbackground: '#353844',
    },
  };
  const [isDarkTheme, setisDarkTheme] = React.useState(false);
  const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;

  const authContext = React.useMemo(() => ({
    toggleTheme: () => {
      setisDarkTheme(isDarkTheme => !isDarkTheme);
    },
  }));

  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      <Stack.Navigator
                headerMode="none"
                initialRouteName=" "
                screenOptions={{stackAnimation: 'slide_from_right'}}>


                  <Stack.Screen
                  name="Homes"
                  component={Navigation}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />
                 <Stack.Screen
                  name="Updatevent"
                  component={Updatevent}
                  options={{
                    animation: 'slide_from_right',
                  }}
                />  
                </Stack.Navigator>
    </NavigationContainer>
</AuthContext.Provider></PaperProvider>




    // <SafeAreaView >
    //   <Text>IUBIUBUY</Text>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
