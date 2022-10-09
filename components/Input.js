import React, {useEffect,useState} from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function (){
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('ScreenHome');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (email.length == 0 || pass.length == 0) {
            Alert.alert('Cảnh báo !', 'Xin mời nhập thông tin.')
        } else {
            try {
                var user = {
                    Email: email,
                    Pass: pass
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('ScreenHome');
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <SafeAreaView style= {styles.list__input}>
            <TextInput style={styles.input__username} placeholder="Số điện thoại hoặc Email" onChangeText={(value) => setEmail(value)}>

            </TextInput>
            <TextInput style={styles.input__pass} placeholder="Mật khẩu" onChangeText={(value) => setPass(value)}>

            </TextInput>

            <View style= {styles.list__btn}>

            <View>
                <Button title="Đăng nhập"
                     onPress={async () => {
                        if (email.length == 0 || pass.length == 0) {
                            Alert.alert('Cảnh báo !', 'Xin mời nhập thông tin.')
                        } else {
                            try {
                                var user = {
                                    Email: email,
                                    Pass: pass
                                }
                                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                                navigation.navigate('ScreenHome');
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }}>

                    </Button>

            </View>

            <View style={styles.btn__center}>
                
                <Text style={styles.btn__forGotPass} onPress={()=>{alert('ĐỒNG TIẾN QUANG')}}>Quên mật khẩu?</Text>
                
            </View>

            <View>
            <Text style={styles.btn__forGotPass } onPress={()=>{alert('QUANG TIẾN ĐỒNG')}}>Quay lại</Text>

            </View>
        </View>

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
    },


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