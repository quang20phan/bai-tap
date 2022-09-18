import React from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView} from "react-native";

export default function (){
    return (
        <SafeAreaView style= {styles.list__input}>
            <TextInput style={styles.input__username} placeholder="Số điện thoại hoặc Email"></TextInput>
            <TextInput style={styles.input__pass} placeholder="Mật khẩu"></TextInput>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list__input: {
        paddingHorizontal: 16,
        marginVertical: 10
        
    },

    input__username: {
        height: 40,
        borderWidth: 1,
        margin: 12,
        borderRadius: 6,
        paddingHorizontal: 10
        
        
    },

    input__pass: {
        height: 40,
        borderWidth: 1,
        margin: 12,
        borderRadius: 6,
        paddingHorizontal: 10
    }
})