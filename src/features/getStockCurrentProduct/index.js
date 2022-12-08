import { doc, getDoc } from "firebase/firestore";
import { db, defaultAuth } from "../../firebase/firebase-config";


//get stock of a product from the cart array in the database firestore
export const getStockCurrentProduct = async (productId) => {
    const cartRef = doc(db,"carts",defaultAuth.currentUser.uid)
    const docSnap = await getDoc(cartRef);
    if (docSnap.data().products !== undefined) {
        const cart = docSnap.data();
        const productIndex = cart.products.findIndex((product) => product.productId === productId);
        if (productIndex !== -1) {
            return cart.products[productIndex].quantity;
        }
    }
    return 0;
}