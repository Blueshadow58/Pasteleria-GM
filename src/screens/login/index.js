import { Text, View,Image } from 'react-native'
import DefaultLogin from '../../components/default-login'
import { styles } from './styles'

export default function Login({navigation}) {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.circle}>
          <Text style={styles.textLogin}>GM</Text>      
        </View>
      </View>

      <View style={styles.container}>   
        <View style={styles.containerTitle}>        
          <Text style={styles.textTitle}>Iniciar sesión</Text>      
        </View>

        <Image
        style={styles.logo}
        source={require('../../../assets/cooking.png')}
      />
      
        <DefaultLogin navigation={navigation} />

        <View style={styles.containerButton}>        
          <Text onPress={()=> navigation.navigate('Register')} style={styles.textRegister}>Crear Cuenta</Text>      
        </View>
      </View>
    </>
  )
}
