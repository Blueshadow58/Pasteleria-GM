import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./auth";
import { useSelector } from "react-redux";
import ShopNavigation from "./shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../constants/colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecordNavigation from "./record";
import { View } from "react-native";
import CartNavigation from "./cart";


const Tab = createBottomTabNavigator();

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
            fontSize: 14,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
        },
        tabBarLabelPosition: "beside-icon",
        tabBarAllowFontScaling: true,
}


function TabNavigation() {
    return (
    <View style={{flex: 1,backgroundColor:colors.lightGray }}>
        <Tab.Navigator screenOptions={styles}>
            <Tab.Screen name="ProductsTab" component={ShopNavigation}  options={{
                title:"Productos",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                )
            }} />
            <Tab.Screen name="CartTab" component={CartNavigation} options={{
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
    </View>
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