import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';


export default function ThanksForJoin({navigation}) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.Section1}>
            <Image source={require('../Assets/Thanks.png')} style={styles.Image1} />
            <Image source={require('../Assets/ThanksUpsideDown.png')} style={styles.Image2} />
      </View>
      <View style={styles.Section2}>
        <Text style={styles.Heading}>Thanks for joining us!</Text>
        <Text style={styles.Para1}>We’d love to send you exclusive offers and
            new updates’ via email or in-app messages. we’ll never sell your infomation to third parties. You can opt out/withdraw
            your consent at any time.</Text>
        <Text style={styles.Para2}>Here’s our <Text style={{color:'#1774FF'}}>Privacy Notice</Text> for further information about how we use and protect personal data.</Text>
      </View>
      <View style={styles.Section3}>
        <CheckBox
            style={styles.Check}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={() => setToggleCheckBox(!toggleCheckBox)}/>
            <Text style={styles.CheckText}>Yes, I’d like to receive exclusive offers and updates from <Text style={{color:'#1774FF'}}>Base Reward</Text></Text>
      </View>
            <TouchableOpacity style={styles.NewAccBTN} disabled={!toggleCheckBox} onPress={()=>navigation.navigate('MainLogin')}>
                <LinearGradient style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'center', borderRadius:10}} colors={['#1774FF', '#8A1DDD']} locations={[0,0.85]}>
                    <Text style={{fontFamily:'Poppins-Regular',  color:'white', letterSpacing:0.9}}>Continue</Text>
                </LinearGradient>
            </TouchableOpacity>
    </View>
  )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Section1:{
        flex:1,
    },
    Section2:{
        flex:1,
        paddingHorizontal:20
    },
    Section3:{
        flexDirection:'row',
        flex:1,
        paddingHorizontal:20
    },
    Image1:{
        width:'100%',
        resizeMode:'contain',
        marginTop:'10%'
    },
    Image2:{
        width:'100%',
        resizeMode:'contain',
        marginTop:-9
    },
    Heading:{
        marginTop:'15%',
        fontSize:26,
        fontFamily:'Poppins-Medium',
        color:'#2C2C4E'
    },
    Para1:{
        marginTop:'5%',
        fontSize:14,
        fontFamily:'Poppins-Regular',
        color:'#2C2C4E',
        marginRight:'5%',
    },
    Para2:{
        marginTop:'5%',
        fontSize:14,
        fontFamily:'Poppins-Regular',
        color:'#2C2C4E',
        marginRight:'5%',
    },
    Check:{
        marginTop:'40%',
        marginRight:5
    },
    CheckText:{
        fontFamily:'Poppins-Regular',
        fontSize:14, 
        color:'#2C2C4E',
        marginTop:'39%',
        lineHeight:22
    },
    NewAccBTN:{
        width:'90%',
        height:50,
        alignSelf:'center',
        borderRadius:10,
        marginBottom:'5%'
    }
})