import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../constants/colors";
import Cart from "../screens/cart";

const Stack = createNativeStackNavigator();

function CartNavigation() {
  return (
    <Stack.Navigator initialRouteName="Cart" screenOptions={{
    headerStyle: {
      backgroundColor: colors.orange,
    },
    headerTintColor: colors.white,
    headerTitleAlign: "center",
    }}>
      <Stack.Screen name="Cart" component={Cart} options={{
        title:"Carrito de compras",
      }} />
      
      {/* <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} /> */}
    </Stack.Navigator>
  );
}

export default CartNavigation;