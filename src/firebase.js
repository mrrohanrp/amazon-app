import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyAnInsF-AIoh31jz06jbp2ElZtXi9TUvks',
  authDomain: 'for-amzn.firebaseapp.com',
  projectId: 'for-amzn',
  storageBucket: 'for-amzn.appspot.com',
  messagingSenderId: '1098393507733',
  appId: '1:1098393507733:web:3672f02b27dcbae466489c'
});

const auth = firebase.auth();

export { auth };
