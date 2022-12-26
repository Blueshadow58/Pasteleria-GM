import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { db, defaultAuth } from "./firebase-config";

// get item from firebase firestore
export const getProducts = async () => {
  const data = [];
  const productsCollection = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollection);
  productsSnapshot.docs.map((doc) => data.push({id: doc.id, ...doc.data()}));
  return data;
}

// get ids from array cart doc
export const getMyCart = async () => {
    const data = [];
    //get ids from array cart doc
    const myCartDoc = doc(db, "carts", defaultAuth.currentUser.uid);
    const myCartSnapshot = await getDoc(myCartDoc).then((doc) => {
      if (doc.exists()) {
        return doc.data();
      }else {
        return [];
      }
    });
    const myCartData = myCartSnapshot.products;

    // validate if cart is empty
    if (myCartData === undefined) {
      return [];
    }  

    myCartData.map(({productId}) => data.push(productId));
    //get products from array cart doc
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsData = productsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    //filter products from array cart doc
    return productsData.filter(({id}) => data.includes(id));
  
  
}


export const getMyOrders = async () => {
  const data = [];
  //get data from collection orders firebase firestore
  const ordersCollection = collection(db, "orders");
  const ordersSnapshot = await getDocs(ordersCollection);
  const ordersData = ordersSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  return ordersData

}


