<template>
    <div>
            <mu-list-item v-for="(item,index) in model.children"  :open="false"  slot="nested"  @click="tasknum_click(index)" ><!--标题-->
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <mu-icon slot="right" value="class"  /><!--标题图标-->
                   {{ item.title }}
            </mu-list-item>
    </div>
</template>


<script>

 export default{

     data(){
          return{
              open:false,
              tasknum:"",
              listnum:""

          }
      },
     props:['model','modelnum'],
     computed:{
           isNext(){
              return this.model.children&&this.model.children.length
           }
     },
     methods:{
         tasknum_click(index){
             this.tasknum = index;
             this.listnum = this.modelnum;
             this.$store.dispatch({
                 type: "tasknum_now",
                 taskindex:this.tasknum,
                 listindex:this.listnum
             })

         }
     }

 }
</script>
 <style>

 </style>