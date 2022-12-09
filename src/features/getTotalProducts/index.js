


//get stock of a product from the cart array in the database firestore
export const getTotalProducts = async (cart) => {
    let total = 0;
    if (cart !== undefined) {
        cart.products?.map(({quantity}) => total += quantity);        
        return total;
    }
    return 0;
}

