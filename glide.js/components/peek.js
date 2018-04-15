import { define } from '../utils/object'
import { toInt, isObject } from '../utils/unit'

export default function (Glide, Components, Events) {
    const peek = {
        mount () {
            this.value = Glide.settings.peek
        }
    }
    define(Peek, 'value', {
        get () {
            return Peek._v
        },
        set (value) {
            if (isObject(value)) {
                value.before = toInt(value.before)


            }

        }
    })
}