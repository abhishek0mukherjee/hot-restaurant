var express = require("express");
var path = require("path")
var bodyParser = require("body-parser");


var app = express();
var PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var tablesarray = ["test"];
var reservationarray = ["testtwo"]

var table = [{
  routeName: "table",
  name: "table",
  display: tablesarray,
  display2: reservationarray
}];

// app.get("/", function(req, res) {
//   res.send("Welcome!");
// });

// app.get("/api/:table?", function(req, res) {
//   var chosen = req.params.table;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < table.length; i++) {
//       if (chosen === table[i].routeName) {
//         res.json(table[i]);
//         return;
//       }
//     }

//     return res.send("Not a valid path");
//   }
//   return res.json(table);
// });

app.get("/", function(req, res) 
{
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) 
{
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function(req, res) 
{
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/reservations", function(req, res)
{
	return res.json(reservations);
});


app.post("/reservations/new", function(res, req)
{
	var newRes = req.body;
	newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();

	console.log(newRes);

	reservations.push(newRes);

	res.json(newRes);
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

