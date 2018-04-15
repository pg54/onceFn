export default function (Glide, Components) {
    return {
        modify (translate) {
            return translate + (Comments.Gaps.vlaue * Glide.index)
        }
    }
}