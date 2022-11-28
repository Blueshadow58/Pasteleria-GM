import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login,Register,Home } from '../screens';
const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (    
    <Stack.Navigator initialRouteName='Home' > 
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home}  />      
    </Stack.Navigator>
  );
}
export default AuthNavigation