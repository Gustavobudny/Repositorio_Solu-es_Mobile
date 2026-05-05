import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Logar from './Screens/Logar';
import Pessoas from "./Screens/Pessoas";
import { StyleSheet } from "react-native";

export default function Drower() {

  const Drawer = createDrawerNavigator();
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: styles.drawer,
          drawerActiveTintColor: styles.active.color,
          drawerLabelStyle: styles.label,
        }}
      >
        <Drawer.Screen name="Logar" component={Logar}/>
        <Drawer.Screen name="Pessoas" component={Pessoas}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#302929ff',
    width: 250,
  },
  active: {
    color: '#00ffcc',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#efededff'
  },
});