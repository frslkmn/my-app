import { View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Post(props) {
  return (
    <View style={styles.container1}>
        <View style={styles.container2}>
             <Image
             style={styles.tinyLogo}source=
             {{
                 uri: props.photoURL ,
             }} />
             <View>
                 <Text style={styles.text1}>{props.name}</Text>
                 <Text style={styles.text2}>{props.username}</Text>
             </View>    
         </View>

         <View style={styles.container3}>
             <Text style={styles.text3}>
             {props.children}
             </Text>
         </View>

         <View style={styles.container5}>
             <Text style={styles.text3}>
                    12.00 a.m
             </Text>
             <Text style={styles.text3}>
                    | 21 Oct 2023
             </Text>
             <Text style={styles.text3}>
                    | X by IOS
             </Text>
         </View>

         <View style={styles.container5}>
             <TouchableOpacity style={styles.button}>
             <AntDesign name="retweet" size={16} color="black" />
             </TouchableOpacity>
             <Text style={styles.text4}>
                 10M
                 </Text>
                 <TouchableOpacity style={styles.button}>
             <EvilIcons name="comment" size={16} color="black" />
             </TouchableOpacity>
            <Text style={styles.text4}>
                1M
            </Text>
            <TouchableOpacity style={styles.button}>
            <EvilIcons name="heart" size={16} color="black" />
             </TouchableOpacity>
             <Text style={styles.text4}>
                1B
             </Text>
             <TouchableOpacity style={styles.button}>
             <MaterialCommunityIcons name="share-outline" size={16} color="black" />
             </TouchableOpacity>
             <Text style={styles.text4}>
                50K
             </Text>
         </View>
     </View>
  )
}

const styles = StyleSheet.create({
     container1: 
     { 
         margin : 10,
         height : 'auto',
         width : 366,
         borderWidth : 2,
         borderRadius : 25,
         //borderColor : #AAAAAA,
     },
    
     container2: 
     {
         marginLeft : 9,
         marginRight : 9,
         marginTop : 5,
         display : "flex" ,
         flexDirection : "row",
         height : 'auto',
         width : 'auto',
         borderWidth : 1,
         borderRadius : 10,
        borderColor : 'white',
     },

     container3: {
         marginLeft : 9,
         marginRight : 9,
         height : 'auto',
         width : 'auto',
         borderWidth : 1,
         borderRadius : 10,
         borderColor : 'white',
     },

     container4: 
     {
         marginLeft : 9,
         marginRight : 9,
         display : "flex" ,
         flexDirection : "row",
         height : 'auto',
         width : 'auto',
         borderWidth : 1,
         borderRadius : 10,
         borderColor : 'white',
     },

     container5: 
     {
         justifyContent : 'space-between',
         marginLeft : 9,
         marginRight : 9,
         display : "flex" ,
         flexDirection : "row",
         height : 'auto',
         width : 256,
         borderWidth : 1,
         borderRadius : 10,
         borderColor : 'white',
     },
    
     text1: {
         marginTop : 4,
         marginLeft : 7,
         fontWeight : 'bold',
     },

     text2: {
         marginTop : 3,
         marginLeft : 7,
     },

     text3: {
         margin : 5,

     },

     text4: {
        marginBottom : 5,
        marginRight : 5,
        marginTop : 5,
         
     },

     tinyLogo : {
         borderRadius : 100,
         borderColor : 'white',
         borderWidth : 1,
         marginTop : 3,
         marginLeft : 3,
         width : 35,
         height : 35,
     },
     button : {
        margin : 5,
     },
});
