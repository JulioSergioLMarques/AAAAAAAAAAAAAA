import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, SafeAreaView, Platform } from 'react-native';

const fundo = require('./bg.png')

export default class Home extends Component{

    render(){
        return(
            <View>
                <SafeAreaView style={styles.telaandroid}>
                </SafeAreaView>
                    <ImageBackground source={fundo} style={styles.background}> 
                        
                    </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        resizeMode:"cover"
    },
    telaandroid:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
}) 