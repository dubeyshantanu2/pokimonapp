import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail/DetailScreen';
import EditScreen from '../screens/Edit/EditScreen';

export type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Detail: {name: string};
  Edit: {name: string};
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
