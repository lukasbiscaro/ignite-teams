import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

const Input = ({ ...rest }: TextInputProps) => {
    return (
        <TextInput {...rest} className='flex-1 max-h-14 min-h-max bg-gray-70 text-white rounded-md p-4 font-roboto_reg text-MD' />
    )
}

export default Input