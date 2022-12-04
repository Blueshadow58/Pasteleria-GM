import React from 'react'
import { View,Text } from 'react-native'

const ProductItemCard = ({item}) => {
  return (
    <View>
        <Text>{item.info}</Text>
    </View>
  )
}

export default ProductItemCard