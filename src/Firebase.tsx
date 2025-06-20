import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAU0S9xyODpzoWxwicpgEx6421Fjiw17ww",
  authDomain: "movie-ticket-booking-39d87.firebaseapp.com",
  projectId: "movie-ticket-booking-39d87",
  storageBucket: "movie-ticket-booking-39d87.firebasestorage.app",
  messagingSenderId: "542753117620",
  appId: "1:542753117620:web:66bcba4bfb0ae6581dcee1",
  measurementId: "G-P09J4KM30Q"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);