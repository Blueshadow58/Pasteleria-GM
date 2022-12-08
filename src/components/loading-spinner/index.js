import { ActivityIndicator, View } from "react-native"
import colors from "../../constants/colors"
import { styles } from "./styles"

const loadingSpinner = () => (
    <View style={styles.container}>
        <ActivityIndicator color={colors.orange} animating={true} size="large" />
    </View>
)

export default loadingSpinner