class Message{

    #text;

    constructor(text = ''){
        this.#text = text;
    }

    get text(){
        return this.#text;
    }

    set text(text){
        this.#text = text;
    }
}