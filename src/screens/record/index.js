import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import OrderList from '../../components/order-list'

import { getMyOrders } from '../../firebase/api'
import { styles } from './styles'


export default function Record() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getMyOrders().then((data) => {
      setProducts(data)
    })
  }, [])  

  
  return (
    <View style={styles.container}>
      <OrderList products={products}/>
    </View>
  )
}
