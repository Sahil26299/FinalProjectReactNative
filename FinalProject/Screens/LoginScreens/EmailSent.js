import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function EmailSent({navigation}) {
  return (
      <ScrollView style={styles.container}>
            <View style={styles.Section1}>
                <Image source={require('../Assets/EmailSentImg.png')} style={styles.Image1} />
                <Image source={require('../Assets/EmailSentUpsideDown.png')} style={styles.Image2} />
            </View>
            <View style={styles.Section2}>
                    <Text style={{fontSize:20, marginHorizontal:15, marginVertical:5, color:'#2C2C4E', textAlign:'center', fontFamily:'Poppins-Medium'}}>Email has been sent successfully</Text>
            </View>
            <TouchableOpacity style={styles.NewAccBTN} onPress={()=>navigation.navigate('LoginPhone')}>
                <LinearGradient style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'center', borderRadius:10}} colors={['#1774FF', '#8A1DDD']} locations={[0,0.85]}>
                    <Text style={{fontFamily:'Poppins-Regular',  color:'white', letterSpacing:0.9}}>Continue</Text>
                </LinearGradient>
            </TouchableOpacity>
      </ScrollView>
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
      marginRight:-10,
      marginTop:-55
    },
    Section2:{
      flex:1,
      paddingHorizontal:20,
      justifyContent:'center',
      marginTop:'-35%'
    },
    RefCodeInp:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'rgba(109, 104, 104, 0.5)',
    },
    NewAccBTN:{
        width:'90%',
        height:50,
        alignSelf:'center',
        borderRadius:10,
        marginTop:'40%',
        marginBottom:'5%'
    },
})