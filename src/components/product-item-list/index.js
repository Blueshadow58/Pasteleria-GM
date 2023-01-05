import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect,useCallback } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchCart, fetchCartById } from '../../db';
import { editMyCartStock } from '../../features/addToCart/addToCart';
import { getCart } from '../../features/getCart';
import { getStockCurrentProduct } from '../../features/getStockCurrentProduct';
import { getTotalProducts } from '../../features/getTotalProducts';
import { db, defaultAuth } from '../../firebase/firebase-config';
import { setCantProducts, setCart } from '../../reduxSlices/cart/cartSlice';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native'

const ProductItemList = ({product}) => {
  const [stock, setStock] = React.useState(0);
  const [reRender, setReRender] = React.useState(false);
  const dispatch = useDispatch();
  const productStock = useSelector(state => state.cart.list);
  const cart = useSelector(state => state.cart.list);

  

  useEffect( () => {       
        fetchCartById(product.id,cart).then((response) => {
          let stock = response.rows._array[0].quantity
            setStock(stock);                  
         }).catch((error) => {
           setStock(0);           
         })  
       },

     [reRender])
  
  




  const addProductToCart = async () => {   

      try {
        await editMyCartStock(product.id,'+'); 
                 
      } catch (error) {
        alert(error);
      }
      await setReRender(!reRender); 
  }
  const substractProductFromCart = async () => {
    try {    
      // if the stock is 1 then delete the product from the cart
      if (stock === 1) {        
        // remove product from cart by id
        cartFiltered = cart.filter((productInCart) => productInCart.id !== product.id);
        // console.log(cartFiltered);        
        dispatch( setCart(cartFiltered) );
      }   
      // substract 1 to the stock but if the stock is 0 then delete the product from the database
      await editMyCartStock(product.id,'-'); 
      await setReRender(!reRender);      
    } catch (error) {
      alert(error);
    }
    await setReRender(!reRender);  
  }

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
            <TouchableOpacity  title="+" onPress={addProductToCart}>
              <Text style={styles.plusBtnText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.stockText}>{stock}</Text>
            <TouchableOpacity title="-" onPress={substractProductFromCart}>
              <Text style={styles.minusBtnText}>-</Text>
            </TouchableOpacity>            
          </View>

        </View>   
  );
}

export default ProductItemList;