// var myDataRef = new Firebase('https://the-flu-network.firebaseio.com/');
var myDataRef = new Firebase('https://brih6mr7egw.firebaseio-demo.com/');
// document.getElementById('gtbuildings').onchange = function(){

//   var file = this.files[0];

//   var reader = new FileReader();
//   reader.onload = function(progressEvent){
//     // Entire file
//     // console.log(this.result);

//     // By lines
//     // var lines = this.result.split('},{');

//     var buildingArray = JSON.parse(this.result);
// 	for (var i=0; i < buildingArray.length; i++) {
// 		var buildingName = buildingArray[i]["name"];
// 		var latitude = buildingArray[i]["latitude"];
// 		var longitude = buildingArray[i]["longitude"];
// 		var location = latitude + ", " + longitude;
// 		// console.log(buildingName + ", " + latitude + ", " + longitude);
// 		myDataRef.push({name: buildingName, location: location, count: 0});
// 	}

//   };
//   reader.readAsText(file);
// };

// Initialize collapse button
  // $(".button-collapse").sideNav();

function addToDatabase() {
	var first_name = $('#first_name').val();
	var last_name = $('#last_name').val();
	var email = $('#email').val();
	var location = $('#location').val();


	var buildingData;
	var newCount = 0;
	var uniqueKey;
	var updatedUrl;
	var updateRef;

	myDataRef.once("value", function(snapshot) {
		var data = snapshot.val();
		for (var i in data) {
			var buildingData = data[i];
			if (location === buildingData['name']) {
				uniqueKey = i;
				newCount = buildingData['count'] + 1;
				updatedUrl = 'https://brih6mr7egw.firebaseio-demo.com/' + uniqueKey; 
				console.log(newCount);
		  		updateRef = new Firebase(updatedUrl);
		  		updateRef.child('count').set(newCount);
			}
		}
		if (uniqueKey == null) {
			window.alert("Building does not exist.");
		}
  	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
  	});
}

	

	// function showSideNav() {
	// 	$('.button-collapse').sideNav({
	//       menuWidth: 400, // Default is 240
	//       closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	//     });

 //   		// $('.collapsible').collapsible();
	// 	$('.button-collapse').sideNav('show');
	// 	console.log($('.button-collapse'));
	// 	$('.button-collapse').onclick()
	// }

	$('.fixed-action-btn').on('click', function(e) {
		$('.button-collapse').sideNav({
	      menuWidth: 350, // Default is 240
	      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    });
		$('.button-collapse').sideNav('show');
		console.log('do');
	});

	$(document).ready(function(e) {
		console.log($('.button-collapse').menuWidth);
	}) 
	









