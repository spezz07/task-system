<template>
    <div>
    <mu-list >
           <mu-list-item title="所有任务" >
                <mu-icon slot="left" value="assignment"/>
            </mu-list-item>
            <mu-list-item title="分类列表">
                <mu-icon slot="left" value="bookmark"/>
            </mu-list-item>
            <mu-list-item  toggleNested   v-for="(i,index) in task"   :open="false"  ><!--标题-->
                <mu-icon slot="left" value="class" /><!--标题图标-->
                  {{i.title }}<br/>
                <tree :model="i"   slot="nested"></tree>
            </mu-list-item>
    </mu-list>
    </div>
</template>


<script>
 import tree from './taskside_tree.vue'
 export default{

     data(){
          return{
              task:this.$store.state.datalist,
              toggleNested:true
          }
      },
     computed:{

     },
     methods:{

     },
     components:{
         tree
     }

 }
</script>

<style>
    .listsel{
        background-color: gray;
    }
</style>