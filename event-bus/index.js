// https://juejin.im/post/5ac2fb886fb9a028b86e328c
class EventEmeitter {
    constructor() {
        this._events = this._events || new Map();
        this._maxListeners = this._maxListeners || 10;
    }
}
EventEmeitter.prototype.emit = function(type, ...args) {
    let handler;
    handler = this._events.get(type)
    if (args.length > 0) {
        handler.apply(this.args)
    } else {
        handler.call(this)
    }
    return true;
}
EventEmeitter.prototype.addListener = function(type, fn) {
    if (!this._events.get(type)) {
        if (!this._events.get(type)) {
            this._events.set(type, fn);
        }
    }
}

const emitter = new EventEmeitter()
emitter.addListener('arson', man => {
    console.log('expel ${man}');
})
emitter.emit('arson','low-end');