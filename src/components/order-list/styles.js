import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      marginTop: 15,
      width: Dimensions.get('window').width -15,
    },
    card: {
      borderRadius: 15,
      backgroundColor: colors.white,
      paddingVertical: 10,
      paddingHorizontal: 15,
      // paddingHorizontal: 10,      
      marginVertical: 8,
      marginHorizontal: 16,
      // shadowColor: colors.white,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 1,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: colors.lightGray,
      paddingBottom: 5,
    },
    orderCode: {
      fontSize: 14,
    },
    cardBody: {
      flexDirection: 'row',
      paddingVertical: 15,
    },
    cardBodyLeft: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingLeft: 15,
    },
    cardBodyRight: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderLeftWidth: 1,
      borderLeftColor: colors.lightGray,
      paddingLeft: 15,
    },
    titleBody: {
      fontSize: 15,
      color: colors.primary,
    },
    textStatus: {
      fontSize: 20,
      color: colors.primary,
    },
  
   
});