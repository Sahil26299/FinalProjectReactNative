import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function PhoneVerified({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('ThanksForJoin')}>
        <View style={styles.container}>
            <View style={styles.Section1}>
                <Image source={require('../Assets/PhoneVerified.png')} style={styles.Image1} />
                <Image source={require('../Assets/PhoneVerifiedUpsideDown.png')} style={styles.Image2} />
            </View>
            <View style={styles.Section2}>
                    <Text style={{fontSize:14, marginHorizontal:15, marginVertical:5, color:'#2C2C4E', textAlign:'center', fontFamily:'Poppins-Medium'}}>+1 234 **** ***</Text>
                    <Text style={{fontSize:20, marginHorizontal:15, marginVertical:5, color:'#2C2C4E', textAlign:'center', fontFamily:'Poppins-Medium'}}>Your Phone Number is Confirmed</Text>
            </View>
            <View style={styles.TapAnywhere}>
                <Text style={{fontFamily:'Poppins-Regular',  color:'black', letterSpacing:0.9}}>Tap anywhere to continue</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    Section1:{
      flex:1,
      alignItems:'center',
    },
    Image1:{
      width:'100%',
      resizeMode:'contain',
      marginTop:'10%'
    },
    Image2:{
      width:'100%',
      resizeMode:'contain',
      marginTop:-8
    },
    Section2:{
      flex:1,
      paddingHorizontal:20,
      justifyContent:'center',
    },
    RefCodeInp:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'rgba(109, 104, 104, 0.5)',
    },
    TapAnywhere:{
        alignSelf:'center',
        borderRadius:10,
        marginBottom:10
    },
})