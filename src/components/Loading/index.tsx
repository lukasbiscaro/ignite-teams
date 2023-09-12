import React from 'react'
import { ActivityIndicator, View } from 'react-native';

const Loading = () => {
    return (
        <View className='flex-1 justify-center items-center bg-gray-60'>
            <ActivityIndicator color={'00875F'} />
        </View>
    )
}

export default Loading