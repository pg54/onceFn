function inserted(el, binding) {
    const callback = binding.value
    const debounce = binding.arg || 200
    const options = binding.options || {passive: true}

    let debounceTimeout = null
    const onResize = () => {
        clearTimeout(debounceTimeout)
        debounceTimeout = setTimeout(callback, debounce, options)
    }

    window.addEventListener('resize', onResize, options)

    el._onResize = {
        callback,
        options
    }

    //储存


    function unbind(el, binding) {
        const {callback, options} = el._onResize
        window.removeEventListener('resize', callback, options)
    }


}