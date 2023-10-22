import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Post from './components/Post';
import { useEffect, useState } from 'react';


export default function App() {

  const [posts, setPosts]= useState([])
  useEffect(() =>  {
      fetch('https://workshop.elyasasmad.com/posts')
      .then ((response) => response.json())
      .then((data) => {
      setPosts(data)
      })
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
      data={posts}
      style={{height:"auto"}} 
      renderItem={({ item }) => 
      <Post
        likes={item.data.likes}
        quotesRetweets ={item.data.quotesRetweets}
        share={item.data.share}
        retweets={item.data.retweets}
        name={item.name}
        username={item.username}
        photoURL={item.photoURL}
        time={item.time}
        date={item.date}
        >
        {item.content}
      </Post>}
        keyExtractor={item => item.id}
        /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});