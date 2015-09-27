var myDataRef = new Firebase('https://the-floo-network.firebaseio.com/');
var severity = 0;
var locat;

$('#severity_slider').change(function(){
	    severity = (this.value);
	});

//add to database

function addToDatabase() {

	// console.log(severity);

	// console.log('loc: ' + locat);

	var buildingData;
	var newCount = 0;
	
	var uniqueKey;
	var updatedUrl;
	var updateRef;

	myDataRef.once("value", function(snapshot) {
		var data = snapshot.val();
		for (var i in data) {
			var buildingData = data[i];
			if (locat === buildingData['name']) {
				uniqueKey = i;
				newCount = buildingData['count'] + 1;
				updatedUrl = 'https://the-floo-network.firebaseio.com/' + uniqueKey; 
		  		updateRef = new Firebase(updatedUrl);
		  		updateRef.child('count').set(newCount);
		  		updateRef.child('severity').set(severity);
			}
		}
		if (uniqueKey == null) {
			// window.alert("Building does not exist.");
		}
		$('.location_select').val('Select a Building');
		var sum = document.getElementById("summary");
		sum.className = sum.className + "active";
		var rep = document.getElementById("report");
		rep.className ="";
		
		window.location="#test1";
		// $('#summary').addClass('active');
		console.log($('#summary'));

  	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
  	});

  	$('#PageRefresh').click(function() {

    	location.reload();
    });
}
	//get building dropdowns
	var arr = [];
    $(document).ready(function() {
    	console.log('buildings');
    	var options = '<select class="browser-default location_select"><option value="" disabled selected>Select a Building</option>';

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
            	    options += '<option value="i"' + '">' + arr[i] + '</option>';
            	}
            	options += '</select>';
            	// console.log(options);

            	$('.location-content').html(options);

            	// //get selected list item
            	$('.location_select').change(function() {
            		console.log($('.location_select option:selected').text());
            		locat = $('.location_select option:selected').text();
            	});
            	

         	}
    	}); //end ajax
    });


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.7764116, lng: -84.3985951},
    zoom: 16,
  });

  // Multiple Markers
  var mymarkers = [
		["Howell Residence Hall", 33.7721, -84.3909],
		["Crosland Tower", 33.7742, -84.3953],
		["Georgia Tech Alumni House", 33.7713, -84.3939],
		["Montgomery-Knight Building", 33.7719, -84.396],
		["Boggs Building", 33.7757, -84.3999],
		["Wenn Student Center", 33.774, -84.3988],
		["Commander Building", 33.7789, -84.4039],
		["Fulmer Residence Hall", 33.7789, -84.4039],
		["Hefner Residence Hall", 33.7792, -84.4039],
		["Armstrong Residence Hall", 33.7792, -84.4036],
		["Caldwell Residence Hall", 33.7789, -84.4044],
		["Harris Residence Hall", 33.7721, -84.3918],
		["Folk Residence Hall", 33.779, -84.4048],
		["Mason Civil Engineering Building", 33.7766, -84.3984],
		["Central Receiving-Property Control", 33.7788, -84.4024],
		["Stamps Student Center Commons", 33.7737, -84.3982],
		["Couch Building", 33.7782, -84.4044],
		["Woodruff Residence Hall", 33.7792, -84.4064],
		["Freemen Residence Hall", 33.7775, -84.4039],
		["Montag Residence Hall", 33.7779, -84.4039],
		["Fitten Residence Hall", 33.7782, -84.4038],
		["Brittain Dining Hall", 33.7724, -84.3914],
		["Alpha Phi Omega", 33.7787, -84.4004],
		["Campus Recreation Center", 33.7755, -84.4032],
		["Smithgall Student Services Building", 33.7743, -84.3995],
		["Ferst Center for the Arts", 33.7748, -84.3992],
		["Southern Regional Education Board", 33.7812, -84.4065],
		["Manufacturing Research Center - (MARC)", 33.7776, -84.4014],
		["Fiber Optic Network Building", 33.7793, -84.3971],
		["Center for Assistive Technology and Environmental Access", 33.7813, -84.4033],
		["Institute of Paper Science and Technology", 33.781, -84.4045],
		["Cloudman Residence Hall", 33.7727, -84.3917],
		["8th St Apartments", 33.7801, -84.4051],
		["Hemphill Avenue Apartments", 33.7799, -84.4032],
		["Center Street Apartments", 33.7798, -84.4018],
		["Jack C. Stein House (Fourth St)", 33.7749, -84.3916],
		["Manufacturing Related Disciplines Complex - (MRDC)", 33.777, -84.4005],
		["GTRI (Callaway Building)", 33.771, -84.4027],
		["Ivan Allen College (Habersham)", 33.7739, -84.4044],
		["Office of Information Technology", 33.7748, -84.4055],
		["Harrison Residence Hall", 33.7728, -84.3909],
		["Aquatic Center", 33.7757, -84.4041],
		["Office of Human Resources", 33.7733, -84.4026],
		["J. Erskine Love Manufacturing Building", 33.7766, -84.4018],
		["Lamar Allen Sustainable Education Building", 33.7762, -84.3989],
		["Parker H. Petit Biotechnology Building (IBB)", 33.7786, -84.3973],
		["Ford Motor Company Environmental Science and Technology (ES&T)", 33.7789, -84.396],
		["Structural Engineering and Materials Research", 33.7708, -84.4031],
		["Towers Residence Hall", 33.7734, -84.3911],
		["Aerospace Engineering Combustion Lab", 33.7704, -84.4025],
		["Broadband Institute Residential Laboratory, Aware Home", 33.7817, -84.4029],
		["Christopher W. Klaus Advanced Computing Building", 33.7773, -84.3962],
		["Engineer's Bookstore", 33.773, -84.4034],
		["Research Administration", 33.7817, -84.4039],
		["Office of Information Technology (OIT)", 33.7759, -84.4064],
		["Advanced Wood Products", 33.7717, -84.4014],
		["Food Processing Technology Research", 33.7705, -84.4034],
		["Glenn Residence Hall", 33.7734, -84.3916],
		["Campus Recreation Center", 33.7758, -84.4041],
		["Marcus Nanotechnology Building", 33.7788, -84.3986],
		["Business Services", 33.7728, -84.4015],
		["UA Whitaker Building", 33.7785, -84.3967],
		["Clough Undergraduate Learning Commons ", 33.7745, -84.3964],
		["Molecular Science and Engineering (MoSE or MSE)", 33.7798, -84.3967],
		["Bobby Dodd Stadium", 33.7725, -84.3928],
		["Global Learning & Conference Center", 33.7764, -84.39],
		["Georgia Tech Hotel and Conference Center", 33.7765, -84.3891],
		["College of Management and Barnes & Noble Bookstore", 33.7763, -84.3883],
		["Economic Development Building (EDB)", 33.7755, -84.389],
		["Technology Square Research Building", 33.7773, -84.3901],
		["Centergy One", 33.7771, -84.3891],
		["Student Health Center", 33.7746, -84.4031],
		["Health Systems Institute", 33.7773, -84.3877],
		["Georgia Tech Yellow Jacket Ticketing Office", 33.7738, -84.3925],
		["J.C. Shaw Sports Complex; Athletic Association", 33.7737, -84.3923],
		["Edge Athletic Center", 33.7738, -84.3925],
		["Family Apartments", 33.7821, -84.395],
		["Marcus Nanotechnology", 33.7787, -84.3986],
		["Rice Center for Sports Performance", 33.7737, -84.3923],
		["North Avenue East", 33.7695, -84.391],
		["North Avenue North", 33.771, -84.3912],
		["North Avenue South", 33.7691, -84.3916],
		["North Avenue West", 33.7707, -84.3919],
		["Academy of Medicine", 33.7783, -84.3867],
		["Skiles Classroom Building", 33.7736, -84.3963],
		["Brock, Mary R. & John F. Football Practice Facility\r\n", 33.7782, -84.3956],
		["Challenge Course Pavilion", 33.7785, -84.402],
		["Daniel Laboratory", 33.7737, -84.394],
		["Army Office", 33.7736, -84.3945],
		["Army Armory", 33.7736, -84.3945],
		["Smith Building", 33.7737, -84.3952],
		["Chapin Building", 33.7733, -84.3953],
		["Holland Building", 33.7733, -84.3946],
		["Lyman Hall Building", 33.7729, -84.3942],
		["W.H.Emerson Building", 33.7729, -84.3942],
		["Alumni House", 33.7711, -84.3936],
		["A. French Building", 33.7729, -84.3946],
		["Alpha Epsilon Pi", 33.7741, -84.3923],
		["Alpha Tau Omega", 33.7762, -84.3941],
		["Beta Theta Pi", 33.7755, -84.3943],
		["Chi Phi", 33.7744, -84.394],
		["Chi Psi", 33.7752, -84.3925],
		["Delta Sigma Phi", 33.7757, -84.3924],
		["Delta Tau Delta", 33.7759, -84.3948],
		["Delta Upsilon", 33.7767, -84.3923],
		["Bill Moore Student Success Center", 33.7725, -84.394],
		["Kappa Alpha", 33.7765, -84.3918],
		["Kappa Sigma", 33.7779, -84.3933],
		["Lambda Chi Alpha", 33.7763, -84.3922],
		["Phi Delta Theta", 33.7746, -84.3941],
		["Phi Gamma Delta", 33.7776, -84.3933],
		["Phi Kappa Sigma", 33.7761, -84.3918],
		["Phi Kappa Tau", 33.7758, -84.3926],
		["Phi Kappa Theta", 33.7767, -84.3938],
		["Phi Mu Sorority", 33.7769, -84.3949],
		["Phi Sigma Kappa", 33.7771, -84.3919],
		["Facilities", 33.7799, -84.3931],
		["Pi Kappa Alpha", 33.7767, -84.3952],
		["Psi Upsilon", 33.7775, -84.3918],
		["Alpha Xi Delta", 33.7779, -84.3918],
		["Sigma Alpha Epsilon", 33.776, -84.3945],
		["Sigma Chi", 33.7756, -84.3922],
		["Sigma Nu", 33.7751, -84.3942],
		["Sigma Phi Epsilon", 33.7767, -84.3934],
		["Tau Kappa Epsilon", 33.7771, -84.3924],
		["Theta Chi", 33.7776, -84.3924],
		["Theta Xi", 33.7758, -84.3917],
		["O'Keefe Main Building", 33.7789, -84.3922],
		["Zeta Beta Tau", 33.7779, -84.3925],
		["Alpha Chi Omega", 33.7749, -84.3929],
		["Christian Campus Fellowship", 33.7756, -84.3917],
		["Alpha Gamma Delta", 33.7771, -84.3929],
		["Alpha Delta Pi", 33.7745, -84.3928],
		["Delta Chi", 33.7767, -84.3928],
		["Pi Kappa Phi", 33.7767, -84.3943],
		["Alpha Delta Chi", 33.7754, -84.3927],
		["Zeta Tau Alpha", 33.7772, -84.3934],
		["Baptist Student Union", 33.7748, -84.3922],
		["O'Keefe Gym", 33.7794, -84.3916],
		["Custodial Services Building", 33.7793, -84.3925],
		["Catholic Center", 33.7755, -84.393],
		["Griffin Track", 33.7797, -84.3947],
		["Lutheran Center", 33.7767, -84.3931],
		["Wesley Foundation\/Methodist Center", 33.7761, -84.3933],
		["Vernon D. and Helen D. Crawford Pool", 33.7751, -84.4039],
		["Westminster Christian Fellowship", 33.7746, -84.3922],
		["Rose Bowl Field", 33.7784, -84.3948],
		["SAC Fields", 33.7768, -84.4037],
		["Alumni Park", 33.7768, -84.4049],
		["Administration Building", 33.7724, -84.3948],
		["Tech Tower Lawn", 33.7718, -84.3944],
		["Harrison Square", 33.7728, -84.3952],
		["Carnegie Building", 33.7724, -84.3943],
		["Savant Building", 33.7721, -84.3953],
		["Swann Building", 33.7717, -84.3954],
		["Guggenheim Building", 33.7716, -84.3958],
		["Engineering Science and Mechanics (ESM) Building", 33.772, -84.3957],
		["Coon Building", 33.7725, -84.3958],
		["Beringause Building", 33.779, -84.4013],
		["Wardlaw Center", 33.7716, -84.3928],
		["Mechanical Engineering Research Building", 33.773, -84.3962],
		["College of Computing", 33.7774, -84.3974],
		["Hinman Research Building", 33.7747, -84.3953],
		["Rich Building", 33.7752, -84.395],
		["Graduate Living Center", 33.782, -84.3966],
		["Instructional Center - (IC)", 33.7755, -84.4014],
		["Groseclose Building", 33.7758, -84.4019],
		["School of Industrial and Systems Engineering", 33.7752, -84.4019],
		["Old CE", 33.7741, -84.3947],
		["Navy ROTC Armory", 33.7741, -84.3941],
		["Smith Residence Hall", 33.7717, -84.3913],
		["Building Construction and Center for GIS (Arch Annex)", 33.7767, -84.3969],
		["GTRI research", 33.7811, -84.4015],
		["Undergraduate Living Center - (ULC)", 33.7781, -84.4055],
		["Maulding Residence Hall (6th St E Apartments)", 33.777, -84.4056],
		["Cherry Emerson Building", 33.7779, -84.3972],
		["Chandler Stadium", 33.7784, -84.3948],
		["Brown Residence Hall", 33.7717, -84.3919],
		["Tenth&Home", 33.7818, -84.3954],
		["Presidents House", 33.7814, -84.3963],
		["Paul Heffernan House", 33.7767, -84.3926],
		["Alexander Memorial Coliseum", 33.7807, -84.3928],
		["Georgia Tech Water Sports", 33.7814, -84.3985],
		["Luck Building", 33.7803, -84.3922],
		["Facilities", 33.7799, -84.3927],
		["Junior's Grill", 33.7727, -84.3944],
		["College of Architecture-West Wing", 33.7761, -84.3961],
		["College of Architecture", 33.776, -84.3955],
		["Library and Information Center", 33.7744, -84.3958],
		["Centennial Research Building", 33.7811, -84.4004],
		["R. Kirk Landon Learning Center", 33.7825, -84.4003],
		["Bill Moore Tennis Center", 33.7804, -84.3942],
		["Howey-Physics Building and Observatory", 33.7775, -84.3983],
		["King Facilities Building", 33.7804, -84.3961],
		["Weber Space Science and Technology Building I - (SST)", 33.7728, -84.3967],
		["Van Leer EE\/CmpE Building", 33.7757, -84.3974],
		["CEISMC", 33.7782, -84.3877],
		["Bunger-Henry Building", 33.7757, -84.3982],
		["EII 512 Means St", 33.7727, -84.4044],
		["Neely Nuclear Research Center", 33.7796, -84.398],
		["Athletic Association Conference Room", 33.7735, -84.3936],
		["Field Residence Hall", 33.7742, -84.3917],
		["Matheson Residence Hall", 33.7745, -84.3916],
		["Perry Residence Hall", 33.7745, -84.3911],
		["Hanson Residence Hall", 33.7742, -84.391],
		["Hopkins Residence Hall", 33.7741, -84.3913],
		["Pettit Microelectronics Research Center (MIRC)", 33.7766, -84.3974],
		["Ajax Building", 33.7793, -84.4017],
		["Weber Space Science and Technology Building II - (SST)", 33.7727, -84.3963]
  ];

 //  var iconBase = 'http://maps.google.com/mapfiles/ms/icons/';
	// var icons = {
	//   None: {
	//     icon: iconBase + 'green-dot.png'
	//   },
	//   Low: {
	//     icon: iconBase + 'yellow-dot.png'
	//   },
	//   Medium: {
	//     icon: iconBase + 'orange-dot.png'
	//   },
	//   High: {
	//   	icon: iconBase + 'red-dot.png'
	//   }
	// };

	// function addMarker(feature) {
	//   var marker = new google.maps.Marker({
	//     position: feature.position,
	//     icon: icons[feature.type].icon,
	//     map: map
	//   });
	// }

	// var legend = document.getElementById('legend');
	// for (var i in icons) {
	//   var name = i.name;
	//   var icon = i.icon;
	//   var div = document.createElement('div');
	//   div.innerHTML = '<img src="' + icon + '"> ' + name;
	//   legend.appendChild(div);
	// }

	// Create the legend and display on the map
  var legendDiv = document.createElement('DIV');
  var legend = new Legend(legendDiv, map);
  legendDiv.index = 1;
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legendDiv);

  setMarkers(map, mymarkers);

}


function setMarkers(map, locations) {
	var infowindow = new google.maps.InfoWindow();
	for (var i = 0; i < locations.length; i++) {  

		var building = locations[i][0], latitude = locations[i][1], longitude = locations[i][2];

		latlngset = new google.maps.LatLng(latitude, longitude);

		// Code for generating color of pins
		var indicator = Math.random() * 100;
    var randomized;

    if (indicator < 25) randomized = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
    else if (indicator < 50) randomized = 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png';
    else if (indicator < 75) randomized = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
    else randomized = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';

	  var marker = new google.maps.Marker({ 
	  	map: map, 
	  	title: building, 
	  	position: latlngset,
	  	icon: randomized 
	  });

		var content = building +'</h3>';  

		google.maps.event.addListener(marker,'click', (function(marker, content, infowindow){ 
			return function() {
				infowindow.setContent(content);
				infowindow.open(map,marker);
			};
		})(marker, content, infowindow)); 

	}
}


function Legend(controlDiv, map) {
  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map
  controlDiv.style.padding = '5px';

  // Set CSS for the control border
  var controlUI = document.createElement('DIV');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'solid';
  controlUI.style.borderWidth = '1px';
  controlUI.title = 'Legend';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control text
  var controlText = document.createElement('DIV');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';
  
  // Add the text
  controlText.innerHTML = '<b>Risk Level</b><br />' +
  	'<img src="http://maps.google.com/mapfiles/ms/micons/green-dot.png" /> None<br />' +
  	'<img src="http://maps.google.com/mapfiles/ms/micons/yellow-dot.png" /> Low<br />' +
  	'<img src="http://maps.google.com/mapfiles/ms/micons/orange-dot.png" /> Medium<br />' +
  	'<img src="http://maps.google.com/mapfiles/ms/micons/red-dot.png" /> High<br />';
  controlUI.appendChild(controlText);
}