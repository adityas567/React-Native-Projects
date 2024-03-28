import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'




const Button = () => {
  return (
    <View>
      <TouchableOpacity className='bg-blue-500 text-center'>
            <Text className='text-xl p-2 w-16'>Click</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default Button