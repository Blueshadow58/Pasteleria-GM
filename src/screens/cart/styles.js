import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
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
    }
    

});