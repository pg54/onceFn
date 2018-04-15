import { toInt } from '../utils/unit';
import { define } from '../utils/object'
import { throttle } from '../utils/wait'

const MARGIN_TYPE = {
    ltr: ['marginLeft','marginRight'],
    rtl: ['marginRight','marginLeft']
}

export default function (Glide, Components, Events) {
    const Gaps = {
        mount () {
            this.value = Glide.settings.gap
        },
        apply (slides) {
            for (let i = 0, len = slides.length; i < len; i++) {
                let style = slides[i].style
            }
        }
    }
}
