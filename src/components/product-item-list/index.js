import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/addToCart/addToCart';
import { getCart } from '../../features/getCart';
import { getStockCurrentProduct } from '../../features/getStockCurrentProduct';
import { getTotalProducts } from '../../features/getTotalProducts';
import { subtractFromCart } from '../../features/subtractFromCart';
import { db, defaultAuth } from '../../firebase/firebase-config';
import { setCantProducts } from '../../reduxSlices/cart/cartSlice';
import { styles } from './styles';


const ProductItemList = ({product}) => {
  const [stock, setStock] = React.useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
     onSnapshot(doc(db, "carts", defaultAuth.currentUser.uid), () => {
      getCart().then((cart) => {
      getStockCurrentProduct(product.id,cart).then((stock) => {
        setStock(stock);
      });
      
    });
  });
  }, []);

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
            <Text style={styles.stockText}>{stock}</Text>
            <TouchableOpacity title="-" onPress={() => subtractFromCart(product.id)}>
              <Text style={styles.minusBtnText}>-</Text>
            </TouchableOpacity>            
          </View>

        </View>   
  );
}

export default ProductItemList;