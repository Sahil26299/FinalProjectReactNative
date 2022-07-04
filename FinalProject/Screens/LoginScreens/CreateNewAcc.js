import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient';

export default function CreateNewAcc({navigation}) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  const isEmailValid = (emailid) => {
    const re =
      /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
    const beg_spl =
      /^[0-9\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/;
    if(emailid!=''){
      if(re.test(emailid) && !beg_spl.test(email)){
        setEmailError(null);
        return true;
      }
      else{
        setEmailError('Please provide a valid email id');
        return false;
      }
    }
    else{
      setEmailError('Please provide your email id');
      return false;
    }
  };
  const onContinue=()=>{
    const saveData = {};
    if(isEmailValid(email)){
      saveData.Email = email;
      AsyncStorage.setItem("data", JSON.stringify(saveData));
      navigation.navigate('EmailSent');
    }
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Section1}>
        <Image
          source={require('../Assets/CreateNewAcc.png')}
          style={styles.Image1}
        />
        <Image
          source={require('../Assets/CreateNewAccUpsideDown.png')}
          style={styles.Image2}
        />
      </View>
      <View style={styles.Section2}>
        <Text
          style={{
            fontSize: 20,
            color: '#2C2C4E',
            fontFamily: 'Poppins-Medium',
            marginBottom: 25,
          }}>
          Create New Account
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#2C2C4E',
            fontFamily: 'Poppins-Regular',
          }}>
          E-mail
        </Text>
        <TextInput style={[styles.RefCodeInp,{borderColor: emailError != null?'red':'rgba(109, 104, 104, 0.5)'}]} value={email} onChangeText={(text)=>{
          isEmailValid(text);
          setEmail(text)
        }} />
        {emailError!=null?(<Text style={{color:'red', fontFamily:'Poppins-Regular'}}>*{emailError}</Text>):<View></View>}
        <Text
          style={{
            fontSize: 12,
            marginHorizontal: 10,
            marginVertical: 5,
            color: 'rgba(109, 104, 104, 1)',
            fontFamily: 'Poppins-Regular',
          }}>
          By signing up, you’re agree to our{' '}
          <Text style={{color: '#1774FF'}}>Privacy Policy</Text> and{' '}
          <Text style={{color: '#1774FF'}}>Terms and conditions</Text>.
        </Text>
        <TouchableOpacity
          style={styles.NewAccBTN}
          onPress={() => {
            onContinue();
          }}>
          <LinearGradient
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            colors={['#1774FF', '#8A1DDD']}
            locations={[0, 0.85]}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'white',
                letterSpacing: 0.9,
              }}>
              Continue
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.Section3}>
        <View
          style={{
            height: 1,
            width: '38%',
            backgroundColor: 'rgba(109, 104, 104, 0.3)',
            marginTop: 8,
            marginHorizontal: '3%',
          }}></View>
        <Text style={{color: 'black', fontFamily: 'Poppins-Regular'}}>OR</Text>
        <View
          style={{
            height: 1,
            width: '38%',
            backgroundColor: 'rgba(109, 104, 104, 0.3)',
            marginTop: 8,
            marginHorizontal: '3%',
          }}></View>
      </View>
      <View style={styles.Section4}>
        <View style={styles.Image1View}>
          <Image
            style={{width: 25, resizeMode: 'contain'}}
            source={require('../Assets/Google.png')}
          />
        </View>
        <View style={styles.Image2View}>
          <Image
            style={{width: 25, resizeMode: 'contain'}}
            source={require('../Assets/Facebook.png')}
          />
        </View>
        <View style={styles.Image3View}>
          <Image
            style={{width: 25, resizeMode: 'contain'}}
            source={require('../Assets/Apple.png')}
          />
        </View>
      </View>
      <View style={styles.Section5}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>
          Joined us before? <Text style={{color: '#1774FF'}}>Login</Text>
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '10%',
    backgroundColor: 'white',
  },
  Section1: {
    flex: 1,
    alignItems: 'center',
  },
  Image1: {
    width: '100%',
    resizeMode: 'contain',
    marginTop: '-10%',
  },
  Image2: {
    width: '100%',
    resizeMode: 'contain',
    marginRight: 15,
    marginTop: '-7%',
  },
  Section2: {
    flex: 0.5,
    paddingHorizontal: 20,
    marginTop: '-75%',
  },
  RefCodeInp: {
    borderWidth: 1,
    borderRadius: 10,
  },
  NewAccBTN: {
    width: '100%',
    height: '20%',
    borderRadius: 10,
    marginVertical: 30,
  },
  Section3: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },
  Section4: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  Image1View: {
    paddingTop: 10,
    marginHorizontal: '5%',
    backgroundColor: 'white',
    padding: 7,
    elevation: 5,
    shadowColor: 'rgba(109, 104, 104, 1)',
    borderRadius: 5,
  },
  Image2View: {
    marginHorizontal: '5%',
    backgroundColor: 'white',
    padding: 7,
    shadowColor: 'rgba(109, 104, 104, 1)',
    elevation: 5,
    borderRadius: 5,
  },
  Image3View: {
    marginHorizontal: '5%',
    shadowColor: 'rgba(109, 104, 104, 1)',
    backgroundColor: 'white',
    padding: 7,
    elevation: 5,
    borderRadius: 5,
  },
  Section5: {
    marginTop: '10%',
    alignItems: 'center',
  },
});
