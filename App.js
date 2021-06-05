import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import  {MaterialIcons} from '@expo/vector-icons';
import Identificacao from   './screens/Identificacao';
import Agendamento from './screens/Agendamento';
import { styleFormat } from './Css/Style';

const pilha = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <pilha.Navigator initialRoute="TelaInicial">
        <pilha.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <pilha.Screen name="Identificacao" 
        component={Identificacao}
        options={{headerShown: false}} />
          </pilha.Navigator>
    </NavigationContainer>
  );
}



function TelaInicial({ navigation }) {
  return (
    <View style={styleFormat.container}>
      <Image
        source={
          require("./AgendAi/logo.png")
        }
        style={styleFormat.logo}
      />
      <View style={styleFormat.btn}>
        <TouchableOpacity
          style={styleFormat.btn}
          onPress={() => navigation.navigate("Identificacao")}
        >
          <MaterialIcons name="perm-identity" size={24} color="#FFFFFF" />
          <Text style={styleFormat.txtbtn}>Identificação</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


