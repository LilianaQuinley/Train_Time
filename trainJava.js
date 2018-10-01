

// Initialize Firebase

  var config = {
    apiKey: "AIzaSyC-7FhNJp31ge23U7Caqg4NZ_Z5PJ14Evc",
    authDomain: "train-time-a55b7.firebaseapp.com",
    databaseURL: "https://train-time-a55b7.firebaseio.com",
    projectId: "train-time-a55b7",
    storageBucket: "train-time-a55b7.appspot.com",
    messagingSenderId: "558197287763"
  };
  firebase.initializeApp(config);



// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)

// Create a variable to reference the database
// var database = ...

var database = firebase.database();

   database.ref().set({
        name: name,
   })
   
console.log(database);

// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
// database.ref().on("value", function(snapshot)) {}

// database.ref().on("value", function(snapshot){
//   console.log(snapshot.val());
// })

// We are now inside our .on function...

// Console.log the "snapshot" value (a point-in-time representation of the database)
// This "snapshot" allows the page to get the most current values in firebase.


// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________

// Console Log the value of the clickCounter

// Change the HTML using jQuery to reflect the updated clickCounter value
  $("#click-button").on("click",function () {

  } )

// Then include Firebase error logging
// HINT: }, function(errorObject)


// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase


  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);


});


