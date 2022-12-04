import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./auth";
import { useSelector } from "react-redux";
import ShopNavigation from "./shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../constants/colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecordNavigation from "./record";


const Tab = createBottomTabNavigator();

const styles ={
    headerShown: false,
        tabBarInactiveBackgroundColor: colors.orange,
        tabBarActiveBackgroundColor: colors.orange,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.darkbrown,
        tabBarStyle: {
            height: 60,
        }
}


function TabNavigation() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: colors.orange,
        tabBarActiveBackgroundColor: colors.orange,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.darkbrown,
        tabBarStyle: {
            height: 60,
        },
        tabBarLabelStyle: {
            fontSize: 14,
            // fontWeight: "bold",
        },
        tabBarLabelPosition: "beside-icon",
        tabBarAllowFontScaling: true,
      }}>
        <Tab.Screen name="ProductsTab" component={ShopNavigation}  options={{
            title:"Productos",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
            )
        }} />
        <Tab.Screen name="CartTab" component={ShopNavigation} options={{
            title:"Carrito",
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
      </Tab.Navigator>
    );
  }

const AppNavigator = () => {
    const token = useSelector(state => state.authentification.token);
    return (
        <NavigationContainer>
        {token ? <TabNavigation/> : <AuthNavigation /> } 
        </NavigationContainer>
    )
}

export default AppNavigator