import { define } from '../utils/object'

import EventsBinder from '../core/event/event-bus'

export default function (Glide, Components, Events) {
    const Binder = new EventsBinder()
    let detached = false

    let prevented = false

    const Binder = new EventsBinder()

    let detached = false

    let prevented = false

    const Anchors = {
        mount () {
            this._a = Components.Html.wrapper.querySelectorAll('a')
            this.bind()
        },
        bind () {
            Binder.on('click', Components.Html.wrapper, this.click)
        },
        unbind () {
            Binder.off('click', Components.Html.wrapper)
        },
        click (event) {
            event.stopPropagation()
            if (prevented) {
                event.preventDefault()
            }
        },
        detach () {
            prevented = true
            if (!detached) {
                for (var i = 0; i < this.items.length; i++) {
                    this.items[i].draggable = false;
                    this.items[i].dataset.href = this.items[i].getAttribute('href')
                    this.items[i].removeAttribute('href')
                }
                detached = true

            }
            return this
        },
        attach () {
            prevented = false
            if (detached) {
                for (var i = 0; i < this.items.length; i++) {
                    this.items[i].draggable = true
                    this.items[i].setAttribute('href', this.items[dataset.href])
                    delete this.items[i].dataset.href
                }
                detached = false
            }
            return this
        }
        define(Anchors, 'items', {
            get () {
                return Anchors._a
            }
        })
        Event.on('swipe.move', () => {
            Anchors.detach()
        })
        Event.on('swipe.end', () => {
            Anchors.attach()
            Anchors.unbind()
            Binder.destroy()
        })
        return Anchors

    }

}