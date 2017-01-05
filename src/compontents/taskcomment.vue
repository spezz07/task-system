<template>
    <div>
    <mu-card  :style="height"   v-if="task.content">
        <mu-card-title :title="task.contitle" :subTitle="task.time"  class="left"/>
         <div v-if="task.finish==0">
             <mu-raised-button label="编辑任务" class="demo-raised-button right-edit"   @click="taskedit_open" primary >
                 <mu-icon value="mode_edit" />
             </mu-raised-button>
             <mu-raised-button label="完成任务" class="demo-raised-button right-fin" backgroundColor="#a4c639" primary  @click="taskfinish_open"  >
                 <mu-icon value="insert_drive_file" />
             </mu-raised-button>
             <mu-dialog :open="dialog1" title="确定已完成该任务吗？" >
                 真的确定吗~?
                 <mu-flat-button slot="actions"   @click="btnclose" primary label="取消"/>
                 <mu-flat-button slot="actions" primary @click="taskfinish" label="确定"/>
             </mu-dialog><!--完成任务-->
             <mu-dialog :open="dialog2" title="编辑任务" >
                 <mu-text-field label="请输入标题（最多15个字）" labelFloat :maxLength="15" :errorText="errortext" @textOverflow="titleover" v-model="taskedit_title"/><br/>
                 <!--设置 maxLength 属性，启动输入字符数记录，再输入时会触发 textOverflow 事件，当一个参数为 true 是则说明输入的长度已超过最大长度-->
                 <mu-text-field label="请输入摘要（最多15个字）" labelFloat :maxLength="15" :errorText="errorsummary" @textOverflow="summaryover" v-model="taskedit_summary"/><br/>
                 选择的日期：
                 <mu-date-picker container="inline" mode="landscape" hintText="请选择日期" v-model="taskedit_time"/><br/>
                 <mu-text-field label="请输入内容（最多100个字）" labelFloat  :maxLength="100" :errorText="errorcontent" @textOverflow="contentover" multiLine :rows="3" :rowsMax="10" v-model="taskedit_content"/><br/>
                 <mu-flat-button slot="actions"   @click="btnclose" primary label="取消"/>
                 <mu-flat-button slot="actions" primary @click="taskedit" label="确定"/>
             </mu-dialog>
         </div>
        <mu-divider inset/>
        <mu-card-text>
          {{task.content}}
        </mu-card-text>
    </mu-card>
        <mu-card  :style="height"   v-else-if="task.content==''">
            <mu-raised-button label="新增任务" class="demo-raised-button right-edit"   @click="taskedit_open" primary >
                <mu-icon value="mode_edit" />
            </mu-raised-button>
            <mu-dialog :open="dialog2" title="新增任务" >
                <mu-text-field label="请输入标题（最多15个字）" labelFloat :maxLength="15" :errorText="errortext" @textOverflow="titleover" v-model="taskedit_title"/><br/>
                <!--设置 maxLength 属性，启动输入字符数记录，再输入时会触发 textOverflow 事件，当一个参数为 true 是则说明输入的长度已超过最大长度-->
                <mu-text-field label="请输入摘要（最多15个字）" labelFloat :maxLength="15" :errorText="errorsummary" @textOverflow="summaryover" v-model="taskedit_summary"/><br/>
                选择的日期：
                <mu-date-picker container="inline" mode="landscape" hintText="请选择日期" v-model="taskedit_time"/><br/>
                <mu-text-field label="请输入内容（最多100个字）" labelFloat  :maxLength="100" :errorText="errorcontent" @textOverflow="contentover" multiLine :rows="3" :rowsMax="10" v-model="taskedit_content"/><br/>
                <mu-flat-button slot="actions"   @click="btnclose" primary label="取消"/>
                <mu-flat-button slot="actions" primary @click="taskedit" label="确定"/>
            </mu-dialog>
        </mu-card>
    </div>
</template>

<script>
    export default{
        data:function () {
            return{
                height:{
                    'minHeight':'880px',
                },
                dialog1: false,
                dialog2: false,
                errortext:"",
                errorcontent:"",
                errorsummary:"",
                taskedit_title:"",
                taskedit_time:"",
                taskedit_content:"",
                taskedit_summary:""

            }
        },
        computed:{
            listnum(){
                return this.$store.state.clicknum[0]
            },
            tasknum(){
                return  this.$store.state.clicknum[1]
            },
            conntentnum(){
                return  this.$store.state.tasklistnum[0]
            },
            task(){
                return this.$store.state.datalist[this.listnum].children[this.tasknum].children[this.conntentnum]
            }
        },
        methods:{

            taskfinish_open () {
                this.dialog1 = true;
            },
            btnclose(){
                this.dialog1 = false;
                this.dialog2 = false
            },
            taskfinish () {
                this.dialog1 = false;
                this.$store.dispatch("taskfinsh",this.task)
            },
            taskedit_open(){
                this.dialog2 = true
            },
            taskedit(){
                this.dialog2 = false;
                if(this.taskedit_title==""||this.taskedit_time==""||this.taskedit_content==""||this.askedit_summary==""){
                    alert("数据不能为空");
                    this.taskedit_title="";
                    this.taskedit_time="";
                    this.taskedit_content="";
                    this.taskedit_summary=""
                }
                else{
                    this.$store.dispatch({
                        type:"taskedit",
                        Taskedit_title:this.taskedit_title,
                        Taskedit_time:this.taskedit_time,
                        Taskedit_content:this.taskedit_content,
                        Taskedit_summary:this.taskedit_summary,
                        Taskedit_index:this.task
                    });
                    this.taskedit_title="";
                    this.taskedit_time="";
                    this.taskedit_content="";
                    this.taskedit_summary=""
                }


            },
            titleover (overflow) {
                this.errortext = overflow? '标题超过15个字了！' : ''
            },
           contentover(overflow){
               this.errorcontent = overflow? '内容超过100个字了！' : ''
           },
            summaryover(overflow) {
               this.errorsummary = overflow ? "摘要超过15个字了！":" "
            }
        }
    }

</script>
<style>
    .right-edit{
        top:16px;
        right:40px;
        float: right;
    }
    .right-fin{
        top:16px;
        right:80px;
        float: right
    }
    .left{
        float: left;
    }
</style>