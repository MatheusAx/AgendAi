import * as React from "react";
import { View, Text, TextInput } from "react-native";
import {TouchableOpacity, ScrollView} from 'react-native';
import { StyleSheet } from "react-native";
import { styleFormat } from '../Css/Style';
import Agendamento from "./Agendamento";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const pilha = createStackNavigator();


export default function Identificacao() {
     return(
  <NavigationContainer independent={true}>
  <pilha.Navigator initialRoute="TelaIdf">
    <pilha.Screen
      name="Identificacao"
      component={TelaIdf}
      options={{ headerShown: false }}
    />
    <pilha.Screen name="Agendamento" 
    component={Agendamento}
    options={{ headerShown: false }} />
  </pilha.Navigator>
</NavigationContainer>

     );
}
  function TelaIdf ({navigation}){
     return (
 <View style = {styleFormat.container}>
     <ScrollView horizontal={false}>    
    <View >
    
    
    <Text style = {styleFormat.txt}>
      Preencha os campos abaixo para que o prestador de serviço possa retornar contato e agendar o serviço desejado.
    </Text>
    
    
    <TextInput style = {styleFormat.campos} 
     placeholder="Nome"
        keyboardType="default"      
    />

    <TextInput  style = {styleFormat.campos} 
      placeholder="Telefone"
        keyboardType="number-pad"      
    />

    <TextInput    style = {styleFormat.campos}
      placeholder="Email"      
        keyboardType="email-address"      
    />

  </View>
  


 {/* Fim da área de Identificação */}

 <TouchableOpacity onPress={()=>navigation.navigate("Agendamento")}
                   style = {styleFormat.btn}
                   options={{ headerShown: false }}>
      <Text style = {styleFormat.txtbtn}> 
        Agendar agora
      </Text>

</TouchableOpacity>
</ScrollView>
</View>
);
}

