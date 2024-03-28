import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login'
import NumberLogin from '../../screens/NumberLogin';
import EmailVerification from '../../screens/EmailVerification';
import DrawerNavigation from './DrawerNavigation';
import ScanPu from '../../screens/ScanPu';
import Scanner from '../Scanner';
import ScannedPuDetails from '../../screens/ScannedPuDetails';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  />
      <Stack.Screen name="Dashboard" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="NumberLogin" component={NumberLogin} options={{headerShown:false}} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="CreatePu" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="Scanner" component={Scanner} options={{headerShown:false}} />
      <Stack.Screen name="ScanPu" component={ScanPu} options={{headerShown:false}} />
      <Stack.Screen name="PuDetails" component={ScannedPuDetails} options={{headerShown:false}} />
      <Stack.Screen name="CreateDRS" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="UpdateDrs" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="DrsDetails" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="WaybillDetails" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="ReAssignDrs" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="DestinationScan" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="SealInScan" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="SealOutScan" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="GatePass" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="PrintWaybill" component={DrawerNavigation} options={{headerShown:false}} />
      <Stack.Screen name="PendingTask" component={DrawerNavigation} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default MyStack