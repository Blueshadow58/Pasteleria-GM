import { db, defaultAuth } from "../../firebase/firebase-config";
import { doc,collection,getDoc,updateDoc } from "firebase/firestore";

//subtract a product from the cart array in the database firestore
export const subtractFromCart = async (productId) => {
    const cartRef = doc(db,"carts",defaultAuth.currentUser.uid)
    const docSnap = await getDoc(cartRef);
    if (docSnap.data().products !== undefined) {
        const cart = docSnap.data();
        const productIndex = cart.products.findIndex((product) => product.productId === productId);
        if (productIndex !== -1) {
            cart.products[productIndex].quantity -= 1;
            if (cart.products[productIndex].quantity === 0) {
                cart.products.splice(productIndex, 1);
            }
            await updateDoc(cartRef, {
                products: cart.products,
            });
        }
    }
}
