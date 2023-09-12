import React from 'react'
import { View, Text } from 'react-native'

type Props = {
    message: string
}

const ListEmpty = ({ message }: Props) => {
    return (
        <View className='flex-1 justify-center items-center'>
            <Text className='text-center text-SM font-roboto_reg text-gray-30'>{message}</Text>
        </View>
    )
}

export default ListEmpty