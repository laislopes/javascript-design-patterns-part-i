class DateHelper {

    constructor(){
        throw new Error("DateHelper can't be instantiated");
    }

    static dateToText(date){
        return `${(date.getMonth()+ 1)}/${date.getDate()}/${date.getFullYear()}`;
    }

    static textToDate(text){
       if(!/\d{4}-\d{2}-\d{2}/.test(text)) 
            throw new Error('Should be on the format yyyy-mm-dd');
       return new Date(...text.split('-').map((item, index) => item - index % 2));
    }

}