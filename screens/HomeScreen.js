import React from 'react'
import { Button, View, Text } from 'react-native'

export default function HomeScreen(props) {

    const switchToDetails = () => {
        props.navigation.navigate('Details')
        //ou navigation.navigate('Details') si on met navigation en 
        //paramètre de la fonction HomeScreen
    }

    return (
        <View>
            <Text>Bienvenue sur ma page d'accueil</Text>
            <Button onPress={switchToDetails}
                title="Aller sur Détails" />
        </View>
    )
}
