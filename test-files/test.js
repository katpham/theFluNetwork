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

  var infoWindowContent = [
		['<div class="info_content">' + '<h3>Howell Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Crosland Tower</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Georgia Tech Alumni House</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Montgomery-Knight Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Boggs Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Wenn Student Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Commander Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Fulmer Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Hefner Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Armstrong Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Caldwell Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Harris Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Folk Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Mason Civil Engineering Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Central Receiving-Property Control</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Stamps Student Center Commons</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Couch Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Woodruff Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Freemen Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Montag Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Fitten Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Brittain Dining Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alpha Phi Omega</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Campus Recreation Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Smithgall Student Services Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Ferst Center for the Arts</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Southern Regional Education Board</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Manufacturing Research Center - (MARC)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Fiber Optic Network Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Center for Assistive Technology and Environmental Access</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Institute of Paper Science and Technology</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Cloudman Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>8th St Apartments</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Hemphill Avenue Apartments</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Center Street Apartments</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Jack C. Stein House (Fourth St)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Manufacturing Related Disciplines Complex - (MRDC)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>GTRI (Callaway Building)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Ivan Allen College (Habersham)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Office of Information Technology</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Harrison Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Aquatic Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Office of Human Resources</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>J. Erskine Love Manufacturing Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Lamar Allen Sustainable Education Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Parker H. Petit Biotechnology Building (IBB)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Ford Motor Company Environmental Science and Technology (ES&T)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Structural Engineering and Materials Research</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Towers Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Aerospace Engineering Combustion Lab</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Broadband Institute Residential Laboratory, Aware Home</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Christopher W. Klaus Advanced Computing Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Engineer\'s Bookstore</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Research Administration</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Office of Information Technology (OIT)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Advanced Wood Products</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Food Processing Technology Research</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Glenn Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Campus Recreation Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Marcus Nanotechnology Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Business Services</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>UA Whitaker Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Clough Undergraduate Learning Commons </h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Molecular Science and Engineering (MoSE or MSE)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Bobby Dodd Stadium</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Global Learning & Conference Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Georgia Tech Hotel and Conference Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>College of Management and Barnes & Noble Bookstore</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Economic Development Building (EDB)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Technology Square Research Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Centergy One</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Student Health Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Health Systems Institute</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Georgia Tech Yellow Jacket Ticketing Office</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>J.C. Shaw Sports Complex; Athletic Association</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Edge Athletic Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Family Apartments</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Marcus Nanotechnology</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Rice Center for Sports Performance</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>North Avenue East</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>North Avenue North</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>North Avenue South</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>North Avenue West</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Academy of Medicine</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Skiles Classroom Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Brock, Mary R. & John F. Football Practice Facility\r\n</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Challenge Course Pavilion</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Daniel Laboratory</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Army Office</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Army Armory</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Smith Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Chapin Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Holland Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Lyman Hall Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>W.H.Emerson Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alumni House</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>A. French Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alpha Epsilon Pi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alpha Tau Omega</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Beta Theta Pi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Chi Phi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Chi Psi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Delta Sigma Phi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Delta Tau Delta</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Delta Upsilon</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Bill Moore Student Success Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Kappa Alpha</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Kappa Sigma</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Lambda Chi Alpha</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Phi Delta Theta</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Phi Gamma Delta</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Phi Kappa Sigma</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Phi Kappa Tau</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Phi Kappa Theta</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Phi Mu Sorority</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Phi Sigma Kappa</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Facilities</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Pi Kappa Alpha</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Psi Upsilon</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alpha Xi Delta</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Sigma Alpha Epsilon</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Sigma Chi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Sigma Nu</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Sigma Phi Epsilon</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Tau Kappa Epsilon</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Theta Chi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Theta Xi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>O\'Keefe Main Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Zeta Beta Tau</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alpha Chi Omega</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Christian Campus Fellowship</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alpha Gamma Delta</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alpha Delta Pi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Delta Chi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Pi Kappa Phi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alpha Delta Chi</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Zeta Tau Alpha</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Baptist Student Union</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>O\'Keefe Gym</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Custodial Services Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Catholic Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Griffin Track</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Lutheran Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Wesley Foundation\/Methodist Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Vernon D. and Helen D. Crawford Pool</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Westminster Christian Fellowship</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Rose Bowl Field</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>SAC Fields</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alumni Park</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Administration Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Tech Tower Lawn</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Harrison Square</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Carnegie Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Savant Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Swann Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Guggenheim Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Engineering Science and Mechanics (ESM) Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Coon Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Beringause Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Wardlaw Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Mechanical Engineering Research Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>College of Computing</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Hinman Research Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Rich Building</h3>' + '</div>'],"rnoc"
		['<div class="info_content">' + '<h3>Graduate Living Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Instructional Center - (IC)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Groseclose Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>School of Industrial and Systems Engineering</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Old CE</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Navy ROTC Armory</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Smith Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Building Construction and Center for GIS (Arch Annex)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>GTRI research</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Undergraduate Living Center - (ULC)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Maulding Residence Hall (6th St E Apartments)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Cherry Emerson Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Chandler Stadium</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Brown Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Tenth&Home</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Presidents House</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Paul Heffernan House</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Alexander Memorial Coliseum</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Georgia Tech Water Sports</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Luck Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Facilities</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Junior\'s Grill</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>College of Architecture-West Wing</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>College of Architecture</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Library and Information Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Centennial Research Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>R. Kirk Landon Learning Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Bill Moore Tennis Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Howey-Physics Building and Observatory</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>King Facilities Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Weber Space Science and Technology Building I - (SST)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Van Leer EE\/CmpE Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>CEISMC</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Bunger-Henry Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>EII 512 Means St</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Neely Nuclear Research Center</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Athletic Association Conference Room</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Field Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Matheson Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Perry Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Hanson Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Hopkins Residence Hall</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Pettit Microelectronics Research Center (MIRC)</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Ajax Building</h3>' + '</div>'],
		['<div class="info_content">' + '<h3>Weber Space Science and Technology Building II - (SST)</h3>' + '</div>'],
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