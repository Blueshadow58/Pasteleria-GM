import { StatusBar } from 'expo-status-bar'
import { Alert, Text, View } from 'react-native'
import { ProductItemCard, ProductItemList, ProductsList } from '../../components'
import { styles } from './styles'
import { getProducts } from '../../firebase/api'
import { useEffect, useState } from 'react'
import { setProducts } from '../../reduxSlices/products/productsSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.products.list);

  useEffect(() => {
    getProducts().then((data) => dispatch(setProducts(data))); 
  }, []);


  return (
    <View style={styles.container}>
      {list ? <ProductsList Children={ProductItemCard} numColumns={2} /> : null}  
    </View>
  )
}

export default Home