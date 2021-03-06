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


        db.ref("Train").push({
          Name: Name,
          Destination: Destination,
          First_Train: First_Train,
          Frequency: Frequency,
        });

              // Clears all of the text-boxes
      $("#trainName").val("");
      $("#destination").val("");
      $("#firstTrain").val("");
      $("#frequency").val("");

   });

   db.ref("Train").on('child_added', function (childSnapshot, prevChildKey){
    console.log(childSnapshot.val());

    var trains = childSnapshot.val();

    startTime.push( trains.First_Train);
    tFrequency.push(trains.Frequency);
    console.log(startTime);
    console.log(tFrequency);

    console.log("This is our first train time: " + trains.First_Train);
    let trainStartingTime = moment(trains.First_Train, "HH:mm").subtract(1, "days");
    console.log(trainStartingTime.toString())
    console.log("firstStartTime is " + trainStartingTime);
    let diffTime = moment().diff(moment(trainStartingTime), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % trains.Frequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = trains.Frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    var row = $('<tr>');
    row.append('<td>' + trains.Name + '</td>');
    row.append('<td>' + trains.Destination + '</td>');
    row.append('<td>' + trains.Frequency + '</td>');
    row.append('<td>' + moment(nextTrain).format("hh:mm") + '</td>');
    row.append('<td>' + tMinutesTillTrain + '</td>');
    $('#results').append(row);
    

   });

   var tFrequency = [];
   var startTime = [];
  


});

  



