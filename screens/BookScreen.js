import React from 'react'
import { Avatar, ListItem } from 'react-native-elements'
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function BookScreen(l) {
    
    
    return (
        <SafeAreaView style={styles.align}>
            <View  style={styles.align}>
                <Text>Harry Potter et la Coupe de feu</Text>
                <Text>J.K. Rowling</Text>
            </View>
            <View style={styles.align}>
                <Image
                    source={{ uri: 'https://874633.smushcdn.com/1958972/wp-content/uploads/libriweb/productimg_9782070585205.jpg?size=510x733&lossy=1&strip=1&webp=1'}}
                    style={{ width: 200, height: 200 }}
                    />
            </View>
            <View>
                <Text style={styles.align}>Après un horrible été chez les Dursley, Harry Potter entre en quatrième année au collège de Poudlard. 
                    <br/>
                    À quatorze ans, il voudrait simplement être un jeune sorcier comme les autres, retrouver ses amis Ron et Hermione, assister avec eux à la Coupe du Monde de Quidditch, 
                    <br/>
                    apprendre de nouveaux sortilèges et essayer des potions inconnues.
                    <br/>
                    Une grande nouvelle l'attend à son arrivée : la tenue à Poudlard d'un tournoi de magie entre les plus célèbres écoles de sorcellerie.
                    <br/>
                    Déjà les spectaculaires délégations étrangères font leur entrée... Harry se réjouit. Trop vite. 
                    <br/>
                    Il va se trouver plongé au coeur des événements les plus dramatiques qu'il ait jamais eu à affronter.
                    <br/>
                    Envoûtant, drôle, bouleversant, ce quatrième tome est le pilier central des aventures de Harry Potter.</Text>
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    align: {
      textAlign : 'center',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  

    }
  
  });
