// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDjT2bzG5zB-EyyCX3rOtwHfhcoXecSHLc",
	authDomain: "final-2fdbe.firebaseapp.com",
	databaseURL: "https://final-2fdbe-default-rtdb.firebaseio.com",
	projectId: "final-2fdbe",
	storageBucket: "final-2fdbe.appspot.com",
	messagingSenderId: "243898793976",
	appId: "1:243898793976:web:34b9fe86d3caa3ce84e00d",
	measurementId: "G-BLHDRQ6DTY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


	// handle on firebase db
	var db = firebase.firestore();

	// get elements
	const first = document.getElementById('first');
	const last  = document.getElementById('last');
	const dob   = document.getElementById('dob');
	const write	= document.getElementById('write');
	const read	= document.getElementById('read');
	const status = document.getElementById('status');

	// write to 
	write.addEventListener('click', e => {
		status.innerHTML = '';		
		db.collection("users").add({
		    first: first.value,
		    last: last.value,
		    born: dob.value
		})
		.then(function(docRef) {
		    console.log("Document written with ID: ", docRef.id);
		    status.innerHTML += `Document written with ID: ${docRef.id}`;
		})
		.catch(function(error) {
		    console.error("Error adding document: ", error);
		});
	});

	// read event
	read.addEventListener('click', e => {
		status.innerHTML = '';
		db.collection("users").get().then((querySnapshot) => {
		    querySnapshot.forEach((doc) => {
		        console.log(`${doc.id} => ${doc.data()}`);
		        status.innerHTML += `${JSON.stringify(doc.data())}<br>`;
		    });
		});
	});

