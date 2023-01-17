import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        marginVertical: 20,
        // flex: 1,
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
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    bodyInner: {
        width: '90%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    mapContainer: {
        flex: 1,
    },
    map: {
        width: '100%',
        minWidth: '100%',
        height: '100%',
        minHeight: 200,
    },
    formContainer: {
        // flex: 1,
        // alignItems: 'flex-start',
        // direction: 'row',
        flexDirection: 'row',
        flexWrap: 'wrap',


        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
    },
    inputForm: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: colors.gray,
        marginVertical: 10,
    },
    divRow: {
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    titleBody: {
        fontSize: 18,
        color: colors.gray,
        marginBottom: 10,
    },
    checkoutContainer: {
        backgroundColor: colors.orange,
        marginBottom: 20,
        // marginHorizontal: '10%',
        borderRadius: 10,
    },
    checkoutText: {
        padding: 5,
        fontSize: 16,
        // alignSelf: 'center',
        color: colors.white,
    },

});