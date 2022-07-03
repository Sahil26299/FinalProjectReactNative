import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function ReferralCode({navigation}) {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.Section1}>
              <Image source={require('../Assets/RefCodeImage.png')} style={styles.Image1} />
              <Image source={require('../Assets/RefCodeUpsideDown.png')} style={styles.Image2} />
          </View>
          <View style={styles.Section2}>
                <Text style={{fontSize:15, color:'black', fontFamily:'Poppins-Regular'}}>Referral Code (optional)</Text>
                <TextInput style={styles.RefCodeInp} />
                <Text style={{fontSize:12, marginHorizontal:15, marginVertical:5, color:'rgba(109, 104, 104, 1)', textAlign:'center', fontFamily:'Poppins-Regular'}}>Using a referal code at signup will earn you signup bonus.</Text>
                <TouchableOpacity style={styles.NewAccBTN} onPress={()=>navigation.navigate('CreateNewAcc')}>
                    <LinearGradient style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'center', borderRadius:10}} colors={['#1774FF', '#8A1DDD']} locations={[0,0.99]}>
                        <Text style={{fontFamily:'Poppins-Regular',  color:'white', letterSpacing:0.9}}>Continue</Text>
                    </LinearGradient>
                </TouchableOpacity>
          </View>
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
      marginTop:'-10%'
    },
    Image2:{
      width:'100%',
      resizeMode:'contain',
      marginRight:15,
      marginTop:-50
    },
    Section2:{
      flex:0.5,
      paddingHorizontal:20,
      marginTop:'-75%'
    },
    RefCodeInp:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'rgba(109, 104, 104, 0.5)',
    },
    NewAccBTN:{
        width:'100%',
        height:'25%',
        borderRadius:10,
        marginVertical:30
      },
})