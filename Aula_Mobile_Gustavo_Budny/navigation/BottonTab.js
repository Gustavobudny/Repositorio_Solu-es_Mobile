import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';

import Logar from './Screens/Logar';
import Pessoas from "./Screens/Pessoas";
import { StyleSheet } from "react-native";

export default function App() {

  const Tab = BottonTab();
  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: 'pink',
        tabBarActiveTintColor: '#ffffffff',
        tabBarInactiveBackgroundColor: '#880c93ff',
        tabBarInactiveTintColor: '#000000ff',

        headerStyle:{
          backgroundColor: '#d70c0cff',
          
        },
        headerTintColor: '#0ed19dff',
        headerTitleAlign: 'center',
        // para nao ter a header e: headerShown: false,
      }}>
        <Tab.Screen name = "Loguin" component={Logar}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name = "login" size = {24} color ="black"/>
          )
        }}/>
        <Tab.Screen name = "Pessoas" component={Pessoas}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name = "home" size = {24} color ="black"/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
