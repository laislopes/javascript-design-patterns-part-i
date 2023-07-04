class NegotiationController{

    #inputDate;
    #inputQuantity;
    #inputValue;
    #negotiationList;
    #negotiationsView;
    #message;
    #messageView;

    constructor(){

       let $ = document.querySelector.bind(document);
       this.#inputDate = $('#date');
       this.#inputQuantity = $('#quantity');
       this.#inputValue = $('#value');

       let self = this;

       this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
       
           get(target, prop, receiver) {
       
               if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
       
                   return function(){
       
                     console.log(`método '${prop}' interceptado`);
       
                    Reflect.apply(target[prop], target, arguments);
       
                     self._negociacoesView.update(target);
       
                   }
            }
       
            return Reflect.get(target, prop, receiver);
         }
       });

       this.#negotiationsView = new NegotiationsView($('#negotiationsView'));
       this.#negotiationsView.update(this.#negotiationList);

       this.#message = new Message();
       this.#messageView = new MessageView($('#messageView'));
       this.#messageView.update(this.#message);
    }
    
    add(event){
        event.preventDefault();
        this.#negotiationList.add(this.#buildNegotiation());

        this.#message.text = 'Negotiation added successfully!';
        this.#messageView.update(this.#message);
       
        this.#clearForm();
    }

    delete(){
        this.#negotiationList.clear();
  
        this.#message.text = 'Negotiations deleted successfully';
        this.#messageView.update(this.#message);
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