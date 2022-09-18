import React from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView} from "react-native";
import logoFaceBook from "../assets/IMG__FaceBook.jpg"

export default function() {
    return(
        <View style = {styles.banner}>
             <Image source={logoFaceBook} style = {styles.img}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 250
    }
})