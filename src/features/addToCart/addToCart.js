import { doc, setDoc, setDocs, addDoc, increment, getDoc, updateDoc, arrayUnion } from "firebase/firestore"; 
import { Alert } from "react-native";
import { db, defaultAuth } from "../../firebase/firebase-config";

export const addToCart = async (productId) => {
    const productToAdd = {
        productId: productId,
        quantity: 1,
    }
    const cartRef = doc(db,"carts",defaultAuth.currentUser.uid)
    const docSnap = await getDoc(cartRef);

    //update the quantity if the product is already in the cart
    if (docSnap.data().products !== undefined) {
        const cart = docSnap.data();
        console.log(cart);
        const productIndex = cart.products.findIndex((product) => product.productId === productId);
        if (productIndex !== -1) {
            cart.products[productIndex].quantity += 1;
            await updateDoc(cartRef, {
                products: cart.products,
            });
        } else {
            await updateDoc(cartRef, {
                products: arrayUnion(productToAdd),
            });
        }
    } else {
        //set the cart if it doesn't exist
        await setDoc(cartRef, {
            products: [productToAdd],
        });
    }

}

