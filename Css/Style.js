import { StyleSheet } from "react-native";

export const styleFormat = StyleSheet.create({
  container: {
    
    width: '100%',
    height: '100%',
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0EEEE",
  },

  logo: {
    width: '75%',
    height: '75%',
    marginLeft: "auto",
    marginRight: "auto",
    resizeMode: "contain",
  },
 
  btn: {  
    
    backgroundColor: "#063248",
    
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row' ,
    borderRadius:40
    
  },

  txtbtn: {
      color:'#FFFFFF'
  }

});
