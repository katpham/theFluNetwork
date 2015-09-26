var ref = new Firebase("https://the-flu-network.firebaseio.com");

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("input_form");
  document.getElementById("submit_form").addEventListener("click", function () {
    form.submit();
    ref.set({
      firstName: document.getElementById("first_name"),
      lastName: document.getElementById("last_name"),
      password: document.getElementById("password"),
      email: document.getElementById("email"),
    });
  });
});

function updateLocation(coordinates) {
  // alert(coordinates);
  var locationsRef = ref.child("locations");
  locationsRef.set({
    city: {
      location: coordinates,
    }
  });
}
