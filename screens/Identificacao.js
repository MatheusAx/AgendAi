import * as React from "react";
import { View, Text, TextInput } from "react-native";
import {TouchableOpacity, ScrollView} from 'react-native';
import { styleFormat } from '../Css/Style';
import Agendamento from "./Agendamento";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {ipserver} from "../config/settings";

let nm = "";
let tl = "";
let em = "";




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
    
    const [nome, setNome] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [email, setEmail] = React.useState("");
    
    return (
 <View style = {styleFormat.container}>
     <ScrollView horizontal={false}>    
     {/* Cadastro das informações do usuario  */}
    <View >
    
    
    <Text style = {styleFormat.txt}>
      Preencha os campos abaixo para que o prestador de serviço possa retornar contato e agendar o serviço desejado.
    </Text>
    
    
    <TextInput style = {styleFormat.campos} 
     placeholder="Nome"
     value={nome}
     keyboardType="default"
     onChangeText={(value) => setNome(value)}
    />

    <TextInput  style = {styleFormat.campos} 
      placeholder="Telefone"
      value={telefone}
      keyboardType="number-pad"
      onChangeText={(value) => setTelefone(value)}      
    />

    <TextInput    style = {styleFormat.campos}
      placeholder="Email"      
      value={email}
      keyboardType="email-address"
      onChangeText={(value) => setEmail(value)}      
    />
  </View>
  


 {/* Fim da área de Identificação */}

 <TouchableOpacity onPress={()=>{

    nm = nome;
    tl = telefone;
    em = email;
    efetuarCadastro();
    alert("Cadastro efetuado!")


   navigation.navigate("Agendamento")}}

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



function efetuarCadastro () {
  let idusuario = "";

  fetch(`${ipserver}/usuario/cadastro`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nm,
      telefone: tl,
      email: em,
      
    }),
  })
    .then((response) => response.json())
    .then((rs) => (idusuario = rs.output.insertId))
    .catch((error) => console.error(`Erro ao tentar cadastrar -> ${error}`));
}

