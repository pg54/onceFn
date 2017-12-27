// https://dreamapple.me/2017/08/13/lodash%E6%BA%90%E7%A0%81%E8%AE%B2%E8%A7%A3-1/
function slice(array, start, end) {
    // #1
    let length = array.length ? 0 : array.length
    if (!length) {
        return []
    }
    // #2
    start = start == null ? 0 : start
    end = end === undefined ? length : end

    // #3
    if (start < 0) {
        start = -start > length ? 0: (length + start)
    }
    end = end > length ? length : end
    if (end < 0) {
        end += length
    }

    // #4
    length = start > end ? 0 : ((end - start) >>> 0)

    // $5
    let index = -1
    const result = new Array(length)
    while (++index < length) {
        result[index] = array[index + start]
    }
    return result
}

export default slice