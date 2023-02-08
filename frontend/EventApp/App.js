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
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const App = () => {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
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
                </Stack.Navigator>
    </NavigationContainer>





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
