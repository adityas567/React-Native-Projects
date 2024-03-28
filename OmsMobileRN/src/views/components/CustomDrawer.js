import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Button, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    const [expandedId, setExpandedId] = useState(true);
    const handleAccordionPress = (accordionId) => {
        setExpandedId(accordionId === expandedId ? '' : accordionId);
    };
    const data =
    {
        Admin: { menu: true, accessType: 'N' },
        User_Master: { menu: true, accessType: 'N', parent: 'ADMIN' },
        Operation: { menu: true, accessType: 'N' },
        Branch: { menu: true, accessType: 'N' },
        Driver: { menu: true, accessType: 'N' },
        Vehicle: { menu: true, accessType: 'N' },
        Utilities: { menu: true, accessType: 'EDITABLE' },
        POD_DRS_Billing: { menu: true, accessType: 'EDITABLE' },
        MPS_Mapping_Remove: { menu: true, accessType: 'EDITABLE' },
        MPS_Edit_Weight: { menu: true, accessType: 'EDITABLE' },
        Email_Configuration: { menu: true, accessType: 'N' },
        Email_Customer: { menu: true, accessType: 'N' },
        Email_Internal: { menu: true, accessType: 'N' },
        Pickup: { menu: true, accessType: 'EDITABLE' },
        Create_PU: { menu: true, accessType: 'EDITABLE' },
        Create_PRS: { menu: false, accessType: 'EDITABLE' },
        Manage_PRS: { menu: false, accessType: 'EDITABLE' },
        'Request_for_Re-assign': { menu: true, accessType: 'EDITABLE' },
        Linehaul: { menu: true, accessType: 'EDITABLE' },
        Seal_In_Scan: { menu: true, accessType: 'EDITABLE' },
        Gate_Pass: { menu: true, accessType: 'EDITABLE' },
        Destination_Scan: { menu: true, accessType: 'EDITABLE' },
        Seal_Out_Scan: { menu: true, accessType: 'EDITABLE' },
        Pickup_Scan: { menu: true, accessType: 'EDITABLE' },
        PRS_Cancellation: { menu: false, accessType: 'EDITABLE' },
        Booking: { menu: true, accessType: 'EDITABLE' },
        Order_Upload_XLS: { menu: true, accessType: 'EDITABLE' },
        Order_Upload_Scan: { menu: true, accessType: 'EDITABLE' },
        Checkin_Scan_Pickup: { menu: true, accessType: 'EDITABLE' },
        Checkin_Scan_Pickup_Hub: { menu: true, accessType: 'EDITABLE' },
        Checkin_Scan_Delivery_Hub: { menu: true, accessType: 'EDITABLE' },
        Agent_Scan: { menu: true, accessType: 'EDITABLE' },
        Handover: { menu: true, accessType: 'EDITABLE' },
        Print: { menu: true, accessType: 'EDITABLE' },
        Delivery: { menu: true, accessType: 'EDITABLE' },
        DRS_Scan: { menu: true, accessType: 'EDITABLE' },
        Update_DRS: { menu: true, accessType: 'EDITABLE' },
        Reassign_DRS: { menu: true, accessType: 'EDITABLE' },
        Manage_DRS: { menu: true, accessType: 'EDITABLE' },
        DRS_Cancellation: { menu: true, accessType: 'EDITABLE' },
        Checkin_Scan_Delivery: { menu: true, accessType: 'EDITABLE' },
        Problem_Shipment: { menu: true, accessType: 'EDITABLE' },
        Reopen_DRS: { menu: true, accessType: 'EDITABLE' },
        Manifest: { menu: true, accessType: 'EDITABLE' },
        Manifest_OutScan_Pickup: { menu: true, accessType: 'EDITABLE' },
        Manifest_InScan_PickupHub: { menu: true, accessType: 'EDITABLE' },
        Manifest_OutScan_PickupHub: { menu: true, accessType: 'EDITABLE' },
        Manifest_InScan_DeliveryHub: { menu: true, accessType: 'EDITABLE' },
        Manifest_OutScan_DeliveryHub: { menu: true, accessType: 'EDITABLE' },
        Manifest_InScan_DeliveryBranch: { menu: true, accessType: 'EDITABLE' },
        LodgeIn: { menu: true, accessType: 'EDITABLE' },
        View_And_Track: { menu: true, accessType: 'EDITABLE' },
        CS_Website_Tracking: { menu: true, accessType: 'EDITABLE' },
        View_And_Track_Operation: { menu: true, accessType: 'EDITABLE' },
        Reports: { menu: true, accessType: 'EDITABLE' },
        Handover_WayBills: { menu: true, accessType: 'EDITABLE' },
        Exception: { menu: true, accessType: 'N' },
        Docket_Edit_Utility: { menu: true, accessType: 'N' },
        Delete_Shipment_Void: { menu: true, accessType: 'N' },
        Mf_Cancellation: { menu: false, accessType: 'EDITABLE' },
        Manifest_log: { menu: false, accessType: 'EDITABLE' },
        Dashboard: { menu: true, accessType: 'EDITABLE' }
    }
    const filteredMenu = Object.keys(data).filter(key => {
        const value = data[key];
        return value.menu;
    });

    return (
        <DrawerContentScrollView {...props}>
            <View className='mt-3 ml-3 border  justify-center' style={styles.customHeight}>
                <List.AccordionGroup className='bg-transparent' expandedId={expandedId}
                onAccordionPress={handleAccordionPress}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <List.Item title='Home/dashboard'
                            titleStyle={{ color: "white" }}
                            left={props => <List.Icon {...props} icon='inbox-arrow-down-outline' color='white' />} />
                    </TouchableOpacity>

                    <List.Section className='ml-2 mt-0 mb-0'>
                        {
                            filteredMenu.some(item => item == 'Pickup') && 
                            <List.Accordion
                                theme={{ colors: { background: "transparent" } }}
                                title='Pickup'
                                titleStyle={{ color: "white", marginLeft: 10 }}
                                id='1'
                                left={props => <List.Icon {...props} icon='send' color='white' />}
                                right={props => <List.Icon {...props} icon={expandedId === '1' ? 'chevron-down' : 'chevron-right'} color='white' />}>
                                <TouchableOpacity onPress={() => navigation.navigate('Cpu')}>
                                    {
                                        filteredMenu.some(item => item == 'Create_PU') && <List.Item title='CreatePU' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='information-outline' color='white' />} />
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Spu')}>
                                    {
                                        filteredMenu.some(item => item == 'Pickup_Scan') && <List.Item title='Pickup Scan' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='forum-outline' color='white' />} />
                                    }
                                </TouchableOpacity>
                            </List.Accordion>
                        }
                        {
                            filteredMenu.some(item => item == 'Delivery') && <List.Accordion
                                theme={{ colors: { background: "transparent" } }}
                                title='Delivery'
                                titleStyle={{ color: "white", marginLeft: 10 }}
                                id='2'
                                left={props => <List.Icon {...props} icon='briefcase' color='white' />}
                                right={props => <List.Icon {...props} icon={expandedId === '2' ? 'chevron-down' : 'chevron-right'} color='white' />}>
                                <TouchableOpacity onPress={() => navigation.navigate('CDRS')}>
                                    {
                                        filteredMenu.some(item => item == 'Create_PU') && <List.Item title='Create DRS' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='information-outline' color='white' />} />
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Update-Drs')}>
                                    {
                                        filteredMenu.some(item => item == 'Update_DRS') && <List.Item title='Update DRS' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='forum-outline' color='white' />} />
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('ReAssign-Drs')}>
                                    {
                                        filteredMenu.some(item => item == 'Request_for_Re-assign') && <List.Item title='Request for Re-assign' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='flag' color='white' />} />
                                    }
                                </TouchableOpacity>
                            </List.Accordion>
                        }
                        {
                            filteredMenu.some(item => item == 'Linehaul') && <List.Accordion
                                theme={{ colors: { background: "transparent", primary: "white" } }}
                                title='Linehaul'
                                titleStyle={{ color: "white", marginLeft: 10 }}
                                id='3'
                                left={props => <List.Icon {...props} icon='arrow-top-right-bottom-left' color='white' />}
                                right={props => <List.Icon {...props} icon={expandedId === '3' ? 'chevron-down' : 'chevron-right'} color='white' />}>
                                <TouchableOpacity onPress={() => navigation.navigate('Destination-Scan')}>
                                    {
                                        filteredMenu.some(item => item == 'Destination_Scan') && <List.Item title='Destination Scan' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='forum-outline' color='white' />} />
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Seal-In-Scan')}>
                                    {
                                        filteredMenu.some(item => item == 'Seal_In_Scan') && <List.Item title='Seal In Scan' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='forum-outline' color='white' />} />
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Seal-Out-Scan')}>
                                    {
                                        filteredMenu.some(item => item == 'Seal_Out_Scan') && <List.Item title='Seal Out Scan' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='forum-outline' color='white' />} />
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Gate-Pass')}>
                                    {
                                        filteredMenu.some(item => item == 'Gate_Pass') && <List.Item title='Gate Pass' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='forum-outline' color='white' />} />
                                    }
                                </TouchableOpacity>
                            </List.Accordion>
                        }
                        {
                            filteredMenu.some(item => item == 'Booking') && <List.Accordion
                                theme={{ colors: { background: "transparent", primary: "white" } }}
                                title='Booking'
                                titleStyle={{ color: "white", marginLeft: 10 }}
                                id='4'
                                left={props => <List.Icon {...props} icon='format-list-bulleted' color='white' />}
                                right={props => <List.Icon {...props} icon={expandedId === '4' ? 'chevron-down' : 'chevron-right'} color='white' />}>
                                <TouchableOpacity onPress={() => navigation.navigate('Print-Waybill')}>
                                    {
                                        filteredMenu.some(item => item == 'Print') && <List.Item title='Print' titleStyle={{ color: "white" }} style={styles.childItem}
                                            left={props => <List.Icon {...props} icon='printer' color='white' />} />
                                    }
                                </TouchableOpacity>
                            </List.Accordion>
                        }
                    </List.Section>
                    <TouchableOpacity onPress={() => { navigation.navigate('Pending-Task') }}>
                        <List.Item title='Pending Task'
                            titleStyle={{ color: "white" }}
                            left={props => <List.Icon {...props} icon='format-list-bulleted' color='white' />} />
                    </TouchableOpacity>

                    <TouchableOpacity className='bg-blue-600 w-44 h-10 justify-center items-center rounded mt-3 ml-4 '>
                        <Text className='text-white font-bold'>Download Synced Data</Text>
                    </TouchableOpacity>
                </List.AccordionGroup>
            </View>
            <View>
                <TouchableOpacity className='mt-3 ml-7' onPress={() => navigation.dispatch(DrawerActions.closeDrawer())} >
                    <Icon name='close' size={50} color='white' />
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    boxElevated: {
        elevation: 3
    },
    transParentBG: {
        backgroundColor: 'black',
        opacity: 0.5
    },
    customHeight: {
        height: 600,
    },
    childItem: {
        position: 'relative',
        right: 50
    }

});

export default CustomDrawer