<template>
    <div>
    <mu-list >
        <mu-dialog :open="dialog" title="确定删除该分类吗？" >
            真的确定吗~?
            <mu-flat-button slot="actions"   @click="dialogclose" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="deltype" label="确定"/>
        </mu-dialog>
           <mu-list-item title="所有任务"  >
                <mu-icon slot="left" value="assignment" color="blue"/>
            </mu-list-item>
            <mu-list-item title="分类列表">
                <mu-icon slot="left" value="bookmark" color="blue"/>
            </mu-list-item>
            <mu-list-item  toggleNested   v-for="(i,index) in task"   :open="false"   @click="handleHover"   ><!--标题-->
                <mu-icon slot="left"  value="class" color="blue"/><!--标题图标-->
                    <mu-icon value="delete_forever"  color="red600"  :class="[ show ? btnshow2:btnshow ] " class="delbtn"    @click="dialogopen(index)"/>
                {{i.title }}
                <tree :model="i" slot="nested" :modelnum="index"></tree>
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
              show:false,
              dialog:false,
              btnshow:"btnshow",
              btnshow2:"btnshow2",
              listindex:""

          }
      },
     computed:{

     },
     methods:{
         handleHover () {
             if(this.show==false){
                 this.show = true
             }
             else {
                 this.show = false
             }
         },
         dialogopen(index){
             this.dialog = true
             this.listindex=index;
         },
         dialogclose(){
             this.dialog = false
         },
         deltype(){
             if(this.listindex==0){
                 alert("这个是默认分类，不能删除");
                 this.dialog = false
             }
             else {
                 this.$store.dispatch('listdel',this.listindex)
                 this.dialog = false;
             }

         }
     },
     components:{
         tree
     },

 }
</script>

<style>
    .delbtn{
        display: inline-block;
        position: absolute;
        top:15px;
        left: 75%;
    }
    .btnshow{
        display: none;
    }
    .btnshow2{
        display: block;
         }
</style>