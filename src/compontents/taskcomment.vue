<template>
    <div>
    <mu-card  :style="height"   v-if="task.content">
        <mu-card-title :title="task.contitle" :subTitle="task.subtitle"/>
        <mu-card-text>
          {{task.content}}
        </mu-card-text>
    </mu-card>
        <mu-card  :style="height"   v-else>
            暂无内容
        </mu-card>
    </div>
</template>

<script>
    export default{
        data:function () {
            return{
                height:{
                    'minHeight':'880px',
                }
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
        }
    }

</script>