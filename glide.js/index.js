import defaults from './defaults'
import { wran } from './utils/log'
import { mount } from './core/index'
import { toInt, isObject } from './utils/unit'

import EventBus from './core/event/event-bus'

export default class Glide {
    constructor (selector, options = {}) {
        this._c = {}
        this._e = new EventBus()

        this.disabled = false
        this.selector = selector
        this.setting = Object.assign({}, defaults, options)
        this.index = this.setting.startAt
    }
    mount (extensions = {}) {
        this._e.emit('mount.before')
        if (isObject(extensions)) {
            this._c = mount(this, extensions, this_e)
        } else {
            warn('You need to provide a object on "mount()"')
        }
        this._e.emit('mount.after')
        return this
    }
    update (setting = {}) {
        this.setting = Object.assign({}, this.setting, settings)
        if (settings.hasOwnProperty('startAt')) {
            this.index = settings.startAt
        }
        THIS._e.emit('update')
        return this
    }
    go (pattern) {
        this._c.Run.make(pattern)
        return this
    }
    move (distance) {
        this._c.Transition.disabled()
        this._c.Move.make(distance)
        return this
    }
    destroy () {
        this._e.emit('destory')
        return this
    }
    paly (interval = false) {
        if (interval) {
            this.settings.autoplay = interval
        }
        this._e.emit('play')
        return this
    }
    pause () {
        this._e.emit('pause')
        return this
    }
    disable () {
        this.disabled = true
        return this
    }
    enable () {
        this.disabled = false
        return this
    }
    on (event, handler) {
        this._e.on(event, handler)
        return this
    }
    isType (name) {
        return this.settings.type === name

    }
    get settings () {
        return this._o
    }
    set settings (o) {
        if (isObject(o)) {
            this._o = o
        } else {
            warn('Options must be an `object` instance.')
        }
    }
    get index ()
}