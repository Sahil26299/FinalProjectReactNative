import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function Welcome({navigation}) {
  setTimeout(() => {
    navigation.replace('SliderMain');
  }, 3000);
  return (
    <LinearGradient locations={[0, 0.5, 1]} colors={['#5585F5', 'transparent', '#5585F5']} style={styles.container}>
      <ScrollView>
        <View style={styles.Section1}>
            <View style={styles.Hr1}></View>
            <View style = {styles.HeadingView}>
              <Text style={styles.Heading}>BASE REWARD</Text>
            </View>
            <View style={styles.Hr2}></View>
        </View>
        <View style={styles.Section2}>
          <Image source={require('../Assets/BaseRewardIcon.png')}/>
          <Image source={require('../Assets/Mask1.png')} style={styles.upsideDownImage}/>
          <View style={styles.FooterView}>
            <Text style={{textAlign:'center', color:'white', fontWeight:'600', fontSize:18}}>CRYPTO BANKING</Text>
            <Text style={{textAlign:'center', color:'white', fontWeight:'600', fontSize:18}}>REWARDING YOUR LOYALTY ALL THE WAY</Text>
          </View>
        </View>
       </ScrollView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Section1:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      marginTop:'35%',
      marginBottom:'20%'
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
    Section2:{
      flex:1,
      alignItems:'center',
    },
    upsideDownImage:{
      marginTop:-15,
      marginLeft:10
    },
    FooterView:{
      marginTop:-75
    }
})