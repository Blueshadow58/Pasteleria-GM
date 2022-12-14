import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../constants/colors";
import { Home } from "../screens";
const Stack = createNativeStackNavigator();

function ShopNavigation() {
  return (
    
    <Stack.Navigator initialRouteName="Home" screenOptions={{
    borderratius: 24,
    headerStyle: {
      backgroundColor: colors.orange,
    },
    headerTintColor: colors.white,
    headerTitleAlign: "center",
    }}>
      <Stack.Screen name="Home" component={Home} options={{
        title:"Productos",
      }} />
      {/* <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} /> */}
    </Stack.Navigator>
  );
}

export default ShopNavigation;