// var myDataRef = new Firebase('https://the-flu-network.firebaseio.com/');

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
// 		myDataRef.push({name: buildingName, text: location});
// 	}

//   };
//   reader.readAsText(file);
// };

