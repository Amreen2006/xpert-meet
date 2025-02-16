import firebase from 'firebase/compat/app';
import 'firebase/compat/database';



firebase.initializeApp(firebaseConfig);
export const db = firebase;
var firepadRef = firebase.database().ref();

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
}

export default firepadRef;
