import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../constants/colors";
import {Record} from "../screens";
const Stack = createNativeStackNavigator();

function RecordNavigation() {
  return (
    <Stack.Navigator initialRouteName="Record" screenOptions={{
    headerStyle: {
      backgroundColor: colors.orange,
    },
    headerTintColor: colors.white,
    headerTitleAlign: "center",
    }}>
      <Stack.Screen name="Record" component={Record} options={{
        title:"Historial de compras",
      }} />
      {/* <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} /> */}
    </Stack.Navigator>
  );
}

export default RecordNavigation;