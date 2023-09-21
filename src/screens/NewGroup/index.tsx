import Header from '@components/Header'
import React, { useState } from 'react'
import { View } from 'react-native'
import { UsersThree } from 'phosphor-react-native'
import Highlight from '@components/Highlight'
import Button from '@components/Button'
import Input from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const NewGroup = () => {

    const [group, setGroup] = useState('')
    const navigation = useNavigation()

    const handleNew = () => {
        navigation.navigate('players', { group })
    }

    return (
        <SafeAreaView className='flex-1 bg-gray-60 p-6'>
            <Header showBackButton />
            <View className='flex-1 justify-center'>
                <UsersThree size={56} color='#00875F' className='self-center' />
                <Highlight title='Nova turma' subtitle='Crie a turma para adicionar as pessoas' />
                <Input placeholder='Nome da turma' placeholderTextColor={'#7C7C8A'} onChangeText={setGroup} />
                <Button onPress={handleNew} title='Criar' className='mt-5' />
            </View>
        </SafeAreaView>
    )
}

export default NewGroup