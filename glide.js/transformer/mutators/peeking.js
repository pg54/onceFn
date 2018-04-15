export default function (Glide, Components) {
    return {
        modify (translate) {
            if (Glide.settings.focusAt >= 0) {
                let peek = Components.peek.value
                if (isObject(peek)) {
                    return translate - peek.befor
                }
                return translate - peek

            }
            return translate

        }
    }
}