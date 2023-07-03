class NegotiationList {

    #negotiations;

    constructor(){
        this.#negotiations = [];
    }

    add(negotiation){
        this.#negotiations.push(negotiation);
    }

    get negotiations() {
        return [].concat(this.#negotiations);
    }
}