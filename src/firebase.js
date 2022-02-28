import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAnInsF-AIoh31jz06jbp2ElZtXi9TUvks',
  authDomain: 'for-amzn.firebaseapp.com',
  projectId: 'for-amzn',
  storageBucket: 'for-amzn.appspot.com',
  messagingSenderId: '1098393507733',
  appId: '1:1098393507733:web:3672f02b27dcbae466489c'
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
