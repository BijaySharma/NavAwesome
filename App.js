import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from './components/HomeScreen';
import DetailScreen  from './components/DetailScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();

class App extends Component {
  
  // This can pe passed as a prop named screenOptions to Stack Navigator
  // screenOptions is commen options for all screens
  screenOptions = {
    title : 'Bijay'
  };

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle : { backgroundColor: '#F1552C'},
          headerTintColor : '#fff',
        }}>
          
          <Stack.Screen 
            name="Home"
            component={HomeScreen} 
            options={{title: 'Overview'}}
          />
          
          <Stack.Screen 
            name="Details" 
            component={DetailScreen} 
            initialParams={{name : 'Aman Prasad'}} 
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({route}) => ({title : route.params.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;


