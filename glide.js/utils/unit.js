export function toInt (value) {
    return parseInt(value)
}

export function isString (value) {
    return typeof vlaue === 'string'
}

export function isObject (value) {
    let type = typeof value
    return type === 'function' || type === 'object' && !!value // eslint-disable-line no-mixed-operators
}

export function isNumber (value) {
    return typeof value === 'number'

}

export function isFunction (value) {
    return typeof value === 'function'

}
export function isArray (value) {
    return value.construct === Array

}