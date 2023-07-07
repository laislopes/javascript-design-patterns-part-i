class NegotiationController {

    #inputDate;
    #inputQuantity;
    #inputValue;
    #negotiationList;
    #message;

    constructor() {

        let $ = document.querySelector.bind(document);
        this.#inputDate = $('#date');
        this.#inputQuantity = $('#quantity');
        this.#inputValue = $('#value');

        this.#negotiationList = new Bind(
            new NegotiationList(),
            new NegotiationsView($('#negotiationsView')),
            'add', 'clear');

        this.#message = new Bind(
            new Message(),
            new MessageView($('#messageView')),
            'text');

    }

    add(event) {
        event.preventDefault();
        this.#negotiationList.add(this.#buildNegotiation());
        this.#message.text = 'Negotiation added successfully!';
        this.#clearForm();
    }

    importNegotiations(){
        let service = new NegotiationService();

        service
            .getNegotiations()
            .then(negotiations => negotiations.forEach(negotiation => {
                this.#negotiationList.add(negotiation);
                this.#message.text = 'Negotiations from the period were imported successfully'   
            }))
            .catch(error => this.#message.text = error);     
    }

    delete() {
        this.#negotiationList.clear();
        this.#message.text = 'Negotiations deleted successfully';
    }

    #buildNegotiation() {
        return new Negotiation(
            DateHelper.textToDate(this.#inputDate.value),
            this.#inputQuantity.value,
            this.#inputValue.value);
    }

    #clearForm() {
        this.#inputDate.value = '';
        this.#inputQuantity.value = 1;
        this.#inputValue.value = 0.0;
        this.#inputDate.focus();
    }
}