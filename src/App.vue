
<template>
    <div>
        <mu-appbar title="任务系统" >
            <mu-icon-button icon="menu" slot="left"/>

        </mu-appbar>
        <div class="task">
            <taskside class="taskside">
            </taskside>
            <tasklist class="tasklist mu-paper"></tasklist>
            <taskcomment class="taskcomment"></taskcomment>
        </div>
<taskaddbtn class="addbtn"></taskaddbtn>
    </div>
</template>

<script>
import taskSide from './compontents/taskside.vue'
import taskList from './compontents/tasklist.vue'
import taskComment from './compontents/taskcomment.vue'
import taskAddBtn from './compontents/taskaddbtn.vue'
 export default{
     data(){
          return{
          }
     },
     components:{
         taskside:taskSide,
         tasklist:taskList,
         taskcomment:taskComment,
         taskaddbtn:taskAddBtn
     }

 }
</script>

<style>
    .task{
        display: flex;
    }
    .taskside{
       flex:0 0 300px;
        max-height: 880px;
        overflow-x: hidden;

    }
    .tasklist{
        flex:0 1 500px;
        max-height: 880px;
        overflow-x: hidden;
    }
    .taskcomment{
        flex: 0 2 1200px;

    }
    .addbtn{
        position: fixed;
        bottom: 20px;
        left:20px
    }
</style>