import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Login} />
    </Stack.Navigator>
  );
}

export default MyStack;