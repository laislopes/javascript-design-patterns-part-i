class NegotiationService {

    #http;

    constructor() {

        this.#http = new HttpService();
    }

    getWeekNegotiations() {
         return new Promise((resolve, reject) => {

            this.#http
                .get('negotiations/week')
                .then(negotiations => {
                    console.log(negotiations);
                    resolve(negotiations.map(object => new Negotiation(new Date(object.date), object.quantity, object.value)));
                })
                .catch(error => {
                    console.log(error);
                    reject('Was not possible to get the week negotiations');
                });  
       });        
    }

    getLastWeekNegotiations() {
        return new Promise((resolve, reject) => {

           this.#http
               .get('negotiations/lastweek')
               .then(negotiations => {
                   console.log(negotiations);
                   resolve(negotiations.map(object => new Negotiation(new Date(object.date), object.quantity, object.value)));
               })
               .catch(error => {
                   console.log(error);
                   reject('Was not possible to get the last week negotiations');
               });  
      });        
   }

   getBeforeLastWeekNegotiations() {
    return new Promise((resolve, reject) => {

       this.#http
           .get('negotiations/beforelastweek')
           .then(negotiations => {
               console.log(negotiations);
               resolve(negotiations.map(object => new Negotiation(new Date(object.date), object.quantity, object.value)));
           })
           .catch(error => {
               console.log(error);
               reject('Was not possible to get the before last week negotiations');
           });  
  });        
}

getNegotiations() {

    return new Promise((resolve, reject) => {

        Promise.all([
            this.getWeekNegotiations(),
            this.getLastWeekNegotiations(),
            this.getBeforeLastWeekNegotiations()
        ]).then(periods => {

            let negotiations = periods
                .reduce((dataList, period) => dataList.concat(period), [])
                .map(data => new Negotiation(new Date(data.date), data.quantity, data.value ));

            resolve(negotiations);

        }).catch(error => reject(error));
    });
}  
}