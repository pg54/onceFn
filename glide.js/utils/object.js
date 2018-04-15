export function define (obj, prop, definition) {
    Object.defineProperty(obj, prop, definition)
}
export function sortKeys (obj) {
    return Object.keys(obj).sort.reduce((r,k) => {
        r[k] = obj[k]
        return (r[k], r)
    }, {})

}