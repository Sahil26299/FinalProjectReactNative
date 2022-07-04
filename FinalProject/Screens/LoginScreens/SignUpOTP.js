import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, {useState, useRef} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient';

export default function SignUpOTP({navigation}) {
  const [saveData, setSaveData] = useState();
  AsyncStorage.getItem('data').then(value =>
    {setSaveData(JSON.parse(value))}
   );
  const dig1 = useRef();
  const dig2 = useRef();
  const dig3 = useRef();
  const dig4 = useRef();
  const dig5 = useRef();
  const dig6 = useRef();
  return (
      <ScrollView style={styles.container}>
            <View style={styles.Section1}>
                <Image source={require('../Assets/OTPImage.png')} style={styles.Image1} />
                <Image source={require('../Assets/OTPUpsideDown.png')} style={styles.Image2} />
            </View>
            <View style={styles.Section2}>
                    <Text style={{fontSize:22, color:'#2C2C4E', fontFamily:'Poppins-Medium', marginBottom:25}}>Sign Up</Text>
                    <Text style={{fontSize:14, color:'#2C2C4E', fontFamily:'Poppins-Regular'}}>A Verification Code has been sent to</Text>
                    <Text style={{fontSize:14, color:'#2C2C4E', fontFamily:'Poppins-Regular', marginBottom:25}}>+1 264 **** ***</Text>
                    <Text style={{fontSize:14, color:'#2C2C4E', fontFamily:'Poppins-Regular'}}>Verification Code</Text>
                    <View style={{flexDirection:'row'}}>
                        <TextInput ref={dig1} style={styles.OTPinp} keyboardType={'number-pad'} onKeyPress={({nativeEvent})=>
                          nativeEvent.key=='Backspace' ? Keyboard.dismiss() : dig2.current.focus()} />
                        <TextInput ref={dig2} style={styles.OTPinp} keyboardType={'number-pad'} onKeyPress={({nativeEvent})=>
                          nativeEvent.key==='Backspace'?dig1.current.focus() : dig3.current.focus()} />
                        <TextInput ref={dig3} style={styles.OTPinp} keyboardType={'number-pad'} onKeyPress={({nativeEvent})=>
                          nativeEvent.key==='Backspace'?dig2.current.focus() : dig4.current.focus()} />
                        <TextInput ref={dig4} style={styles.OTPinp} keyboardType={'number-pad'} onKeyPress={({nativeEvent})=>
                          nativeEvent.key==='Backspace'?dig3.current.focus() : dig5.current.focus()} />
                        <TextInput ref={dig5} style={styles.OTPinp} keyboardType={'number-pad'} onKeyPress={({nativeEvent})=>
                          nativeEvent.key==='Backspace'?dig4.current.focus() : dig6.current.focus()} />
                        <TextInput ref={dig6} style={styles.OTPinp} keyboardType={'number-pad'} onKeyPress={({nativeEvent})=>
                          nativeEvent.key==='Backspace'?dig5.current.focus() : Keyboard.dismiss()} />
                    </View>
            </View>
            <TouchableOpacity style={styles.NewAccBTN} onPress={()=>navigation.navigate('PhoneVerified')}>
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
      marginTop:'2%'
    },
    Image2:{
      width:'100%',
      resizeMode:'contain',
      marginRight:'1%',
      marginTop:'-3%'
    },
    Section2:{
      flex:0.5,
      paddingHorizontal:20,
      marginTop:'-70%'
    },
    OTPinp:{
        width:'14.5%',
        textAlign:'center',
        marginHorizontal:'1%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'rgba(109, 104, 104, 0.5)',
    },
    NewAccBTN:{
        width:'90%',
        height:50,
        alignSelf:'center',
        borderRadius:10,
        marginTop:'38%',
        marginBottom:'10%'
    }

})