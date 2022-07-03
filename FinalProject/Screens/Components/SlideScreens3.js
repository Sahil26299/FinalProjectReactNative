import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';

export default function SlideScreens1() {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.Section1}>
              <Image source={require('../Assets/Asset.png')} style={styles.Image1} />
              <Image source={require('../Assets/Mask6.png')} style={styles.Image2} />
          </View>
          <View style={styles.Section2}>
              <Text style={{fontSize:25, color:'black', fontFamily:'Poppins-Regular'}}>Crypto Card:</Text>
              <Text style={{fontSize:15, color:'black', fontFamily:'Poppins-Regular'}}>Banking the UNBANKED in Africa and the World.</Text>
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
      marginRight:3,
      marginTop:3,
    },
    Section2:{
      flex:1,
      paddingLeft:20,
      paddingRight:60,
      marginTop:'-35%',
    }
})