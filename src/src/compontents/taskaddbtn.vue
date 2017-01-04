<template>
    <div>
        <mu-raised-button label="添加任务" ref="button" @click="toggle" />
        <mu-popover :trigger="trigger" :open="open" @close="handleClose" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" >
            <mu-menu>
                <mu-menu-item title="添加分类" @click="dopentype"/>
                <mu-menu-item title="添加任务"  @click="dopentask"/>
                <!--根据点击按钮弹出模态框 -->
                <mu-dialog  v-if='show':open="dialog" title=" 这是添加分类！" @close="diaclose" >
                        <br/>
                        <mu-select-field label="选择分类" v-model="tasklist" >
                            <mu-menu-item  v-for="(t,index) in task" :title="t.title" :value="t.title" />
                        </mu-select-field>
                    <mu-select-field label="选择分类"    v-if="tasklist">
                        <mu-menu-item  v-for="(t,index) in tasklist" :title="t" :value="t" />
                    </mu-select-field>
                    <br/>
                    <mu-flat-button slot="actions" @click="diaclose" primary label="取消"/>
                    <mu-flat-button slot="actions" primary @click="diaclose" label="确定"/>
                </mu-dialog>
                <mu-dialog  v-if='show2':open="dialog" title="Dialog" @close="diaclose" >
                    这是添加任务
                    <mu-flat-button slot="actions" @click="diaclose" primary label="取消"/>
                    <mu-flat-button slot="actions" primary @click="diaclose" label="确定"/>
                </mu-dialog>
            </mu-menu>
        </mu-popover>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                open: false,
                trigger: null,
                anchorOrigin: {"vertical":"bottom","horizontal":"right"},
                targetOrigin: {"vertical":"bottom","horizontal":"left"},
                show:false,
                show2:false,
                dialog: true,
                task:this.$store.state.datalist,
                tasklist:null
            }
        },
        mounted () {
            this.trigger = this.$refs.button.$el
        },
        methods: {
            toggle () {
                this.open = !this.open
            },
            handleClose (e) {
                this.open = false
            },
            dopentype(){
                this.show=true
            },
            dopentask(){
                this.show2=true
            },
            diaopen () {
                this.dialog = true
            },
            diaclose () {
                this.show = false;
                this.show2 = false
            },

        },

    }
</script>