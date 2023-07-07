var api = {}

var currentDate = new Date();
var previousDate = new Date();
previousDate.setDate(currentDate.getDate() - 7);
var befoteLastDate = new Date();
befoteLastDate.setDate(currentDate.getDate() - 14);

var negotiations = [
      { date : currentDate, quantity : 1, value : 150},
      { date : currentDate, quantity : 2, value : 250},
      { date : currentDate, quantity : 3, value : 350},
      { date : previousDate, quantity : 1, value : 450},
      { date : previousDate, quantity : 2, value : 550},
      { date : previousDate, quantity : 3, value : 650},
      { date : befoteLastDate, quantity : 1, value : 750},
      { date : befoteLastDate, quantity : 2, value : 950},
      { date : befoteLastDate, quantity : 3, value : 950}
    ];


api.weekList = function(req, res) {
    var currentNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date > previousDate;
    });
    res.json(currentNegotiations);
};

api.lastWeekList = function(req, res) {
   
   var previousNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date < currentDate && negotiation.date > befoteLastDate;
    });
	setTimeout(function() {
		res.json(previousNegotiations);	
	}, 500);
    
};

api.beforeLastWeekList = function(req, res) {

   var beforeLastNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date < previousDate;
    });
    res.json(beforeLastNegotiations);
    
};

api.registerNegotiation = function(req, res) {

   console.log(req.body);
   req.body.date = new Date(req.body.date.replace(/-/g,'/'));
   negotiations.push(req.body);
   res.status(200).json("Negotiation received successfully!");
};



module.exports = api;