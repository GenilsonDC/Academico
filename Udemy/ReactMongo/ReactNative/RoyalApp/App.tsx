import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

import Home from "./src/View/Home";
import Task from "./src/View/Task";
import QrCode from "./src/View/QrCode";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="QrCode" component={QrCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//************MANUAL FUNCIONAL*********/
// export default function App() {
//   return <Task />;
// }
