import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login,Register,SplashScreen } from '../screens';
const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (    
    <Stack.Navigator initialRouteName='SplashScreen' > 
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />      
    </Stack.Navigator>
  );
}
export default AuthNavigation