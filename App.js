import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import ChatScreen from './screens/ChatScreen';
import {Feather as Icon} from '@expo/vector-icons'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import StatusScreen from './screens/StatusScreen';
import CallScreen from './screens/CallScreen';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabBar = () => {
  return(
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#fff',
      indicatorStyle: {backgroundColor: '#fff'},
      style: {backgroundColor: 'green'}
    }}>
      <Tab.Screen name="chat" component={ChatScreen} />
      <Tab.Screen name="status" component={StatusScreen} />
      <Tab.Screen name="call" component={CallScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {borderBottomColor: 'green',backgroundColor: 'green', elevation: 0},
          headerRight: ()=>{
            return(
              <View style={styles.appbarRight}>
                <Icon style={styles.righticon} name="search" size="20" />
                <Icon style={styles.righticon} name="more-vertical" size="50" />
              </View>
            )
          }
        }}
        name="Whatsapp" 
        component={TabBar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appbarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  righticon: {
    marginRight: 10,
    color: '#fff',
  }
})
