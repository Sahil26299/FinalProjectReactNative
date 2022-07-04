import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function LoginPhone({navigation}) {
  return (
      <ScrollView style={styles.container}>
            <View style={styles.Section1}>
                <Image source={require('../Assets/LoginPhone.png')} style={styles.Image1} />
                <Image source={require('../Assets/LoginPhoneUpsideDown.png')} style={styles.Image2} />
            </View>
            <View style={styles.Section2}>
                    <Text style={{fontSize:20, color:'black', fontFamily:'Poppins-Medium', marginBottom:25}}>Sign Up</Text>
                    <Text style={{fontSize:14, color:'black', fontFamily:'Poppins-Regular'}}>Your Phone Number</Text>
                    <TextInput style={styles.PhoneNumberInp} keyboardType={'number-pad'} />
                    <Text style={{fontSize:12, marginHorizontal:10, marginVertical:5, color:'rgba(109, 104, 104, 1)', fontFamily:'Poppins-Regular'}}>We use your phone number to verify important changes to your account</Text>
            </View>
            <TouchableOpacity style={styles.NewAccBTN}>
                <LinearGradient style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'center', borderRadius:10}} colors={['#1774FF', '#8A1DDD']} locations={[0,0.99]}>
                    <Text style={{fontFamily:'Poppins-Regular',  color:'white', letterSpacing:0.9}}>Continue</Text>
                </LinearGradient>
            </TouchableOpacity>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:'10%',
        backgroundColor:'white',
    },
    Section1:{
      flex:1,
      alignItems:'center',
    },
    Image1:{
      width:'100%',
      resizeMode:'contain',
      marginTop:'5%'
    },
    Image2:{
      width:'100%',
      resizeMode:'contain',
      marginRight:'-5%',
    },
    Section2:{
      flex:0.5,
      paddingHorizontal:20,
      marginTop:'-70%'
    },
    PhoneNumberInp:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'rgba(109, 104, 104, 0.5)',
    },
    NewAccBTN:{
        width:'90%',
        height:50,
        alignSelf:'center',
        borderRadius:10,
        marginTop:'50%',
        marginBottom:'10%'
    }

})