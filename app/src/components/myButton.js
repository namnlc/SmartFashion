import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity, SafeAreaView } from 'react-native'


const WelButton=({colorText,title,bgColor}) =>(
    <TouchableOpacity activeOpacity={0.2} style={[styles.btn, {backgroundColor:bgColor}]}>
        <Text style={{color:colorText}}>{title}</Text>
    </TouchableOpacity>
);
export default class MyButton extends Component {
    render() {
        return (
            <SafeAreaView style={{alignItems:'center', justifyContent:'center'}}>
            <WelButton title="Start" colorText="white" bgColor="#098FA8"/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    btn:{
        alignItems: 'center',
        //justifyContent:'center'
        borderRadius:25,
    },
    title:{
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center'
    }
    
})
