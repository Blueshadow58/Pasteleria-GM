import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./auth";
import { useSelector } from "react-redux";
import ShopNavigation from "./shop";


 
const AppNavigator = () => {
    
    const isLoged = useSelector(state => state.authentification.user);
    const token = useSelector(state => state.authentification.token);
    

    
    return (
        <NavigationContainer>
        {token ? <ShopNavigation/> : <AuthNavigation /> } 
        </NavigationContainer>
    )
}

export default AppNavigator