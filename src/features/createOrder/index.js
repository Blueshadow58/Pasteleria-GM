import { db, defaultAuth } from "../../firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";

//create an order from the cart to the database firestore and clear the cart
export const createOrder = async (cart,shippingInfo) => {
   
    const docRef = await addDoc(collection(db, "orders"), 
        {
        cart: cart,
        createAt: new Date(),
        status: "pendiente",
        userId: defaultAuth.currentUser.uid,
        contactPhone: shippingInfo.phoneNumber || defaultAuth.currentUser.phoneNumber,
        address: shippingInfo.address,
        instructions: shippingInfo.instructions,
        }
      );

    return docRef.id;
}
