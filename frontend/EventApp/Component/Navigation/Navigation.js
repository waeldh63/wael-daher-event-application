import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Alert, TouchableOpacity, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import { HomePage } from '../Homepage/Homepage';
import { AddEvent } from '../AddEvent/AddEvent';





const Tab = createBottomTabNavigator();

export const Navigation = navigation => {
  

 
 
  
  return (
    
    <Tab.Navigator style={styles.header}     
    screenOptions={{
        tabBarActiveTintColor: '#0298A6',
        tabBarInactiveTintColor:'#353844'
  }}>
      <Tab.Screen  
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({color}) => <Icon
            name="home-outline"
            type="ionicon"
            size={25}
            color={color}
          />,
        }}></Tab.Screen>
        <Tab.Screen  
        name="AddEvent"
        component={AddEvent}
        options={{
          tabBarIcon: ({color}) => <Icon
            name="pluscircleo"
            type="antdesign"
            size={25}
            color={color}
            
          />,
        }}></Tab.Screen>
    </Tab.Navigator>
  
  );
};
const styles = StyleSheet.create({
 
  header: {
    zIndex: 1,
    position: 'relative',
    backgroundColor: 'red',
    height: 1000,
  },
  title: {
    color: '#353844',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: 'bold',
  },
  container: {
    position: 'relative',
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 35,
    elevation: 30,
  },
  buttonIcon: {
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 50,
    height: 120,
    top: 25,
  },
});
// export default Navigation;
