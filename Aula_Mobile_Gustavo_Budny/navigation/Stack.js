import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Logar from './Screens/Logar';
import Pessoas from "./Screens/Pessoas";

export default function Stack() {

  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home Screen" component={Logar} />
        <Stack.Screen name = "pessoas_cad" component={Pessoas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

