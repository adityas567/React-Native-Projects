import { View, Text } from 'react-native'
import React from 'react'
import Welcome from '../screens/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default Navigation