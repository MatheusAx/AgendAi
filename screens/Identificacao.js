import * as React from "react";
import { View, Text, TextInput } from "react-native";
import {TouchableOpacity, ScrollView} from 'react-native';

export default function Identificacao() {
  return (
 <View>
     <ScrollView horizontal={false}>    
    <View >
    <TextInput
     placeholder="Nome"
        keyboardType="default"      
    />

    <TextInput   
      placeholder="Telefone"
        keyboardType="number-pad"      
    />

    <TextInput    
      placeholder="Email"      
        keyboardType="email-address"      
    />

  </View>
  );


 {/* Fim da área de cadastro do contato */}

 <TouchableOpacity onPress={()=>{
 

   direcionarAgendamento();

 }}

 
</TouchableOpacity>
</ScrollView>
</View>
);
}