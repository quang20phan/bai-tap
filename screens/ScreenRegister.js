import React from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView} from "react-native";
import FormResgister from "../components/FormResgister";


export default function() {
    return (
        <View style= {styles.container}>

            <FormResgister/>

        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 'auto'
    },

})