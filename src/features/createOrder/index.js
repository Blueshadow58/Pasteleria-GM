
//create an order from the cart to the database firestore and clear the cart
export const createOrder = (cart,shippingInfo) => {
    const order = {
        cart: cart,
        createAt: new Date(),
        status: "pendiente",
        userId: defaultAuth.currentUser.uid,
        contactPhone: defaultAuth.currentUser.phoneNumber || shippingInfo.phone,
        direction: shippingInfo.direction,
        instructions: shippingInfo.instructions,
    };
    db.collection("orders")
        .add(order)
        .then(() => {
        clearCart();
        })
        .catch((err) => alert(err));
    };
