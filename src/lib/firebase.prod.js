import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from "../seed";

//seed the database


//config

const config = {   apiKey: "AIzaSyAXr99MdT6Dhw_qhmZT0qs3Ss4m7pdzy0Q",
authDomain: "netflix-clone-f4c9b.firebaseapp.com",
projectId: "netflix-clone-f4c9b",
storageBucket: "netflix-clone-f4c9b.appspot.com",
messagingSenderId: "491378985341",
appId: "1:491378985341:web:0b929db5d09d0b452fa414",
measurementId: "G-XCF6DGY62H"};

const firebase = Firebase.initializeApp(config);


export { firebase };