import * as React from "react";
import { View, Text, TextInput } from "react-native";
import {TouchableOpacity, ScrollView} from 'react-native';
import { styleFormat } from '../Css/Style';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DatePicker from "react-native-datepicker";
import { ipserver } from "../config/settings";

import Confirmacao from "./Confirmacao";
// import App from '../App'


let sr = "";
let pg = "";
let dt = "";

const pilha = createStackNavigator();

export default function Agendamento() {
  return(
  <NavigationContainer independent={true}>
    <pilha.Navigator>
      <pilha.Screen name="AG" component={AG}
      options={{ headerShown: false }}/>
      <pilha.Screen name="Confirmacao" component={Confirmacao}
      options={{ headerShown: false }}/>
    </pilha.Navigator>
  </NavigationContainer>
)

}

function AG({navigation}){
  const [servico, setServico] = React.useState("");  
  const [pagamento, setPagamento] = React.useState("");
  const [data, setData] = React.useState("");

     return (
 <View style = {styleFormat.container}>
     <ScrollView horizontal={false}>    
    <View >
    
    
    <Text style = {styleFormat.txt}>
      Preencha os campos abaixo para que o prestador de serviço possa retornar contato e agendar o serviço desejado.
    </Text>
    
    
    <TextInput style = {styleFormat.campos} 
        placeholder="Faça uma breve descrição do serviço desejado"
        value={servico}
        keyboardType="default"      
        onChangeText={(value) => setServico(value)}
    />

    <TextInput  style = {styleFormat.campos} 
        placeholder="Insira a forma de pagamento"
        value={pagamento}
        keyboardType="default"  
        onChangeText={(value) => setPagamento(value)}    
    />


    <TextInput  style = {styleFormat.campos} 
        placeholder="Insira a data do serviço desejado"
        value={data}
        keyboardType="default"  
        onChangeText={(value) => setData(value)}    
    />
{/* <DatePicker
                  value={validade}
                  style={styleFormat.data}
                  date={data}
                  mode="date"
                  placeholder="Selecione a Data"
                  format="DD-MM-YYYY"
                  minDate="01-01-2016"
                  maxDate="01-01-2025"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon:{
                      position:'absolute',
                      left:0,
                      top:4,
                      marginLeft:0,
                    },
                    dateInput:{
                      marginLeft:36
                    },
                  }}
                  onDateChange={(date)=>{
                    setValidade(date)
                  }}
                  /> */}

            
    

  </View>
  




 <TouchableOpacity onPress={()=>{
   sr = servico;
   pg = pagamento;
   dt = data;
   agd();
   alert("Cadastro efetuado!")
   
   navigation.navigate("Confirmacao")}}
                   style = {styleFormat.btn} >

                            
      <Text style = {styleFormat.txtbtn}> 
        Agendar agora
      </Text>

</TouchableOpacity>
</ScrollView>
</View>
);
}

function agd () {
  let idservico

  fetch(`${ipserver}/servico/cadastro`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      servico: sr,
      pagamento: pg,
      agendamento: dt,
    }),
  })
    .then((response) => response.json())
    .then((rs) => (idservico = rs.output.insertId))
    .catch((error) => console.error(`Erro ao tentar cadastrar -> ${error}`));


}