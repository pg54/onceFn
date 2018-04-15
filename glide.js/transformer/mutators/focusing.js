export default function (Glide, Components) {
    return {
        modify (translate) {
            let gap = Components.Gaps.value
            let width = Components.Sizes.width
            let focusAt = Glide.settings.focusAt
            let slideWidth = Components.Sizes.slideWidth

            if ( focusAt === 'center') {
                return translate - (width / 2 - slideWidth /2)
            }
            return translate - (slideWidth * focusAt) - (gap * focusAt)
        }
    }

}