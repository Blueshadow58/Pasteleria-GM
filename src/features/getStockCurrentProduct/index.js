import { doc, getDoc } from "firebase/firestore";
import { fetchCartById } from "../../db";
import { db, defaultAuth } from "../../firebase/firebase-config";


//get stock of a product from the cart array in the database firestore
export const getStockCurrentProduct = async (productId,cart) => {
    
    if (cart.length === 0) {
        return 0;
    }

    //get stock of the product from the cart array by the id of the product
    fetchCartById(productId).then((response) => {
        // console.log(response.rows._array[0].quantity)
        // return response.rows._array[0].quantity
        return response.rows._array[0].quantity
    })
        
        
      
    // console.log(product)

    // if (product) {
    //     return product.quantity;
    // }
    // return 0;

    // const productIndex = cart.products.findIndex((product) => product.productId === productId);
    //     if (productIndex !== -1) {
    //         return cart.products[productIndex].quantity;
    //     }
    // return 0;
}