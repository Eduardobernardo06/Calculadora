import React from 'react'
import {StyleSheet,Text,View} from  'react-native'

const Styles = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,6)',
        alignItems: 'flex-end',
    },
    displayValues:{
        fontSize:60,
        color:'#fff',
    }

})

export default props =>
<View style={Styles.display}>

    <Text style={Styles.displayValues}numberOfLines={1}> 
     {props.value}
    </Text>

</View>