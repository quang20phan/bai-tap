import React from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView} from "react-native";

export default function (){
    return (
        <View style= {styles.list__btn}>

            <View>
                <Button title="Đăng nhập"></Button>

            </View>

            <View style={styles.btn__center}>
                
                <Text style={styles.btn__forGotPass} onPress={()=>{alert('ĐỒNG TIẾN QUANG')}}>Quên mật khẩu?</Text>
                
            </View>

            <View>
            <Text style={styles.btn__forGotPass } onPress={()=>{alert('QUANG TIẾN ĐỒNG')}}>Quay lại</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    list__btn: {
        paddingHorizontal: 29
    },

    btn__Login: {
        marginVertical: 2,
        borderRadius: 10,
        backgroundColor: '#fff'
    },

    btn__center: {
        marginVertical: 8,
        backgroundColor: '#fff'
    },

    btn__forGotPass : {
        textAlign: 'center',
        fontSize: 15,
        color: '#00BFFF'
    },
})