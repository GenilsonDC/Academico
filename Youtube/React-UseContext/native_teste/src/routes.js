import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home'
import Login from './pages/Login'
import Pedidos from './pages/Pedidos'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pedidos" component={Pedidos} />
    </Stack.Navigator>
  )
}

export default Routes
