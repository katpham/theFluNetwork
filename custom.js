var firebaseRef = new Firebase("https://the-flu-network.firebaseio.com");

$("#submit-btn").bind("click", function() {
  var first_name = $('#first_name').val();
  var last_name = $('#last_name').val();
  var passwordValue = $('#password').val();
  var emailValue = $('#email').val();
  fireBaseRef.push({firstName: first_name, lastName: last_name, password: passwordValue, email: emailValue}, function(error) {
    if (error !== null) {
      alert('Unable to push comments to Firebase!');
    }
  });

    // var comment = $("#comments");
    // var commentValue = $.trim(comment.val());
 
    // fireBaseRef.push({comment: commentValue}, function(error) {
    //     if (error !== null) {
    //         alert('Unable to push comments to Firebase!');
    //     }
    // });
 
    return false;
});

// function submit(e) {
//   var first_name = $('#first_name').val();
//   var last_name = $('#last_name').val();
//   var password = $('#password').val();
//   var email = $('#email').val();
//   firebaseRef.set({
//     First_Name: first_name, 
//     Last_Name: last_name, 
//     Password: password,
//     Email: email
//   });
//   e.preventDefault();
// }
// var submit = document.getElementsByTagName('button')[0];
// submit.onclick = submit;
