import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Detail } from '../screens/Detail'

const stack = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Detail" component={Detail} />
      </stack.Navigator>
    </NavigationContainer>
  )
}