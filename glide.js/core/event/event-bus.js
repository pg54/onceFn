import { isArray } from '../../utils/unit'

// 首先要event-bus是干啥的？
// 根据vue.js的经验，就是一个第三方，emit 然后 on  

export default class EventsBus {
    constructor (events = {}) {
        this.events = events
        this.hop = events.hasOwnProperty
    }
    on (event, handler) {
        if (isArray(event)) {
            for (let i = 0; i < event.length; i++) {
                this.on(event[i], handler)

            }

        }
        // 如果没有创建一个
        if (!this.hop.call(this.events, event)) {
            this.events[event] = []
        }
        // 把handler添加到队列
        var index = this.events[event].push(handler) - 1
        return {
            remove () {
                delete this.events[event][index]
            }
        }
    }
    emit (event, context) {
        if (isArray(event)) {
            for (let i = 0; i < event.length; i++) {
                this.emit(event[i], context)

            }

        }
        if (!this.hop.call(this.events, this.event)) return
        this.events[event].forEach((item) => {
            item(context || {})
        })
            

    }
}