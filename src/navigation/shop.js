import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens";
const Stack = createNativeStackNavigator();

function ShopNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} /> */}
    </Stack.Navigator>
  );
}

export default ShopNavigation;