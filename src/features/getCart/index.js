import { doc, getDoc } from "firebase/firestore";
import { db, defaultAuth } from "../../firebase/firebase-config";

export const getCart = async () => {
    const cartRef = doc(db,"carts",defaultAuth.currentUser.uid)
    const docSnap = await getDoc(cartRef);   
    return docSnap.data();
}