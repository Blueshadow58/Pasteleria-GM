import React,{ useState } from 'react'
import { Alert, Image,Text,TextInput,TouchableOpacity,View} from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,initializeAuth } from "firebase/auth";
import { initializeApp, getApps, getApp } from "firebase/app";
import { firebaseConfig } from '../../firebase/firebase-config'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getReactNativePersistence } from 'firebase/auth/react-native';

export default function DefaultRegister({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  
  // const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
  // const auth = getAuth(app)


  if (getApps().length < 1) {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } else {
    app = getApp();
    auth = getAuth();
  }


  const handleCreateAccount = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
      }).catch(error=> {
        Alert.alert('Error al registrar','Su contraseña debe contener al menos 6 caracteres')
      })  
    } else {
      Alert.alert('La contraseña no es igual')
    }

    

  }

 

  return (
    <View style={styles.container}>     

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        <TextInput
          onChangeText={(inputEmail) => setEmail(inputEmail)}
          style={styles.input}
          placeholder="Correo@gmail.com"
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.icon} />
        <TextInput
          onChangeText={(inputPassword) => setPassword(inputPassword)}
          style={styles.input}
          placeholder="Contraseña"
          textContentType="password"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.icon} />
        <TextInput
          onChangeText={(inputPassword) => setConfirmPassword(inputPassword)}
          style={styles.input}
          placeholder="Confirmar Contraseña"
          textContentType="password"
          secureTextEntry
        />
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={handleCreateAccount}
          style={styles.button}
        >
          <Text style={styles.textButtom}>Registrarme</Text>
        </TouchableOpacity>
      </View>
      
    
    </View>
  )
}
