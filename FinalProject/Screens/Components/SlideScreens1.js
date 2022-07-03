import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

export default function SlideScreens1() {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.Section1}>
              <Image source={require('../Assets/Group.png')} style={styles.Image1} />
              <Image source={require('../Assets/Mask2.png')} style={styles.Image2} />
          </View>
          <View style={styles.Section2}>
              <Text style={{fontSize:25, color:'black', fontFamily:'Poppins-Regular'}}>Safe & Secure</Text>
              <Text style={{fontSize:15, color:'black', fontFamily:'Poppins-Regular'}}>BUY, SELL crypto in few clicks. SEND and RECIEVE crypto for free.</Text>
          </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
    },
    Section1:{
      flex:1,
      alignItems:'center',
      paddingTop:'25%'
    },
    Image1:{
      width:'100%',
      resizeMode:'contain'
    },
    Image2:{
      width:'100%',
      resizeMode:'contain',
      marginRight:15,
    },
    Section2:{
      flex:1,
      paddingHorizontal:20,
      marginTop:'-40%'
    }
})