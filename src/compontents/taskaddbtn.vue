<template>
    <div>
        <mu-raised-button label="添加任务" ref="button" @click="toggle" />
        <mu-popover :trigger="trigger" :open="open" @close="handleClose" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin" >
            <mu-menu>
                <mu-menu-item title="添加分类" @click="dopentype"/> <!--根据点击按钮弹出模态框 -->
                <mu-menu-item title="添加任务" @click="dopentask"/>
            </mu-menu>
        </mu-popover>
        <mu-dialog  v-if='show':open="dialog" title=" 这是添加分类！" @close="diaclose" >
            <mu-text-field label="请输入新分类名" labelFloat v-model="newtypename"/>
            <br/>
            <mu-flat-button slot="actions" @click="diaclose" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="diaenter" label="确定"/>
        </mu-dialog>
        <mu-dialog  v-if='show2':open="dialog" title="这是添加分类任务！" @close="diaclose"  >
            <br/>
            <mu-select-field :labelFocusClass="['label-foucs']" label="选中分类" >
                <mu-menu-item v-for=" (i,index) in task"  :title="i.title" :value="i.title" @click="taskindex(index)"/>
            </mu-select-field>
            <br/>
            <mu-text-field label="请输入新分类任务名" labelFloat v-model="newtaskname"/>
            <mu-flat-button slot="actions" @click="diaclose" primary label="取消"/>
            <mu-flat-button slot="actions" primary  label="确定" @click="addnewtaskname" />
        </mu-dialog>
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
                newtaskname:"",
                taskindexnum:""
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
                this.show = true
            },
            dopentask(){
                this.show2 = true
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
            },
            taskindex(index){
                  this.taskindexnum =index
            },
            addnewtaskname(){
                this.show = false;
                this.show2 = false;
                this.$store.dispatch({//Object 风格的 Dispatch
                    type:'addtaskname',
                    taskname:this.newtaskname,
                    taskindexnum:this.taskindexnum
                });
                this.newtaskname=""
            },
        },
    }
</script>