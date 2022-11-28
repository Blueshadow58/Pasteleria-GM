import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { ProductsList } from '../../components'



import { styles } from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <ProductsList/>
    </View>
  )
}
