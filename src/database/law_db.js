//firebase
import firebase from "firebase/app";
import firestore from "firebase/firestore";
// load law data
import lawData from "../data/AllLaw_worddb_f.json"


for(let i=0; i<=lawData.Laws.length; i++){
    // initialize Firebase
    if (!firebase.apps.length) {
        // firebase.initializeApp({firebaseConfig});
    }
    firestore.collection("lawData").add(lawData.Laws[i])
    .then(() => {
        return
    })
    .catch((error)=>{
        console.log("ERROR adding document: ", error);
    })
}



