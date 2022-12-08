import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    mainCountainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    productsListContainer: {
        flex: 1,
    },
    checkoutContainer: {
        backgroundColor: colors.orange,
        marginBottom: 20,
        marginHorizontal: '10%',
        borderRadius: 10,
    },
    checkoutText: {
        padding: 5,
        fontSize: 20,
        alignSelf: 'center',
        color: colors.white,
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        marginTop: 22
      },
      modalView: {
        height: 350,
        width: '100%',
        backgroundColor: "white",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalHeader: {
        paddingLeft: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      textHeaderModal: {
        fontSize: 20,
        fontWeight: 'bold',
        },
      modalInnerView: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 25,
        // padding: 25,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor:colors.red,
      },
      closeIcon: {
        color: "white",
        fontSize: 15,
      },
      modalText: {
        
        textAlign: "center"
      },
      formContainer: {
        flex: 1,
        alignItems: 'flex-start',
        },
    //   Form checkout
    inputForm: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.gray,        
        marginVertical: 10,
        },
        btnConfirmOrder: {
            alignItems: 'center',
            backgroundColor: colors.orange,
            borderRadius: 10,
            marginBottom: 15,
        },

});