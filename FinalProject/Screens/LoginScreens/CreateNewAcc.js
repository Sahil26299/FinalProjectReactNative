import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function CreateNewAcc({navigation}) {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.Section1}>
              <Image source={require('../Assets/CreateNewAcc.png')} style={styles.Image1} />
              <Image source={require('../Assets/CreateNewAccUpsideDown.png')} style={styles.Image2} />
          </View>
          <View style={styles.Section2}>
                <Text style={{fontSize:20, color:'black', fontFamily:'Poppins-Medium', marginBottom:25}}>Create New Account</Text>
                <Text style={{fontSize:14, color:'black', fontFamily:'Poppins-Regular'}}>E-mail</Text>
                <TextInput style={styles.RefCodeInp} />
                <Text style={{fontSize:12, marginHorizontal:10, marginVertical:5, color:'rgba(109, 104, 104, 1)', fontFamily:'Poppins-Regular'}}>By signing up, you’re agree to our <Text style={{color:'#1774FF'}}>Privacy Policy</Text> and <Text style={{color:'#1774FF'}}>Terms and conditions</Text>.</Text>
                <TouchableOpacity style={styles.NewAccBTN} onPress={()=>navigation.navigate('EmailSent')}>
                    <LinearGradient style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'center', borderRadius:10}} colors={['#1774FF', '#8A1DDD']} locations={[0,0.99]}>
                        <Text style={{fontFamily:'Poppins-Regular',  color:'white', letterSpacing:0.9}}>Continue</Text>
                    </LinearGradient>
                </TouchableOpacity>
          </View>
          <View style={styles.Section3}>
              <View style={{height:1, width:'38%', backgroundColor:'rgba(109, 104, 104, 0.3)', marginTop:8, marginHorizontal:'3%'}}></View>
              <Text style={{color:'black', fontFamily:'Poppins-Regular'}}>OR</Text>
              <View style={{height:1, width:'38%', backgroundColor:'rgba(109, 104, 104, 0.3)', marginTop:8, marginHorizontal:'3%'}}></View>
          </View>
          <View style={styles.Section4}>
            <View style={styles.Image1View}>
               <Image style={{width:25, resizeMode:'contain'}} source={require('../Assets/Google.png')} />
            </View>
            <View style={styles.Image2View}>
               <Image style={{width:25, resizeMode:'contain'}} source={require('../Assets/Facebook.png')} />
            </View>
            <View style={styles.Image3View}>
               <Image style={{width:25, resizeMode:'contain'}} source={require('../Assets/Apple.png')} />
            </View>
          </View>
          <View style={styles.Section5}>
            <Text style={{fontFamily:'Poppins-Regular'}}>Joined us before? <Text style={{color:'#1774FF'}}>Login</Text></Text>
          </View>
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
      marginTop:'-10%'
    },
    Image2:{
      width:'100%',
      resizeMode:'contain',
      marginRight:15,
      marginTop:'-7%'
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
        height:'20%',
        borderRadius:10,
        marginVertical:30
    },
    Section3:{
      flexDirection:'row',
      justifyContent:'center',
      marginVertical:25
    },
    Section4:{
      flexDirection:'row',
      justifyContent:'center',
      paddingBottom:10
    },
    Image1View:{
      paddingTop:10,
      marginHorizontal:'5%',
      backgroundColor:'white',
      padding:7,
      elevation:5,
      shadowColor:'rgba(109, 104, 104, 1)',
      borderRadius:5
    },
    Image2View:{
      marginHorizontal:'5%',
      backgroundColor:'white',
      padding:7,
      shadowColor:'rgba(109, 104, 104, 1)',
      elevation:5,
      borderRadius:5
    },
    Image3View:{
      marginHorizontal:'5%',
      shadowColor:'rgba(109, 104, 104, 1)',
      backgroundColor:'white',
      padding:7,
      elevation:5,
      borderRadius:5
    },
    Section5:{
      marginTop:'10%',
      alignItems:'center'
    }
})