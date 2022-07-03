import { View, Text, ScrollView, StyleSheet, FlatList,Dimensions } from 'react-native'
import React, {useRef, useState} from 'react'
import SlideScreens1 from '../Components/SlideScreens1'
import SlideScreens2 from '../Components/SlideScreens2'
import SlideScreens3 from '../Components/SlideScreens3'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
const {width,height}=Dimensions.get("screen")

export default function SliderMain({navigation}) {
    var [scrollIndicators, setScrollIndicators] = useState(0);
    const FlatListRef=useRef(null);
    const DATA = [
        {
            id:1,
            item:<SlideScreens1/>
        },
        {
            id:2,
            item:<SlideScreens2/>
        },
        {
            id:3,
            item:<SlideScreens3/>
        }
    ]
    const onViewRef = React.useRef((viewableItems)=> {
        // console.log(viewableItems.changed[0].index)
        setScrollIndicators(viewableItems.changed[0].index)
        // Use viewable items in state or as intended
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    return (
        <View style={styles.Container}>
            <FlatList
                data={DATA}
                renderItem={({item})=>{
                    return(
                        <View
                        style={{
                            width:width,
                            height:"100%"}}>
                            {item.item}
                            </View>
                    )
                }}
                ref={FlatListRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                keyExtractor={(item) => item.id}
            />
            <View style={{flexDirection:'row', paddingVertical:10, paddingHorizontal:20}}>
                <View style={{height:7, width:scrollIndicators==0 ? 20 : 7, backgroundColor:scrollIndicators==0 ?'#1774FF':'grey', marginHorizontal:5, borderRadius:5}}>
                </View>                    
                <View style={{height:7, width:scrollIndicators==1 ? 20 : 7, backgroundColor:scrollIndicators==1 ?'#1774FF':'grey', marginHorizontal:5, borderRadius:5}}></View>
                <View style={{height:7, width:scrollIndicators==2 ? 20 : 7, backgroundColor:scrollIndicators==2 ?'#1774FF':'grey', marginHorizontal:5, borderRadius:5}}></View>
            </View>
            <View style={styles.Section2}>
                <LinearGradient style={styles.NextBTN} colors={['#1774FF', '#8A1DDD']} locations={[0,0.75]} >
                    <AntDesign name='arrowright' size={40} color={'white'} onPress={()=>{
                        const index=scrollIndicators++
                        setScrollIndicators(index)
                        if(index<3){
                            FlatListRef.current.scrollToIndex({animated: true,index:index})
                        }else{
                            navigation.navigate('Login1');
                        }
                    }} />
                </LinearGradient>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    NextBTN:{
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        width:'20%'
    },
    Container:{
        flex:1
    },
    Section2:{
        marginVertical:10,
        marginHorizontal:20
    }
})