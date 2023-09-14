import Header from '@components/Header'
import React from 'react'
import { View } from 'react-native'
import { UsersThree } from 'phosphor-react-native'
import Highlight from '@components/Highlight'
import Button from '@components/Button'
import Input from '@components/Input'

const NewGroup = () => {
    return (
        <View className='flex-1 bg-gray-60 p-6'>
            <Header showBackButton />
            <View className='flex-1 justify-center'>
                <UsersThree size={56} color='#00875F' className='self-center' />
                <Highlight title='Nova turma' subtitle='Crie a turma para adicionar as pessoas' />
                <Input placeholder='Nome da turma' placeholderTextColor={'#7C7C8A'} />
                <Button title='Criar' className='mt-5' />
            </View>
        </View>
    )
}

export default NewGroup