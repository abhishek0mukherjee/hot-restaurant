// Reservation Submit Button Listener
$("#submitButton").on("click", function(event){
	event.preventDefault();
	var name = $("#name").val().trim();
	var phone = $("#phone").val().trim();
	var email = $("#email").val().trim();
	var ID = $("#custID").val().trim();

	var res = new Reservation(name,phone,email,ID);
	console.log(res);

	// post request
	$.post("/reservations/new", res)
    .done(function(data) {
    	console.log(data);
    	alert("Adding reservation...");
    });
});


// reservation obj creator
function Reservation(name,phone,email,ID) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.ID = ID;
};
