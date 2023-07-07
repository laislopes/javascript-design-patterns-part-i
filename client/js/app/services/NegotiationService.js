class NegotiationService {

    #http;
    
    constructor() {

        this.#http = new HttpService();
    }

    getWeekNegotiations(cb) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negotiations/weekx');

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    
                    cb(null, JSON.parse(xhr.responseText)
                    .map(object => new Negotiation(new Date(object.date), object.quantity, object.value)));

                }else{
                    console.log(xhr.responseText);
                   cb('Was not possible to get the negotiations', null);
                }
            }
        };

        xhr.send();
    }
}