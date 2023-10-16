import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import Color from '../Shared/Color'
import { AntDesign } from '@expo/vector-icons'
export default function Login() {
  return (
    <View>
      <Image 
        source={require('./../Assets/Images/login.jpg')} 
        style={styles.backgroundLogin}
      />
      <View style={styles.container}>
         <Text style = {styles.welcomeText}>Welcome to Leisure Treasure</Text>
         <View style={styles.button}>
           <AntDesign name="google" 
           size={25} 
           color="white" 
           style={{marginRight: 5}}/>
           <Text style={{color:'white', fontSize: 20}}> Sign In With Google </Text>
         </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex:0.7,
        marginTop: -10,
        backgroundColor:'fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    welcomeText:{
      fontSize:32, 
      textAlign:'center',
      fontWeight:'bold'
    },
    backgroundLogin:{
        height: 250,
        width: 380,
        padding: 10,
        flex:0.3,
     },
    button: {
        backgroundColor:Color.primary,
        marginTop: 100,
        padding: 5,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        borderRadius: 30,
    },
})