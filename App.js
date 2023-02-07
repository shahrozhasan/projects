
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from '././src/screens/HomeScreen';
import DetailsSceeen from '././src/screens/DetailScreen';
import {StatusBar} from 'react-native';
import Login from '././src/screens/Login';
import Register from './src/screens/Register';
import R_Screen from './src/screens/R_Screen'
import Login_S from './src/screens/L_Screen';
import welcomeS from './src/screens/welcomeS';
//import COLORS from './src/consts/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="welcome" component={welcomeS} />
      <Stack.Screen name="register" component={R_Screen} />
      <Stack.Screen name="login" component={Login_S} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsSceeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;