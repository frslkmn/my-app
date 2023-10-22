import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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

export default homecreen

const styles = StyleSheet.create({})