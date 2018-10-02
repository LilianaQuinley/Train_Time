$(document).ready(function () {
  
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


// Create a variable to reference the database
// var database = ...

    var db = firebase.database();

    

    console.log(db);

    // // This callback keeps the page updated when a value changes in firebase.
    db.ref("Train").on("value",function (snapshot){
      console.log("Everything back?")
      console.log(snapshot.val());
      // if (snapshot.child("Name").exist() && 
      // snapshot.child("Destination").exist() && 
      // snapshot.child ("First_Train").exist() && 
      // snapshot.child("Frequency")){
      //   Name = snapshot.val().Name;
      //   Destination = snapshot.val().Destination;
      //   First_Train = parseInt (snapshot.val().First_Train);
      //   Frequency = parseInt(snapshot.val().Frequency);
      // }
        
    });
    // // We are now inside our .on function...

    // // Change the HTML using jQuery to reflect the updated clickCounter value
      $("#submit-btn").on("click",function () {
        event.preventDefault();
        console.log("you click it");

        var Name = $("#trainName").val().trim();
        var Destination = $("#destination").val().trim();
        var First_Train = $("#firstTrain").val().trim();
        var Frequency = $("#frequency").val().trim();

        console.log(Name);
        console.log(Destination);
        console.log(First_Train);
        console.log(Frequency);

        db.ref("Train").push({
          Name: Name,
          Destination: Destination,
          First_Train: First_Train,
          Frequency: Frequency,
        });

   });

   
   


});



// db.ref("Train").push({
//   Name: "Peter the Great Train",
//   Destination: "St Petersburg, Russia",
//   First_Train: "21:00",
//   Frequency: 270,
// });
// db.ref("Train").push({
//   Name: "Versailles Train",
//   Destination: "Versailles, France",
//   First_Train: "18:50",
//   Frequency: 450,
// });
// db.ref("Train").push({
//   Name: "Sistine Chapel",
//   Destination: "Vatican City, Rome",
//   First_Train: "03:30",
//   Frequency: 540,
// });
// db.ref("Train").push({
//   Name: "Notre Dame Train",
//   Destination: "Paris, France",
//   First_Train: "10:40",
//   Frequency: 210,
// });
// db.ref("Train").push({
//   Name: "The Colosseum Train",
//   Destination: "Roma, Italy",
//   First_Train: "21:00",
//   Frequency: 210,
// });
// db.ref("Train").push({
//   Name: "The Vatican St Peter's Train",
//   Destination: "Vatican City, Rome",
//   First_Train: "15:45",
//   Frequency: 540,
// });
// db.ref("Train").push({
//   Name: "Hagia Sophia Train",
//   Destination: "Istanbul, Turkey",
//   First_Train: "08:15",
//   Frequency: 360,
// });
// db.ref("Train").push({
//   Name: "Santorini Train",
//   Destination: "Santorini, Greece",
//   First_Train: "17:15",
//   Frequency: 500,
// });




