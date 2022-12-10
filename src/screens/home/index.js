import { StatusBar } from 'expo-status-bar'
import { Alert, Text, View } from 'react-native'
import { LoadingSpinner, ProductItemCard, ProductItemList, ProductsList } from '../../components'
import { styles } from './styles'
import { getProducts } from '../../firebase/api'
import { useCallback, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { setProducts } from '../../reduxSlices/products/productsSlice'
import { useSelector,useDispatch } from 'react-redux'


const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.products.list);
  const loading = useSelector(state => state.products.loading);

  // make efficient this part to not load the same data each time
  useFocusEffect(
    useCallback(() => {
      getProducts().then((data) => dispatch(setProducts(data)));
      
    }, [dispatch])
  )

  return (
    <View style={styles.container}>
      {loading ? <ProductsList Children={ProductItemCard} products={list} numColumns={2} /> : <LoadingSpinner />}  
    </View>
  )
}

export default Home