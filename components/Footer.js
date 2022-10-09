import React from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function (){
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.line}></View>
                <Text style= {styles.text}>HOẶC</Text>
                <View style={styles.line}></View>

            </View>

            <View style={styles.btn}>
                <Button title="Tạo tài khoản mới " color={'#aaa'}
                     onPress={()=> navigation.navigate('ScreenRegister')}>

                </Button>
            </View>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        paddingHorizontal: 30
        
    },

   line: {
    height: 1,
    borderWidth: 1,
    width: 120
    
   },

   text : {
    marginHorizontal: 5,


   },

   container: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
   }
})