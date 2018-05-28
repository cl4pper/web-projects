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
    apiKey: "AIzaSyDgc_vweBfaPo6d_hZhu2f3KoJhQSHzNy8",
    authDomain: "news-seek.firebaseapp.com",
    databaseURL: "https://news-seek.firebaseio.com",
    projectId: "news-seek",
    storageBucket: "",
    messagingSenderId: "136357328599"
});

export const db = app.database();
export const newsRef = db.ref('news');
