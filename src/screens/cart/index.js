import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { ProductItemList, ProductsList } from '../../components'


export default function Cart() {
  return (
    <View>
      <ProductsList Children={ProductItemList}/>
    </View>
  )
}
