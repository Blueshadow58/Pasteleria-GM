import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,       
    },
    headerContainer: {
        marginVertical: 20,
        flex: 1,
        alignItems: 'center',
    },
    headerInner: {       
        width: '100%',
        alignItems: 'center',               
        flexDirection: 'row',
        justifyContent: 'space-evenly',
                
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'blue',
    },
    changeImg: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 50,
        alignSelf: 'flex-end',     
    },
    camera: {
        width: '100%',
        height: '100%',
        flex: 1,
      },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    pencilIcon: {
        color: 'white',        
        alignSelf: 'center',
        paddingVertical: 7,
        
    },

});