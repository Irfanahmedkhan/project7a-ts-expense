import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCmstdc0aWFOJhme6zxWSaMbQrp5jbnqRI",
    authDomain: "expense-tracker-3c646.firebaseapp.com",
    databaseURL: "https://expense-tracker-3c646.firebaseio.com",
    projectId: "expense-tracker-3c646",
    storageBucket: "expense-tracker-3c646.appspot.com",
    messagingSenderId: "279193500809",
    appId: "1:279193500809:web:ff6f36c0ae40e4010e9a58"
}


firebase.initializeApp(config)

export default firebase