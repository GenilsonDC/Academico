// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from "./src/View/Home";
// import Task from "./src/View/Task";

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Task" component={Task} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

//************MANUAL FUNCIONAL*********/
import Home from "./src/View/Home";
import Task from "./src/View/Task";

export default function App() {
  return <Task />;
  // return <Home />;
}
