import { StatusBar } from 'expo-status-bar'
import { Alert, Text, View } from 'react-native'
import { ProductItemCard, ProductItemList, ProductsList } from '../../components'
import { styles } from './styles'
import { getProducts } from '../../firebase/api'
import { useEffect, useState } from 'react'

const Home = () => {
const [products, setProducts] = useState(false)

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => alert(err));
  }, []);


  return (
    <View style={styles.container}>
      {products ? <ProductsList Children={ProductItemCard} products={products} numColumns={2} /> : null}  
    </View>
  )
}

export default Home