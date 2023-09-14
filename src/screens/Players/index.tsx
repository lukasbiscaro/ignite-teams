import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import ButtonIcon from '@components/ButtonIcon'
import Header from '@components/Header'
import Highlight from '@components/Highlight'
import Input from '@components/Input'
import Filter from '@components/Filter'
import PlayerCard from '@components/PlayerCard'

const Players = () => {

    const [team, setTeam] = useState('Time B')
    const [players, setPlayers] = useState(['Lukas', 'Felipe'])

    return (
        <View className='flex-1 bg-gray-60 p-6'>
            <Header
                showBackButton />
            <Highlight
                title='Nome da turma'
                subtitle='Adicione a galera e separe os times' />
            <View className='w-full bg-gray-70 flex flex-row justify-center rounded-md'>
                <Input
                    placeholder='Nome da pessoa'
                    placeholderTextColor={'#7C7C8A'}
                    autoCorrect={false} />
                <ButtonIcon
                    icon='add' />
            </View>
            <View className='w-full flex-row items-center mt-5'>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)} />
                    )}
                    horizontal />
                <Text className='text-gray-20 font-roboto_bold text-SM'>
                    {players.length}
                </Text>
            </View>
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }} />
                )}
                className='mt-5'
            />
        </View>
    )
}

export default Players