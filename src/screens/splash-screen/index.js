import { Text, View,Image } from 'react-native'
import { useDispatch } from 'react-redux';
import { setToken } from '../../features/authentification/authentificationSlice';
import { defaultAuth } from '../../firebase/firebase-config';
import styles from './styles';

export default function SplashScreen({navigation}) {
    const dispatch = useDispatch()

    setTimeout(() => {
        defaultAuth.onAuthStateChanged((user) => {
            if(user){
                dispatch(setToken(user.email))
            }else{
                navigation.navigate('Login')
            }
        })
    }, 1000);

  return (
    <>
        <View style={styles.container}>
            <Text style={styles.title}>Cargando...</Text>
        </View>
    </>
  )
}
