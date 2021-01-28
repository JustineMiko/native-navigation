import React, {useEffect, useState } from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import { Button, View } from 'react-native';
import axios from 'axios';


export default function LibraryScreen(props) {


    const goToBook = () => {
        props.navigation.navigate('Book')
    }

    // const [list, setList] =useState([]);

    // useEffect(() => {
    //     axios.get('https://www.googleapis.com/books/v1/volumes?q=assassin+royal')
    //     .then(res => {
    //         setList(res.data);
    //     }, []);
    // })
    const list = [
        {
          name: 'Harry Potter et la coupe de feu',
          avatar_url: 'https://874633.smushcdn.com/1958972/wp-content/uploads/libriweb/productimg_9782070585205.jpg?size=510x733&lossy=1&strip=1&webp=1',
          subtitle: 'J.K. Rowling'
        },
        {
          name: 'Les chroniques de Krondor, tome 1 : Pug, l\'apprenti',
          avatar_url: 'https://img.livraddict.com/covers/398/398366//couv18876899.jpg',
          subtitle: 'R.E. Feist'
        },
        {
          name: 'Twilight : fascination',
          avatar_url: 'https://images2.medimops.eu/product/0645a6/M02012010679-source.jpg',
          subtitle: 'Stephenie Meyer'
        },
        {
          name: 'L\'assassin royal, tome 1 : L\'apprenti assassin',
          avatar_url: 'https://images2.medimops.eu/product/8d14c0/M02290352624-source.jpg',
          subtitle: 'Robin Hobb'
        },
        {
            name: 'Les dames du lac',
            avatar_url: 'https://images2.medimops.eu/product/10ed71/M02857042019-source.jpg',
            subtitle: 'Marion Zimmer Bradley'
        }
      
      ]
      
      return (
        <View>
       {
        list.map((l, i) => (
            <ListItem key={i} bottomDivider>
                <Avatar source={{uri: l.avatar_url }} />
                <ListItem.Content>
                <ListItem.Title list={list}>{l.name}</ListItem.Title>
                <ListItem.Subtitle list={list}>{list.subtitle}</ListItem.Subtitle>
                <Button onPress={goToBook} color='orange' title='infos' />
                </ListItem.Content>
            </ListItem>
        ))
        }
        </View> )
}

