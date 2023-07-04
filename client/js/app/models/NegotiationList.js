class NegotiationList {

    #negotiations;
    #context;
    #trap;

    constructor(context, trap){
        this.#negotiations = [];
        this.#context = context;
        this.#trap = trap;
    }

    add(negotiation){
        this.#negotiations.push(negotiation);
        Reflect.apply(this.#trap, this.#context, [this]);
    }

    get negotiations() {
        return [].concat(this.#negotiations);
    }

    clear(){
        this.#negotiations = [];
        Reflect.apply(this.#trap, this.#context, [this]);
    }
}