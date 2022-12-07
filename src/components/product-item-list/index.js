import React from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { addToCart } from '../../features/addToCart/addToCart';
import { styles } from './styles';

const ProductItemList = ({product}) => {
  return (    
        <View style={styles.product}>            
          <View style={styles.containerImg}> 
               <Image  style={styles.img} source={{uri: 'https://reactjs.org/logo-og.png'}}></Image> 
          </View>  
          <View style={styles.containerInfo}> 
            <Text style={styles.title} >{product.name}</Text>   
            <Text style={styles.info} numberOfLines={2}  >{product.info}</Text>   
            <Text style={styles.price} >{product.price}</Text>   
          </View>   
             
          <View style={styles.stock}>
            <TouchableOpacity  title="+" onPress={()=> addToCart(product.id)}>
              <Text style={styles.plusBtnText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.stockText}>34</Text>
            <TouchableOpacity title="-" onPress={() => {}}>
              <Text style={styles.minusBtnText}>-</Text>
            </TouchableOpacity>            
          </View>

        </View>   
  );
}

export default ProductItemList;