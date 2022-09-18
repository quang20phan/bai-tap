import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import User from '../assets/IMG__user.png'
export default function(){
    return (
        <View style = {styles.header}>
           <AntDesign name="bars" size={30} color="black" style={styles.icon_bars} />
           <Text style={styles.title}>Food Finder</Text>
           <AntDesign name="search1" size={24} color="black" style={styles.icon_search} />
           <Image source={User} style={styles.img}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        top: 0,
        height: "10%",
        backgroundColor: '#fff',
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'
    },

    icon_bars : {
       
    },

    icon_search: {
        marginRight: 30
    },

    title: {
        fontWeight: "700",
        marginLeft: 'auto',
        marginRight: 46,
        fontSize: 20
    },

    img: {
        width: 30,
        height: 30,
        
    }
})