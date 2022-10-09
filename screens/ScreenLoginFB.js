import React from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView} from "react-native";
import logoFaceBook from "../assets/IMG__FaceBook.jpg"
import Footer from "../components/Footer";
import ListButton from "../components/ListButton";
import Banner from "../components/Banner";
import Input from "../components/Input";


export default function() {
    return (
        <View style= {styles.container}>

            <Banner />
            <Input />
            {/* <ListButton /> */}
            <Footer />
            
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto'
    },

})