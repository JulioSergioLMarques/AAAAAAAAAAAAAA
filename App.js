import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './TELAS/Home';
import Localizacao from './TELAS/Localizacao';
import Meteoro from './TELAS/Meteoro';

const Stack = createStackNavigator()

export default class App extends Component{

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
          <Stack.Screen name='home'component={Home}>
          </Stack.Screen>
          <Stack.Screen name='localização'component={Localizacao}>
          </Stack.Screen>
          <Stack.Screen name='meteoro'component={Meteoro}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}