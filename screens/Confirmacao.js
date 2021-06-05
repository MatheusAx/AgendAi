import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { ipserver } from "../config/settings";
import { styleFormat } from '../Css/Style';

export default function listar() {
const [dados, setDados]=React.useState([])

    React.useEffect(()=>{
        fetch(`${ipserver}/servico/conferir`, {
            method: "GET",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((rs) => setDados(rs.output))
        .catch((error) => console.error(`Deu ruim -> ${error}`));
    },[])
  return (
    <View>
    <ScrollView>
    {
        dados.map((item,index)=>(
            <View style={styleFormat.container2}>
                <Text> {item.nome}</Text>
                <Text> {item.telefone}</Text>
                <Text> {item.email}</Text>
                <Text> {item.Servico}</Text>
                <Text> {item.Pagamento}</Text>
                <Text> {item.Agendamento}</Text>
            </View>
        ))
    }
    </ScrollView>
    </View>
)};
//  function listar2() {
//      const [dados, setDados]=React.useState([])
    
//          React.useEffect(()=>{
//              fetch(`${ipserver}/usuario/listar`, {
//                  method: "GET",
//                  headers: {
//                      accept: "application/json",
//                      "content-type": "application/json",
//                  },
//              })
//              .then((response) => response.json())
//              .then((rs) => setDados(rs.output))
//              .catch((error) => console.error(`Deu ruim -> ${error}`));
//          },[])
//        return (
//          <View>
//          <ScrollView>
       
//          {
//              dados.map((item,index)=>(
//                  <View style={styleFormat.container2}>
//                      <Text> {item.Nome}</Text>
//                      <Text> {item.Telefone}</Text>
//                      <Text> {item.Email}</Text>
//                  </View>
//              ))
//          }
//          </ScrollView>
//          </View>
//     )};
