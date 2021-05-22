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
    const [validade,setValidade] = React.useState("09-05-2021");

     return (
 <View style = {styleFormat.container}>
     <ScrollView horizontal={false}>    
    <View >
    
    
    <Text style = {styleFormat.txt}>
      Preencha os campos abaixo para que o prestador de serviço possa retornar contato e agendar o serviço desejado.
    </Text>
    
    
    <TextInput style = {styleFormat.campos} 
     placeholder="Faça uma breve descrição do serviço desejado"
        keyboardType="default"      
    />

    <TextInput  style = {styleFormat.campos} 
      placeholder="Insira a forma de pagamento"
        keyboardType="default"      
    />

<DatePicker
                  value={validade}
                  style={styleFormat.data}
                  date={validade}
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
                  />

            
    

  </View>
  


 {/* Fim da área de Identificação */}

 <TouchableOpacity onPress={()=>navigation.navigate("Confirmacao")}
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
  
}