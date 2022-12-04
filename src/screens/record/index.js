import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { ProductItemCard, ProductItemList, ProductsList } from '../../components'
import { styles } from './styles'


export default function Record() {
  return (
    <View style={styles.container}>
      <ProductsList Children={ProductItemList} /> 
    </View>
  )
}
