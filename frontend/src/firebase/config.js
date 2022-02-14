import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJVRm9ZTMEYji2R3oEpwC47zghFd6svsc",
  authDomain: "lexagram-582e6.firebaseapp.com",
  projectId: "lexagram-582e6",
  storageBucket: "lexagram-582e6.appspot.com",
  messagingSenderId: "551803194248",
  appId: "1:551803194248:web:032c171c0f666d926fc83d",
  measurementId: "G-RVV1NM8TLY",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
