import { signOut } from "firebase/auth";
import { defaultAuth } from "./firebase-config";

 

export const signOutFromActualAccout = ({navigation}) => {
  

    signOut(defaultAuth).then(() => {
        // Sign-out successful. 
            console.log('Sign-out successful')
            navigation.navigate('LoginTab',{screen:'Login'}); 
    
    }).catch((error) => {
    // An error happened.
    });
}