import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';

export default function SlideScreens1() {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.Section1}>
              <Image source={require('../Assets/Maskgroup.png')} style={styles.Image1} />
              <Image source={require('../Assets/Mask4.png')} style={styles.Image2} />
          </View>
          <View style={styles.Section2}>
              <Text style={{fontSize:25, color:'#2C2C4E', fontFamily:'Poppins-Regular'}}>Loyalty Reward:</Text>
              <Text style={{fontSize:15, color:'#2C2C4E', fontFamily:'Poppins-Regular'}}>Earn crypto for every transaction you make.</Text>
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
      marginTop:-25,
    },
    Section2:{
      flex:1,
      paddingHorizontal:20,
      marginTop:'-50%'
    }
})