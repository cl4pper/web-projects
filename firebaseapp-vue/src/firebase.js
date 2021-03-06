import Firebase from 'firebase';

// const app = initializeApp({
//   apiKey: "AIzaSyD6SNXF5ehqg_OZ-GfmVDUSyt0ItqzvMfI",
//   authDomain: "test-vue-84656.fireb aseapp.com",
//   databaseURL: "https://test-vue-84656.firebaseio.com",
//   projectId: "test-vue-84656",
//   storageBucket: "",
//   messagingSenderId: "797479608538"
// });

const app = Firebase.initializeApp({
  apiKey: "AIzaSyD6SNXF5ehqg_OZ-GfmVDUSyt0ItqzvMfI",
  authDomain: "test-vue-84656.firebaseapp.com",
  databaseURL: "https://test-vue-84656.firebaseio.com",
  projectId: "test-vue-84656",
  storageBucket: "test-vue-84656.appspot.com",
  messagingSenderId: "797479608538"
});

export const db = app.database();
export const namesRef = db.ref('names');
