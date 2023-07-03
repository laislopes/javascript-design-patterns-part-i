class Negotiation {

    #date;
    #quantity;
    #value;

    constructor(date, quantity, value){

        this.#date = new Date(date.getTime());
        this.#quantity = quantity;
        this.#value = value;
        
    }

    get date(){
        return new Date(this.#date.getTime());
    }

    get quantity(){
        return this.#quantity;
    }

    set quantity(quantity){
        this.#quantity = quantity;
    }

    get value(){
        return this.#value;
    }

    get volume(){
        return this.quantity * this.value;
    }

}