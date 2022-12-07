import React from 'react'
import { View,Text, Image, Alert, TouchableOpacity } from 'react-native'
import colors from '../../constants/colors'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addToCart } from '../../features/addToCart/addToCart';


const ProductItemCard = ({product}) => {
  return (
    // Card
      <View style={styles.card}>
        {/* Header discounts and liked product */}
        <View style={styles.header}>
          <Text style={styles.discount}>20% OFF</Text>
          <Ionicons style={styles.favIcon} name="heart-outline" />
        </View>
        {/* image of the product */}
        <View style={styles.containerImg}>
          <Image  style={styles.img} source={{uri: 'https://reactjs.org/logo-og.png'}}></Image> 
        </View>
       
        {/* Container of info and add to cart */}
        <View style={styles.bottomCard}>
          <View style={styles.info}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
          <View style={styles.addToCart}>
            {/* add product to the cart of the actual user */}
            <TouchableOpacity onPress={()=> addToCart(product.id)}>
              <Ionicons style={styles.addIcon} name="add-circle" />
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
  )
}

export default ProductItemCard