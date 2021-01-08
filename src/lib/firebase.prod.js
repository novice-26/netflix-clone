import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from "../seed";

//seed the database


//config



const firebase = Firebase.initializeApp(config);


export { firebase };