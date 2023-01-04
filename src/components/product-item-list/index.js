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
import { setCantProducts, setCart } from '../../reduxSlices/cart/cartSlice';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const ProductItemList = ({product}) => {
  const [stock, setStock] = React.useState(0);
  const [reRender, setReRender] = React.useState(false);
  const dispatch = useDispatch();
  const productStock = useSelector(state => state.cart.list);
  const cart = useSelector(state => state.cart.list);

  // console.log(productStock);
  useEffect(()  =>  {
    // alert(product.id );
    

    fetchCartById(product.id,cart).then((response) => {
     let stock = response.rows._array[0].quantity
       setStock(stock);      
    }).catch((error) => {
      setStock(0);
      // setReRender(!reRender);
      //make re render to update the stock
      ;
    })
    //
// console.log(cart);
    

    //getproduct from the cart uselector and set the stock to the product by id
    // const getProduct = (productId) => {
    //   const productIndex = cart.products.findIndex((product) => product.productId === productId);
    //   if (productIndex !== -1) {
    //     setStock(cart.products[productIndex].quantity);
    //   } else {
    //     setStock(0);
    //   }
    // }
   
    // const getProduct = async (productId) => {
    //   try {
    //       let response = await fetchCartById(productId);
    //       let stock = response.rows._array[0].quantity ? response.rows._array[0].quantity : 0;
    //       setStock(stock);
    //     } catch (error) {
    //       // delete prduct with stock 0 on dispatch
          


    //       setStock(0);
    //     }
    // }

    // getProduct(product.id);

    // const productIndex = getProduct(product.id);
    // if (productIndex !== undefined) {
    //   setStock(productIndex.quantity);
    // } else {
    //   setStock(0);
    // }


    // try {
    //   let response = await fetchCartById(product.id);
    //   let stock = response.rows._array[0].quantity ? response.rows._array[0].quantity : 0;
    //   setStock(stock);
    // } catch (error) {
    //   setStock(0);
    // }

    // fetchCartById(product.id).then((response) => {
    //   // verify if the product exists in the cart if not, set the stock to 0
    //   let stock = JSON.stringify(response.rows._array[0].quantity) === undefined ? 0 : response.rows._array[0].quantity;
    //   // let stock = response.rows._array.stock;
    //   setStock(stock);
    //   // console.log(productStock);      
    //   // after set the stock, re-render the component      
    // }).catch((error) => {
    //   setStock(0);
    //   setReRender(!reRender);
    //   // return ;
    //    console.log('productItemList'+error);
    // });    


  }, [reRender]);


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