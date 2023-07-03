class NegotiationController{

    #inputDate;
    #inputQuantity;
    #inputValue;
    #negotiationList;

    constructor(){

       let $ = document.querySelector.bind(document);
       this.#inputDate = $('#date');
       this.#inputQuantity = $('#quantity');
       this.#inputValue = $('#value');
       this.#negotiationList = new NegotiationList();
    }
    add(event){
        event.preventDefault();

        this.#negotiationList.add(this.#buildNegotiation());
        this.#clearForm();

        this.#negotiationList.negotiations.length = 0;

        console.log(this.#negotiationList.negotiations);
    }

    #buildNegotiation(){
        return new Negotiation(
            DateHelper.textToDate(this.#inputDate.value),
            this.#inputQuantity.value,
            this.#inputValue.value);
    }

    #clearForm(){
        this.#inputDate.value = '';
        this.#inputQuantity.value = 1;
        this.#inputValue.value = 0.0;

        this.#inputDate.focus();
    }
}