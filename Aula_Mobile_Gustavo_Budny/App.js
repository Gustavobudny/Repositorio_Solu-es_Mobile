import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Entypo from '@expo/vector-icons/Entypo';

import ExemploAsyncStorage from "./Screens/ExemploAsyncStorage";
import Exemplo1AsyncStorage from "./Screens/Exemplo1AsyncStorage";
import Logar from './Screens/Logar';
import Pessoas from "./Screens/Pessoas";

function TabNavigate() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name= "Home" component={Pessoas}/>
      <Tab.Screen name= "Async" component={Exemplo1AsyncStorage}/>
    </Tab.Navigator>
  )
}

export default function App() {
  
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Logar" component ={Logar}/>
        <Stack.Screen name = "Home" component={TabNavigate}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


