import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../constants/colors";
import {Profile} from "../screens";
const Stack = createNativeStackNavigator();

function ProfileNavigation() {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{
    headerStyle: {
      backgroundColor: colors.orange,
    },
    headerTintColor: colors.white,
    headerTitleAlign: "center",
    }}>
      <Stack.Screen name="Profile" component={Profile} options={{
        title:"Perfil",
      }} />
      {/* <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} /> */}
    </Stack.Navigator>
  );
}

export default ProfileNavigation;