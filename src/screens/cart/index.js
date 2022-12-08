import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { ProductItemList, ProductsList } from '../../components'
import { getMyCart } from '../../firebase/api';
import { db, defaultAuth } from '../../firebase/firebase-config'
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Cart =({navigation}) => {
const [cart, setCart] = useState([])
const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
     onSnapshot(doc(db, "carts", defaultAuth.currentUser.uid), () => {
      getMyCart()
        .then((data) => {
          setCart(data);
        })
        .catch((err) => alert(err));
    });
  }, []);
  
  // Checkout Modal
  const CheckoutModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <KeyboardAvoidingView style={styles.mainCountainer}>
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
                <TextInput style={styles.inputForm} placeholder='Número telefónico'/>
                <Text style={styles.modalText}>Direccción</Text> 
                <TextInput style={styles.inputForm} placeholder='Numero telefonico'/>
                <Text style={styles.modalText}>Instrucciones de entrega (opcional)</Text> 
                <TextInput style={styles.inputForm} placeholder='Numero telefonico'/>                
              </View>
              <View style={styles.btnConfirmOrder}>
                <TouchableOpacity onPress={()=> alert('test')}  >
                  <Text style={styles.checkoutText}>Confirmar Orden</Text>
                </TouchableOpacity>
              </View>
            </View>       
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
   
  )

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