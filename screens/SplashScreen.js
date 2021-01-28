import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { Image } from 'react-native-elements';


export default function SplashScreen(props) {

    const goToLibrary = () => {
        props.navigation.navigate('Library')
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/512px-Closed_Book_Icon.svg.png'}}
                style={{ width: 200, height: 200 }}
                />
            <View style={styles.button}>
            <Button onPress={goToLibrary}
                    title="Go !" />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  
    },

    button: {
        padding: 30,
    }
  
  });

