import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import EditScreen from '../screen/EditScreen';
const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
