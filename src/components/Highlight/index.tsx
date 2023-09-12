import React from 'react'
import { View, Text } from 'react-native'

type Props = {
    title: string,
    subtitle: string
}

const Highlight = ({ title, subtitle }: Props) => {
    return (
        <View className='w-full my-8'>
            <Text className='text-center text-XL font-roboto_bold text-white'>{title}</Text>
            <Text className='text-center text-MD font-roboto_reg text-gray-30'>{subtitle}</Text>
        </View>
    )
}

export default Highlight