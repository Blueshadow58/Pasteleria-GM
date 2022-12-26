import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState,useRef } from 'react';
import { Alert, KeyboardAvoidingView, Modal,Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ProductItemList, ProductsList } from '../../components'
import { getMyCart } from '../../firebase/api';
import { db, defaultAuth } from '../../firebase/firebase-config'
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { setCart } from '../../reduxSlices/cart/cartSlice';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createOrder } from '../../features/createOrder';

const Cart =({navigation}) => {
// const [cart, setCart] = useState([])
const [modalVisible, setModalVisible] = useState(false);
const dispatch = useDispatch();
const cart = useSelector(state => state.cart.list);

  useEffect(() => {
     onSnapshot(doc(db, "carts", defaultAuth.currentUser.uid), () => {
      getMyCart()
        .then((data) => {
          
          //validate if cart is empty
          dispatch(setCart(data));           
        })
        .catch((err) => alert(err));
    });
  }, [dispatch]);
  
  
  
  
  // Checkout Modal
  const CheckoutModal = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [instructions, setInstructions] = useState('');

    const shippingInfo = {
      phoneNumber: phoneNumber,
      address: address,
      instructions: instructions,
    };

    const handleCheckout = () => {
      createOrder(cart,shippingInfo);
      Alert.alert('Orden generada con éxito');
  };

    return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {        
        // Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.textHeaderModal}>Datos de entrega</Text>   
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >                              
                  <Ionicons style={styles.closeIcon} name="close" />      
              </TouchableOpacity>
            </View>
            <View style={styles.modalInnerView}>
              <View style={styles.formContainer}>
                <Text style={styles.modalText}>Número telefónico</Text> 
                <TextInput
                autoFocus={true}
                onChangeText={(text)=> setPhoneNumber(text)}
                defaultValue={phoneNumber}
                style={styles.inputForm} placeholder='Número telefónico'/>
                <Text style={styles.modalText}>Direccción</Text> 
                <TextInput
                onChangeText={(text)=> setAddress(text)}
                defaultValue={address}
                style={styles.inputForm} placeholder='Dirección'/>
                <Text style={styles.modalText}>Instrucciones de entrega (opcional)</Text> 
                <TextInput
                onChangeText={(text)=> setInstructions(text)}
                defaultValue={instructions}
                style={styles.inputForm} placeholder='Instrucciones de entrega'/>                
              </View>
              <View style={styles.btnConfirmOrder}>
                <TouchableOpacity onPress={()=> handleCheckout()}  >
                  <Text style={styles.checkoutText}>Confirmar Orden</Text>
                </TouchableOpacity>
              </View>
            </View>       
          </View>
        </View>
     
    </Modal>
    
  )}




  return (
    <>    
      <View style={styles.container}>
          <View style={styles.productsListContainer}>
            {cart ? <ProductsList Children={ProductItemList} products={cart} numColumns={1} />:null}
          </View>
          <View style={styles.checkoutContainer}>      
            <TouchableOpacity onPress={() => setModalVisible(true)} >          
              <Text style={styles.checkoutText}>Generar orden</Text>        
            </TouchableOpacity>
          </View>        
      </View>
      <CheckoutModal/>       
      </>
  )
}

export default Cart