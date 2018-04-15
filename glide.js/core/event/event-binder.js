import { isString } from '../../utils/unit'

export default class EventsBinder {
    // 事件绑定类的构造函数
    constructor ( listeners = {}) {
        this.listeners = listeners
    }
    // 把事件监听指定到html元素上
    on(events, el, closure) {
        if (isString(events)) {
            events = [events]

        }
        for (let i = 0; i < events.length; i++) {
            this.listeners[events[i]] = closure
            el.addEventListener(events[i], this.listeners[events[i]], false)

        }
    }

    // 去掉事件监听的指定
    off(events, el) {
        if (isString(events)) {
            events = [events]

        }
        for (let i = 0; i < events.length; i++) {
            el.removeEventListener(events[i], this.listeners[events[i]], false)
        }
    }

    destory () {
        delete this.listeners
    }


    
}