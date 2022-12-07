import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Alert, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { ProductItemList, ProductsList } from '../../components'
import { getMyCart } from '../../firebase/api';
import { db, defaultAuth } from '../../firebase/firebase-config'
import { styles } from './styles';

const Cart =() => {
  const [cart, setCart] = useState([])

  useEffect(() => {
     onSnapshot(doc(db, "carts", defaultAuth.currentUser.uid), () => {
      getMyCart()
        .then((data) => {
          setCart(data);
        })
        .catch((err) => alert(err));
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.productsListContainer}>
        {cart ? <ProductsList Children={ProductItemList} products={cart} numColumns={1} />:null}
      </View>
      <View style={styles.checkoutContainer}>      
        <TouchableOpacity   onPress={() => Alert.alert("Checkout")} >
          
            <Text style={styles.checkoutText}>Comprar carrito</Text>
        
        </TouchableOpacity>
      </View>  
    </View>
  )
}

export default Cart