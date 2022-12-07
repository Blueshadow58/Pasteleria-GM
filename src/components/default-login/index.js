import React,{ useState } from 'react'
import { Alert, Image,Text,TextInput,TouchableOpacity,View} from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { getAuth,signInWithEmailAndPassword,initializeAuth } from "firebase/auth/react-native";
import { initializeApp, getApps, getApp } from "firebase/app";
import { firebaseConfig } from '../../firebase/firebase-config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import { changeToLogged,getUser } from '../../features/authentification/authentificationSlice'
import { useDispatch } from 'react-redux'
import { firebaseAuth } from '../../firebase/firebase-config'

export default function DefaultLogin({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
 
  // Sign in with email and password
  const handleSignIn = () => {
    signInWithEmailAndPassword(firebaseAuth,email,password).then( (userCredential)=>{
      console.log('logiado');  
      //  Change state of the user to logged
      dispatch(changeToLogged())  
    }).catch(error=> Alert.alert('Error al inicial sesion',error.message))
  }

  return (
    <View style={styles.container}>     

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        <TextInput
          onChangeText={(inputEmail) => setEmail(inputEmail)}
          style={styles.input}
          placeholder="email@correo.com"
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.icon} />
        <TextInput
          onChangeText={(inputPassword) => setPassword(inputPassword)}
          style={styles.input}
          placeholder="*********"
          textContentType="password"
          secureTextEntry
        />
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.button}
        >
          <Text style={styles.textButtom}>Ingresar</Text>
        </TouchableOpacity>
      </View>
      
    
    </View>
  )
}
