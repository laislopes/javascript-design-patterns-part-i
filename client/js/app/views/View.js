class View{

    #element;

    constructor(element){
        this.#element = element;
    }

    template(model){
        throw new Error('Method template should be implemented!')
    }

    update(model){
        this.#element.innerHTML = this.template(model);
    }
}



