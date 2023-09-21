import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import logoImg from '@assets/logo.png'
import { CaretLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

type Props = {
    showBackButton?: boolean
}

const Header = ({ showBackButton = false }: Props) => {
    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.navigate('groups')
    }
    return (
        <View className='w-full flex-row items-center justify-center'>
            {showBackButton &&
                <TouchableOpacity onPress={handleGoBack} activeOpacity={.8} className='flex-1'>
                    <CaretLeft color='#E1E1E6' size={32} />
                </TouchableOpacity>
            }
            <Image source={logoImg} className="w-12 h-14" />
        </View>
    )
}

export default Header