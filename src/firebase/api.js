import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch } from "react-redux";
import { fetchCart } from "../db";
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

  try {
    const data = [];
    //get data from sqlite
    const fetchData = await fetchCart();
    // validate if cart is empty
    const myCartData = fetchData.rows._array === undefined ? [] : fetchData;    
        
    myCartData.rows._array.map(({productId}) => data.push(productId));
    //get products from array cart doc
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsData = productsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    //filter products from array cart doc
    return productsData.filter(({id}) => data.includes(id));
  } catch (error) {
    console.log(error);
  }
  
   
    
}

export const getMyOrders = async () => {
  const data = [];
  //get data from collection orders firebase firestore
  const ordersCollection = collection(db, "orders");
  const ordersSnapshot = await getDocs(ordersCollection);
  const ordersData = ordersSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  return ordersData
}


//Upload image to firebase storage
export const uploadImageAsync = async (storageRef,uri,fileName) =>{
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const fileRef = ref(storageRef,fileName);
  const result = await uploadBytes(fileRef, blob);
  blob.close();
  return await getDownloadURL(fileRef);
}