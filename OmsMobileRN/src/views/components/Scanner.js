import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { CameraScreen } from 'react-native-camera-kit';
import { useNavigation,useRoute } from '@react-navigation/native'

const Scanner = ({ onScanned }) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [routeName, SetRouteName] = useState([]);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [myState, setMyState] = useState(route.params || ''); // initialize state with default value

  useEffect(() => {
    setMyState(route.params || '');
    SetRouteName(myState.routeName);
    if (scanned) {
      setScanned(false);
    }
     // update state when route params change
}, [route.params,scanned]);

  const onBarcodeScan = ({ nativeEvent }) => {
    const barcodeStringValue = nativeEvent.codeStringValue;
    setScanned(true);
    setScannedData(barcodeStringValue);
    console.log(barcodeStringValue);
    navigation.navigate(routeName,{scannedValue: barcodeStringValue})
  };
    

  return (
    <View style={{ flex: 1 }}>
       {scanned ? (
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>
          Scanned successfully!
        </Text>
      ) : (
      <CameraScreen
        showFrame={true}
        scanBarcode={true}
        laserColor={'red'}
        frameColor={'white'}
        onReadCode={onBarcodeScan}
        colorForScannerFrame={'black'}
      />
      )}
    </View>
  );
};

export default Scanner;