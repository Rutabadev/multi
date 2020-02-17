import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDcEqFaxz969Ve5inMbfRI7qodcZPD6hVo',
    authDomain: 'form-79a24.firebaseapp.com',
    databaseURL: 'https://form-79a24.firebaseio.com',
    projectId: 'form-79a24',
    storageBucket: 'form-79a24.appspot.com',
    messagingSenderId: '201666686554'
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
