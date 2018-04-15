import { warn } from '../utils/log'
import { isFunction } from '../utils/unit'

// 为啥要extentsion，为啥


export function mount (glide, extensions, events) {
    let components = {}
    for (let name in extensions) {
        if (isFunction(extensions[name])) {
            components[name] = extensions[name](glide, components, events)
        } else {
            warn('Extension must be a function')
        }
    }
    for (let name in components) {
        if (isFunction(components[name].mount)) {
            components[name].mount()
        }
    }
    return components
}