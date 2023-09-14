import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import ButtonIcon from '@components/ButtonIcon'

type Props = {
    name: string,
    onRemove: () => void
}

const PlayerCard = ({ name, onRemove }: Props) => {
    return (
        <View className='w-full h-14 bg-gray-50 flex-row items-center mb-4 pl-4 rounded-md'>
            <MaterialIcons
                name='person'
                size={24}
                color={'#C4C4CC'} />
            <Text className='flex-1 text-MD text-gray-20 font-roboto_reg ml-1'>{name}</Text>
            <ButtonIcon
                icon='close'
                type='SECONDARY'
                onPress={onRemove} />
        </View>
    )
}

export default PlayerCard