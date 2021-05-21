import { StyleSheet } from "react-native";

export const styleFormat = StyleSheet.create({
  container: {
    
    width: '100%',
    height: '100%',
    backgroundColor: "#ffffff",
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
    marginLeft:"auto",
    marginRight: "auto",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row' ,
    borderRadius:40
    
  },

  txtbtn: {
      color:'#FFFFFF'
  },

  campos:{
    
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    shadowColor: "silver",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
  },

  txt:{
    alignItems:"center",
    padding:10,
    marginTop:10,
    color: "#063248"
  }

});
