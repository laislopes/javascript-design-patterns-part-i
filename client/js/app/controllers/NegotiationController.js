class NegotiationController{

    #inputDate;
    #inputQuantity;
    #inputValue;

    constructor(){

       let $ = document.querySelector.bind(document);
       this.#inputDate = $('#date');
       this.#inputQuantity = $('#quantity');
       this.#inputValue = $('#value');
    }
    add(event){
        event.preventDefault();

        let date = new Date(...
            this.#inputDate.value
            .split('-')
            .map((item, index) => item - index % 2));
   
        let negotiation = new Negotiation(
            date,
            this.#inputQuantity.value,
            this.#inputValue.value
        )

        console.log(negotiation);
    }
}