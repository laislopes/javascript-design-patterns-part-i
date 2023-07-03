class NegotiationController{

    #inputDate;
    #inputQuantity;
    #inputValue;
    #negotiationList;
    #negotiationsView;

    constructor(){

       let $ = document.querySelector.bind(document);
       this.#inputDate = $('#date');
       this.#inputQuantity = $('#quantity');
       this.#inputValue = $('#value');
       this.#negotiationList = new NegotiationList();
       this.#negotiationsView = new NegotiationsView($('#negotiationsView'));

       this.#negotiationsView.update(this.#negotiationList);
    }
    add(event){
        event.preventDefault();
        this.#negotiationList.add(this.#buildNegotiation());
        this.#negotiationsView.update(this.#negotiationList);
        this.#clearForm();
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