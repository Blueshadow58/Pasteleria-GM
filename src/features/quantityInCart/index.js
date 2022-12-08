
//get the current quiantity of all the items in the cart
export const getQuantityInCart = (cart) => {
    let quantity = 0;
    cart.forEach((item) => {
        quantity += item.quantity;
    });
    return quantity;
}