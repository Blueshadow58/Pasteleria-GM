import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',              
    },
    textRegister:{
      paddingTop:20
    },
    headerContainer:{             
      backgroundColor:colors.white,
      paddingBottom:20
    },
    logo: {
      width: 170,
      height: 170,
    },
    circle:{
      alignItems: 'center',
      justifyContent: 'flex-end',      
      alignSelf:"center",            
      width: 600,
      height: 600,
      borderRadius: 600 / 2,
      marginTop: -450,
      shadowColor: '#000',  
      elevation:5,              
      backgroundColor: '#FF9800',   
    }, 
    textLogin:{
      fontSize:35,
      marginBottom:30,      
      color:colors.white,
    },
    containerTitle:{
      paddingVertical:5
    },
    textTitle:{
      fontSize:22
    }

    
  });
  