<template>
    <div>
        <mu-dialog :open="dialog" title="Dialog" @close="close">
            这是一个简单的弹出框
            <mu-flat-button slot="actions" @click="close" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="close" label="确定"/>
        </mu-dialog>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dialog: true
            }
        },
       props:["dialogs"],
        
        methods: {
            diaopen () {
                this.dialog = true
            },
            diaclose () {
                this.dialog = false
            }
        }
    }
</script>