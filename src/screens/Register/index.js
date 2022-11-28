import { StatusBar } from 'expo-status-bar'
import { Text, View,Image } from 'react-native'
import DefaultRegister from '../../components/default-register'
import { styles } from './styles'

export default function Register({navigation}) {
  return (
    <>
    <View style={styles.headerContainer}>
      <View style={styles.circle}>
        <Text style={styles.textLogin}>GM</Text>      
      </View>
    </View>

    <View style={styles.container}>
        <View style={styles.containerTitle}>        
          <Text style={styles.textTitle}>Registrarme</Text>      
        </View>
    <Image
        style={styles.logo}
        source={require('../../../assets/cooking.png')}
      />
      <DefaultRegister navigation={navigation} />
      <View style={styles.containerButton}>        
        <Text onPress={()=> navigation.navigate('Login')} style={styles.textRegister}>Volver al login</Text>      
      </View>
    </View>
    </>
  )
}
