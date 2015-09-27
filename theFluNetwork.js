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

 //  $('.select2').select2({
	//   placeholder: "Select a state"
	// });


var locat;
function addToDatabase() {
	var first_name = $('#first_name').val();
	var last_name = $('#last_name').val();
	var email = $('#email').val();
	// var location = $( ".location_select option:selected" ).text();
	// var location = $('.dropdown-content li')[0].attributes.name.value;
	console.log('loc: ' + locat);


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
		  		updateRef = new Firebase(updatedUrl);
		  		updateRef.child('count').set(newCount);
			}
		}
		if (uniqueKey == null) {
			// window.alert("Building does not exist.");
		}

		$('#first_name').val("");
		$('#last_name').val("");
		$('#email').val("");
		// $('#location').val("");
  	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
  	});

  	$('#PageRefresh').click(function() {

    	      location.reload();
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

	//when + button is clicked
	$('.fixed-action-btn').on('click', function(e) {
		$('.button-collapse').sideNav({
	      menuWidth: 350, // Default is 240
	      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    });
		$('.button-collapse').sideNav('show');
	});

	$(document).ready(function(e) {
		console.log($('.button-collapse').menuWidth);
	}) 

	$(".submit").click(function() {
		$('.button-collapse').sideNav('hide');
	});

	$(document).ready(function() {
	    $('select').material_select();
	});
	
 	var arr = [];
    $(document).ready(function() {
    	var options = '';

    	//start ajax request
    	$.ajax({
        	url: "http://m.gatech.edu/w/gtplaces/c/api/buildings",
        	//force to handle it as text
        	dataType: "text",
        	success: function(data) {
            	//data downloaded so we call parseJSON function 
            	//and pass downloaded data
            	//now json variable contains data in json format
            	//let's display a few items

            	var json = JSON.parse(data);
            	for (var i in json) {
            	    arr.push(json[i].name);
            	}
            	arr.sort();
            	for (var i in arr) {
            	    options += '<li class="collection-item" name="' +arr[i] + '">' + arr[i] + '</li>';
            	}
            	options += '</ul>';

            	$('.dropdown-content').html(options);

            	// //get selected list item
            	$('.dropdown-content li').click(function(e) {
            		console.log($(this)[0].attributes.name.value);
            		locat = $(this)[0].attributes.name.value;
            	
            	});

         	}
    	}); //end ajax
        // });
    });






