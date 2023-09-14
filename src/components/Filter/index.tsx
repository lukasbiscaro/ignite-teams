import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'

type FilterStyleProps = {
    isActive?: boolean
}

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string,

}

const Filter = ({ title, isActive = false, ...rest }: Props) => {

    const styleActive = isActive ? 'border-2 border-green-light rounded-md p-2 w-20 justify-center items-center' : 'border-none rounded-md p-2 w-20 justify-center items-center'

    return (
        <TouchableOpacity activeOpacity={.8} {...rest} className={styleActive}>
            <Text className='font-roboto_bold text-SM text-white uppercase'>{title}</Text>
        </TouchableOpacity>
    )
}

export default Filter