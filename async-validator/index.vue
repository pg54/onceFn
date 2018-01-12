// https://juejin.im/post/59f09e135188255f9b339817
<template>
    <form class="v-form">
        <slot></slot>
    </form>
</template>
<script>
    import  AsyncValidator  from 'async-validator'
    export default {
        name: 'v-form',
        componentName: 'vForm',
        data () {
            return {
                fields: [],
                formError: {}
            }
        },
        computed: {
            formRules () {
                const descriptor = {}
                this.fields.forEach((prop) => {
                    if (!Array.isArray(this.rules[prop])) {
                        console.warn(`prop 为 ${prop} 的 FormItem 校验规则不存在或者其值不是数组`)
                        descriptor[prop] = [{required: true}]
                        return 
                    }
                    descriptor[prop] = this.rules[prop]
                })
                return descriptor
            },
            formValues () {
                return this.fields.reduce((data, {prop}) => {
                    data[prop] = this.model[prop]
                    return data
                },{})
            }
        },
        methods: {
            validate (callback) {
                const validtor = new AsyncValidator(this.formValues)
                validtor.validtor(this.formValues, (errors) => {
                    let formError = {}
                    if () {
                        
                    }
                })
            }
        }
    }
</script>