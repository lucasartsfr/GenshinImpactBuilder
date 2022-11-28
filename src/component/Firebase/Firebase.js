import app from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {doc, getDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDO8_B_S76YINAhyfiXdv5-pBVJCMhKwBY",
  authDomain: "genshinbuilder-e0450.firebaseapp.com",
  projectId: "genshinbuilder-e0450",
  storageBucket: "genshinbuilder-e0450.appspot.com",
  messagingSenderId: "136185061376",
  appId: "1:136185061376:web:906010be2f180f6d97b8e5",
  measurementId: "G-KM7CTH0M43"
};

class Firebase {

    constructor(){
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.db = app.firestore();
    }
    // Get DB Info
    getDB = (string) => this.db.collection(string);

}

export default Firebase;