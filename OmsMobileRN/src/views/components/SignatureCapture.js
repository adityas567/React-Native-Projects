import React,{ useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SignatureCanvas from 'react-native-signature-canvas'


const SignatureScreen = () => {
    const signatureRef = useRef();
  
    const handleSave = () => {
      if (signatureRef.current) {
        signatureRef.current.saveImage();
      }
    };
  
    const handleReset = () => {
      if (signatureRef.current) {
        signatureRef.current.resetImage();
      }
    };
  
    const handleSaveEvent = result => {
      // result.encoded - base64 encoded image
      // result.pathName - path to the image file
      console.log(result);
    };
  
    return (
      <View style={{ flex: 1 }}>
        <SignatureCanvas
          ref={signatureRef}
          onOK={handleSave}
          onEmpty={handleReset}
          onSaveEvent={handleSaveEvent}
          style={{ flex: 1, backgroundColor: 'white' }}
        />
  
        <TouchableOpacity onPress={handleSave}>
          <Text>Save Signature</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={handleReset}>
          <Text>Reset Signature</Text>
        </TouchableOpacity>
      </View>
    );
  };
export default SignatureScreen