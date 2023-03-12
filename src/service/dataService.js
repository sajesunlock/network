import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

console.log(db);

/**  const db = firebase.collection("community");

class CommunityDataService {
  getAll() {
    return db;
  }

  create(tutorial) {
    return db.add(tutorial);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new CommunityDataService();
*/
