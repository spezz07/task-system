<template>
    <div>
        <mu-raised-button label="添加任务" ref="button" @click="toggle" />
        <mu-popover :trigger="trigger" :open="open" @close="handleClose" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" >
            <mu-menu>
                <mu-menu-item title="添加分类" @click="dopentype"/>
                <mu-menu-item title="添加任务"  @click="dopentask"/>
                <!--根据点击按钮弹出模态框 -->
                <mu-dialog  v-if='show':open="dialog" title=" 这是添加分类！" @close="diaclose" >


                    <!--<mu-select-field label="选择分类"  >
                            <mu-menu-item  v-for="(t,index) in task" :title="t.title" :value="t.title" v-model="typeindex"/>
                        </mu-select-field>-->

                    <mu-text-field label="请输入新分类名" labelFloat v-model="newtypename"/>
                    <br/>
                    <mu-flat-button slot="actions" @click="diaclose" primary label="取消"/>
                    <mu-flat-button slot="actions" primary @click="diaenter" label="确定"/>
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
                newtypename:"",
                typeindex:"",
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
            diaenter(){
                this.show = false;
                this.show2 = false;
                if(this.newtypename==""){
                    alert("新分类的名字不能为空！！！")
                }
                else {
                    this.$store.dispatch('addtypename',this.newtypename);
                    this.newtypename=""
                }

            }

        },

    }
</script>