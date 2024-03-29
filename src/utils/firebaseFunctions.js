import { data } from "autoprefixer";
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving the Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, { merge: true });
};

//Get all Food Items
export const getAllFoodItems = async () => {
  const items = await getDocs(query(collection(firestore, "foodItems"), orderBy("id", "desc")));
  return items.docs.map((doc) => doc.data());
};
