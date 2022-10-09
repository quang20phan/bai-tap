import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Category from './components/Category';
// import Header from './components/Header';
import ScreenLoginFB from './screens/ScreenLoginFB';
import ScreenRegister from './screens/ScreenRegister';
import ScreenHome from './screens/ScreenHome';
import { AntDesign } from '@expo/vector-icons';
const Stack = createStackNavigator()

export default function App() {
  return (
    // <View style={styles.container}>

    // {/* <ScreenLoginFB /> */}
    
    //     <ScreenRegister/>

    // <StatusBar style="auto" />
    // </View>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="ScreenLoginFB" screenOptions={{headerShown: false,}}>

          <Stack.Screen name="ScreenLoginFB" component = {ScreenLoginFB}/>
          <Stack.Screen name="ScreenRegister" component = {ScreenRegister}/>
          <Stack.Screen name="ScreenHome" component = {ScreenHome}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
});
