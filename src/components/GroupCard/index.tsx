import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { UsersThree } from 'phosphor-react-native'

type Props = TouchableOpacityProps & {
    title: string,

}

const GroupCard = ({ title, ...rest }: Props) => {
    return (
        <TouchableOpacity {...rest} activeOpacity={.8} className='w-full h-24 bg-gray-50 rounded-md flex-row justify-start items-center p-6 mb-4'>
            <UsersThree size={32} color='#00875F' weight='fill' />
            <Text className='ml-4 text-MD text-gray-20 font-roboto_reg'>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default GroupCard