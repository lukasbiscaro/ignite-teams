import React from 'react'
import { TouchableOpacity, View, Text, TouchableOpacityProps } from 'react-native'

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = TouchableOpacityProps & {
    title: string,
    type?: ButtonTypeStyleProps
}

const Button = ({ title, type = 'PRIMARY', ...rest }: Props) => {

    const tailwindClasses = type === 'PRIMARY' ? 'flex-1 max-h-14 min-h-max bg-green-dark rounded-md justify-center items-center' : 'flex-1 max-h-14 min-h-max bg-red-dark rounded-md justify-center items-center'

    return (
        <TouchableOpacity activeOpacity={.8} {...rest} className={tailwindClasses}>
            <Text className='text-MD text-white font-roboto_bold'>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button