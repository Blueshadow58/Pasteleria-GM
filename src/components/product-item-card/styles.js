import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    card: {
        width: 180,
        height: 'auto',
        backgroundColor: colors.white,
        margin: 5,
        borderRadius: 15,
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    discount: {
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: colors.green,
        paddingHorizontal: 5,
        paddingVertical: 1,
        fontSize: 12,
        color: colors.white,
        fontWeight: 'bold',
    },
    favIcon: {
        fontSize: 25,
        color: colors.red,
    },
    containerImg: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 5,
    },
    img: {
        borderRadius: 15,
        width: '100%',
        height: 125,
        resizeMode: 'contain',
    },
    bottomCard: {
        flexDirection: 'row',
    },
    info: {
        flex: 1,
        backgroundColor: colors.yellow,
    },
    title: {
        fontSize: 14,
        fontWeight: "400",
        marginVertical: 2,
    },
    price: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
    },
    addToCart: {

    },
    addIcon: {
        color: colors.orange,
        fontSize: 40,
    }

});