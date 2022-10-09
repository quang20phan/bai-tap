import React from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView} from "react-native";
import logoFaceBook from "../assets/IMG__FaceBook.jpg"
import { useNavigation } from "@react-navigation/native";

export default function(){
    const navigation = useNavigation();
    return (
        <View style = {styles.banner}>
            <Image source={logoFaceBook} style = {styles.img}></Image>

            <SafeAreaView style= {styles.list__input}>
                <TextInput style={styles.input__username} placeholder="Số điện thoại hoặc Email"></TextInput>
                <TextInput style={styles.input__pass} placeholder="Mật khẩu"></TextInput>
                <TextInput style={styles.input__pass} placeholder="Nhập lại mật khẩu"></TextInput>
            </SafeAreaView>

            <View>
                <Button title="Đăng ký"></Button>

                <Button title="Quay lại" onPress={()=>{
                    navigation.navigate('ScreenLoginFB')
                }}>

                </Button>

            </View>

        </View>

        
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 250
    },

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