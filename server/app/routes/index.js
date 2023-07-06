var api = require('../api');

module.exports  = function(app) {
    
    app.route('/negotiations/week')
        .get(api.weekList);
        
    app.route('/negotiations/lastweek')
        .get(api.lastWeekList);
        
    app.route('/negotiations/beforelastweek')
        .get(api.beforeLastWeekList);  
        
    app.route('/negotiations')
        .post(api.registerNegotiation);          
};