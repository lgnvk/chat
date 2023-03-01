class EventBus {
    constructor() {
        this.listeners = {};
    }

    on(event, callback) {
        if(!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    emit(event) {
        this.listeners[event].forEach(function(listener) {
            listener();
        })
    }

    off(event, callback) {

    }
}

// const data = {
//     test: 1,
// }

// const proxyData = new Proxy(data, {
//     get(target, prop) {
//         const value = target[prop];
//         console.log('get data', value);
//         return typeof value === 'function' ? value.bind(target) : value;
//     },
//     set(target, prop, value) {
//         target[prop] = value;
//         console.log(`${prop}: ${value}`);
//         return true;
//     }
// })

export default EventBus;