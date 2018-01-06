import Ripple from '../directives/ripple'
export default {
    name: 'rippleable',
    directives: { Ripple },
    props: {
        ripple: {
            type: [Boolean, object],
            default: true
        }
    },
    methods: {
        genRipple (data = {directives: []}) {
            data.class = this.rippleClasses || 'input-group--selection-controls__ripple'
            data.directives.push({
                name: 'ripple',
                value: this.ripple && !this.disabled && {center: true }
            })
            data.on = Object.assign({
                click: this.toggle
            }, this.$listeners)
            return this.$createElement('div', data)
        }
    }
}