import { doc, setDoc, setDocs, addDoc, increment, getDoc, updateDoc, arrayUnion } from "firebase/firestore"; 
import { Alert } from "react-native";
import { deleteProductFromCart, fetchCart, fetchCartById, insertProductToCart, updateProductQuantity } from "../../db";
import { db, defaultAuth } from "../../firebase/firebase-config";

export const editMyCartStock = async (productId,addOrSubstract) => {
    
    try {
        let response = await fetchCartById(productId)
        let productExists = response.rows._array.length > 0;
        
        
        if (productExists) {
            let quantity = response.rows._array[0].quantity ? response.rows._array[0].quantity : 0;    
            // if the stock will be 0, delete the product from the cart
            if (addOrSubstract === '-') {                
                    
                if (quantity === 0) {
                    await deleteProductFromCart(productId)
                    return
                }
                await updateProductQuantity(productId, addOrSubstract)
                // console.log('quantity'+productId+' '+quantity)
                return
            }

            await updateProductQuantity(productId, addOrSubstract)
            
        } else {
            await insertProductToCart(productId, 1)
        }
        
    } catch (error) {
        console.log('addToCart'+error)
    }

   
}

