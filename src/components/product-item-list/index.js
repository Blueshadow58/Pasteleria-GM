import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchCart, fetchCartById } from '../../db';
import { editMyCartStock } from '../../features/addToCart/addToCart';
import { getCart } from '../../features/getCart';
import { getStockCurrentProduct } from '../../features/getStockCurrentProduct';
import { getTotalProducts } from '../../features/getTotalProducts';
import { db, defaultAuth } from '../../firebase/firebase-config';
import { setCantProducts } from '../../reduxSlices/cart/cartSlice';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const ProductItemList = ({product}) => {
  const [stock, setStock] = React.useState(0);
  const [reRender, setReRender] = React.useState(false);
  const dispatch = useDispatch();
  // const productStock = useSelector(state => state.cart.list);

  // console.log(productStock);
  useEffect(() => {
    // alert(product.id );
   

    fetchCartById(product.id).then((response) => {
      // verify if the product exists in the cart if not, set the stock to 0
      let stock = JSON.stringify(response.rows._array[0].quantity) === undefined ? 0 : response.rows._array[0].quantity;

      // let stock = response.rows._array.stock;
      setStock(stock);

      
      
      // after set the stock, re-render the component      
    }).catch((error) => {
      console.log('productItemList'+error);
    });    


  }, [reRender]);


  const addProductToCart = async () => {   

      try {
        await editMyCartStock(product.id,'+'); 
        await setReRender(!reRender);           
      } catch (error) {
        alert(error);
      }
    
  }
  const substractProductFromCart = async () => {
    try {
      
      
      await editMyCartStock(product.id,'-');
      
      await setReRender(!reRender);   
    } catch (error) {
      alert(error);
    }
    
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