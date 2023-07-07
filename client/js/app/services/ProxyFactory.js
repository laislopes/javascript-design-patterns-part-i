class ProxyFactory {

    static create(object, props, action) {

        return new Proxy(object, {

            get(target, prop, receiver) {

                if (props.includes(prop) && ProxyFactory.#isAFunction(target[prop])) {

                    return function () {

                        console.log(`Intercepting ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return action(target);
                    }
                }else{
                    return target[prop];
                }
            },

            set(target, prop, value, receiver){
                if(props.includes(prop)){
                    action(target);
                }
                
                return target[prop] = value;
                
            }
        });
    }

    static #isAFunction(func){
        return typeof (func) == typeof (Function)
    }
}