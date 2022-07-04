import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient';

export default function LoginPhone({navigation}) {
  const [saveData, setSaveData] = useState();
  var [CountryCode, setCountryCode] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [phoneNumError, setPhoneNumError] = useState(null);
  const isPhoneNumberValid = (phNum) => {
      var reg = /[7-9][0-9]{9}/g;
      if(phNum!=''){
        if(reg.test(phNum) && phNum.length==10){
          setPhoneNumError(null);
          return true;
        }
        else{
          setPhoneNumError('Please provide a valid phone number!');
          return false;
        }
      }
      else{
          setPhoneNumError('Please provide your phone number!');
          return false;
      }
  }
  AsyncStorage.getItem('data').then(value =>
    {setSaveData(JSON.parse(value))}
   );
  const onContinue=()=>{
    // console.log(saveData.Email);
    if(isPhoneNumberValid(phoneNum)){
      saveData.Mobile = phoneNum;
      AsyncStorage.setItem("data", JSON.stringify(saveData));
      // console.log(saveData)
      navigation.navigate('SignUpOTP')
    }
  }
  return (
      <ScrollView style={styles.container}>
            <View style={styles.Section1}>
                <Image source={require('../Assets/LoginPhone.png')} style={styles.Image1} />
                <Image source={require('../Assets/LoginPhoneUpsideDown.png')} style={styles.Image2} />
            </View>
            <View style={styles.Section2}>
                    <Text style={{fontSize:22, color:'#2C2C4E', fontFamily:'Poppins-Medium', marginBottom:25}}>Sign Up</Text>
                    <Text style={{fontSize:14, color:'#2C2C4E', fontFamily:'Poppins-Regular'}}>Your Phone Number</Text>
                    <View style={{flexDirection:'row'}}>
                      <TextInput style={styles.CountryCodeInp} keyboardType={'number-pad'} value={CountryCode} onChangeText={(text)=>{
                        setCountryCode(text);
                      }}/>
                      <AntDesign name='plus' size={10} color={'black'} style={{position:'absolute', top:20, left:5}} />
                      <TextInput style={[styles.PhoneNumberInp,{borderColor:phoneNumError!=null?'red':'rgba(109, 104, 104, 0.5)'}]} keyboardType={'number-pad'} value={phoneNum} onChangeText={(text)=>{
                          isPhoneNumberValid(text);
                          setPhoneNum(text);
                      }} />
                    </View>
                    {phoneNumError!=null?(<Text style={{color:'red', fontFamily:'Poppins-Regular'}}>*{phoneNumError}</Text>):<View></View>}
                    <Text style={{fontSize:12, marginHorizontal:10, marginVertical:5, color:'rgba(109, 104, 104, 1)', fontFamily:'Poppins-Regular'}}>We use your phone number to verify important changes to your account</Text>
            </View>
            <TouchableOpacity style={styles.NewAccBTN} onPress={()=>{
              onContinue();
            }}>
                <LinearGradient style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'center', borderRadius:10}} colors={['#1774FF', '#8A1DDD']} locations={[0,0.85]}>
                    <Text style={{fontFamily:'Poppins-Regular',  color:'white', letterSpacing:0.9}}>Send Verification Code</Text>
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
    CountryCodeInp:{
      paddingLeft:18,
      borderWidth:1,
      borderRadius:10,
      width:'15%',
      marginRight:'5%',
      borderColor:'rgba(109, 104, 104, 0.5)',
    },
    PhoneNumberInp:{
        borderWidth:1,
        borderRadius:10,
        width:'80%',
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