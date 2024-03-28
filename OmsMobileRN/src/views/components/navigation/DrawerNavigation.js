import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../CustomDrawer'
import Dashboard from '../../screens/Dashboard';
import CreatePu from '../../screens/CreatePu';
import ScanPu from '../../screens/ScanPu';
import CreateDrs from '../../screens/CreateDrs';
import UpdateDrs from '../../screens/UpdateDrs';
import UpdateDrsDetails from '../../screens/UpdateDrsDetails';
import InCompletedWaybill from '../../screens/IncompletedWaybill';
import ReAssignDrs from '../../screens/ReAssignDrs';
import Profile from '../../screens/Profile';
import DestinationScan from '../../screens/DestinationScan';
import SealInScan from '../../screens/SealInScan';
import SealOutScan from '../../screens/SealOutScan';
import GatePass from '../../screens/GatePass';
import PrintWaybill from '../../screens/PrintWaybill';
import PendingTask from '../../screens/PendingTask';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
            drawerStyle: {
                backgroundColor: 'black',
                opacity:0.7,
                width:320
                
            },
            headerShown: false
        }}>
            <Drawer.Screen name="Home" component={Dashboard} />
            <Drawer.Screen name='Cpu' component={CreatePu} />
            <Drawer.Screen name='Spu' component={ScanPu} />
            <Drawer.Screen name='CDRS' component={CreateDrs} />
            <Drawer.Screen name='Update-Drs' component={UpdateDrs} />
            <Drawer.Screen name='Drs-Details' component={UpdateDrsDetails} />
            <Drawer.Screen name='Waybill-Details' component={InCompletedWaybill} />
            <Drawer.Screen name='ReAssign-Drs' component={ReAssignDrs} />
            <Drawer.Screen name='Profile-Details' component={Profile} />
            <Drawer.Screen name='Destination-Scan' component={DestinationScan}/>
            <Drawer.Screen name='Seal-In-Scan' component={SealInScan}/>
            <Drawer.Screen name='Seal-Out-Scan' component={SealOutScan}/>
            <Drawer.Screen name='Gate-Pass' component={GatePass}/>
            <Drawer.Screen name='Print-Waybill' component={PrintWaybill}/>
            <Drawer.Screen name='Pending-Task' component={PendingTask}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation