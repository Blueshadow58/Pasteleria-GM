import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./auth";
import { useSelector } from "react-redux";
import ShopNavigation from "./shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../constants/colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecordNavigation from "./record";
import ProfileNavigation from "./profile";
import { View } from "react-native";
import CartNavigation from "./cart";
import { getTotalProducts } from "../features/getTotalProducts";
import { setCantProducts } from "../reduxSlices/cart/cartSlice";
import { useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db, defaultAuth } from "../firebase/firebase-config";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigation() {
    const cantInCart = useSelector(state => state.cart.totalProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        onSnapshot(doc(db, "carts", defaultAuth.currentUser.uid), (cart) => {
            getTotalProducts(cart.data()).then((total) => {
            dispatch(setCantProducts(total));             
            });
        });
    }, []);

    return (
    <View style={{flex: 1,backgroundColor:colors.lightGray }} >
        <Tab.Navigator screenOptions={styles} initialRouteName='ProductsTab'>
            <Stack.Screen name="LoginTab" component={AuthNavigation} options={{
                tabBarButton: () => null}}   />
            <Tab.Screen name="ProductsTab" component={ShopNavigation}  options={{
                title:"Productos",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                )
            }} />
            <Tab.Screen name="CartTab" component={CartNavigation} options={{
                title:"Carrito",
                tabBarBadge: cantInCart,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="cart" color={color} size={size} />
                )
            }} />
            <Tab.Screen name="RecordsTab" component={RecordNavigation} options={{
                title:"Historial",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="list" color={color} size={size} />
                )
            }}/>
            <Tab.Screen name="ProfileTab" component={ProfileNavigation} options={{
                title:"Perfil",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                )
            }}/>
        </Tab.Navigator>
    </View>
    );
  }
  

const AppNavigator = () => {
    const token = useSelector(state => state.authentification.token);
    return (
        <NavigationContainer>
        {token ? <TabNavigation/> : <AuthNavigation/> } 
        </NavigationContainer>
    )
}

const styles ={
    headerShown: false,    
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.darkbrown,
        tabBarStyle: {
            
            backgroundColor: colors.orange,
            height: 60,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
        },
        tabBarLabelStyle: {
            paddingBottom: 3,
            fontSize: 14,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
        },
        // tabBarLabelPosition: "beside-icon",
        tabBarAllowFontScaling: true,
}

export default AppNavigator