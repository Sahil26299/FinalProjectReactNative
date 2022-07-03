import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function Login1({navigation}) {
  return (
    <LinearGradient style={styles.container} colors={['white','#CDDCF6']} start={{x:0, y:0}} end={{x:1, y:0}}>
        <LinearGradient style={styles.Section1} locations={[0, 0.5, 1]} colors={['#5585F5', 'white', '#CDDCF6']}>
              <Image source={require('../Assets/BaseRewardIcon.png')} style={styles.Image}/>
              <Image source={require('../Assets/Mask1.png')} style={styles.upsideDownImage}/>
        </LinearGradient>
        <View style={styles.Section2}>
          <Text style={{fontFamily:'Poppins-Regular', marginVertical:'8%'}}>Invited? Add Referal Code </Text>
          <TouchableOpacity style={styles.NewAccBTN} onPress={()=>navigation.navigate('ReferralCode')}>
            <LinearGradient style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'center', borderRadius:10}} colors={['#1774FF', '#8A1DDD']} locations={[0,0.99]}>
                <Text style={{fontFamily:'Poppins-Regular',  color:'white', letterSpacing:0.9}}>Create  New  Account</Text>
            </LinearGradient>
          </TouchableOpacity>
          <LinearGradient style={styles.Login} colors={['#1774FF', '#8A1DDD']} locations={[0,0.99]}>
            <TouchableOpacity activeOpacity={0.9} style={styles.LoginBTN}><Text style={{fontFamily:'Poppins-Regular',  color:'#1774FF', letterSpacing:0.9}}>Login to existing account</Text></TouchableOpacity>
          </LinearGradient>
        </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Section1:{
      flex:1,
      alignItems:'center',
      borderBottomLeftRadius:30
    },
    Heading:{
      color:'#5585F5',
      fontWeight:'700',
      fontSize:25,
    },
    Hr1:{
      backgroundColor:'white',
      height:5,
      width:'100%'
    },
    Hr2:{
      backgroundColor:'white',
      height:5,
      width:'100%'
    },
    HeadingView:{
      backgroundColor:'white',
      paddingHorizontal:60,
      paddingVertical:22,
      borderRadius:40
    },
    Image:{
      marginTop:'30%',
      width:'40%',
      resizeMode:'contain'
    },
    upsideDownImage:{
      width:'40%',
      resizeMode:'contain',
      marginTop:-75,
    },
    FooterView:{
      marginTop:-75
    },
    Section2:{
      flex:0.5,
      backgroundColor:'white',
      alignItems:'center',
      borderTopRightRadius:30
    },
    NewAccBTN:{
      width:'80%',
      height:'20%',
      borderRadius:10,
    },
    Login:{
      marginVertical:'8%',
      width:'80%',
      height:'20%',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'
    },
    LoginBTN:{
      backgroundColor:'white',
      width:'99%',
      height:'94%',
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center'
    }
})