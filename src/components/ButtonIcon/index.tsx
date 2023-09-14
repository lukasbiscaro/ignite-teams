import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconTypeStyleProps,
}

const ButtonIcon = ({ icon, type = 'PRIMARY', ...rest }: Props) => {

    const style = type === 'PRIMARY' ? { size: 32, color: '#00B37E' } : { size: 32, color: '#F75A68' }

    return (
        <TouchableOpacity activeOpacity={.8} {...rest} className='w-14 h-14 justify-center items-center'>
            <MaterialIcons name={icon} size={style.size} color={style.color} />
        </TouchableOpacity>
    )
}

export default ButtonIcon