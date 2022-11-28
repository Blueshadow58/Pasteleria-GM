import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./auth";


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigation />            
        </NavigationContainer>
    )
}

export default AppNavigator