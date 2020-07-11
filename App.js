import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, TouchableOpacityBase, ImageBackground } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"


function Tela1({navigation}){
  return(
    <View style={styles.container}>
    <Image
    source={require('./assets/logo2.png')}
    style={styles.imagem1}
    />

    <TextInput
    style={styles.inputs}
    placeholder='Login'      
    />

   <TextInput
    style={styles.inputs}
    secureTextEntry={true}
    placeholder='Senha'      
    /> 

    <TouchableOpacity
    style={styles.botao}
    onPress={()=>{navigation.navigate("Pagina Principal")}}
    >
      <Text style={styles.textBotao}>Entrar</Text>
    </TouchableOpacity>
    
  </View>

  );
}

function Tela2(){
  return(
            <ImageBackground source={require('./assets/foto3.png')} style ={styles.imagem2}>
                 <Text style={styles.textBotao2}>React Native</Text>
            </ImageBackground>   
  );
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Home">
        <Stack.Screen name="Home" component={Tela1}/>
        <Stack.Screen name="Pagina Principal" component={Tela2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem1: {
    height: 150,
    width: 200,
    borderRadius: 20,
  },

  inputs: {
    marginTop: 10,
    padding: 3,
    height: 25,
    width: 200,
    borderRadius: 5,
    backgroundColor: '#fff'
       
  },

  botao: {
    marginTop: 20,
    padding: 3,
    height: 25,
    width: 200,
    borderRadius: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',   
  },

  textBotao2:{
   fontSize: 20,
   color: '#fff'
  },
});
