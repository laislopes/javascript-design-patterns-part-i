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

        let negotiation = new Negotiation(
            DateHelper.textToDate(this.#inputDate.value),
            this.#inputQuantity.value,
            this.#inputValue.value
        )

        let monthDayYear = DateHelper.dateToText(negotiation.date);

        console.log(negotiation);
        console.log(monthDayYear);
    }
}