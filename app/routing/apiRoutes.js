var friendList = require("../data/friends.js");
var bodyParser = require("body-parser");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
	    res.json(friendList);
	});

	app.post("/api/friends", function(req, res){
		friendList.push(req.body);
		console.log(friendList);
		// res.redirect("/api/friends");
		res.json(friendList);
	});

}