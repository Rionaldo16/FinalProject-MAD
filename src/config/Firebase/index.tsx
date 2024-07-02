// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWDvylEfj0J-iTgi-VuPa63W3oV7rI5oI',
  authDomain: 'projectfinal-1614f.firebaseapp.com',
  databaseURL: 'https://projectfinal-1614f-default-rtdb.firebaseio.com',
  projectId: 'projectfinal-1614f',
  storageBucket: 'projectfinal-1614f.appspot.com',
  messagingSenderId: '558068501973',
  appId: '1:558068501973:web:9a0d9acd13ca916d87415c',
  databaseURL: 'https://projectfinal-1614f-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
