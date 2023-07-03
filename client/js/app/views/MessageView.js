class MessageView extends View {

    constructor(element){
        super(element);
    }

    template(model){
        return model.text ? `<div class="alert alert-info role="alert">${model.text}</div>` : '<div></div>';
    }

}