<template>
    <div>
            <mu-list-item v-for="(item,index) in model.children"  :open="false"  slot="nested"  @click="tasknum_click(index,$event)"><!--标题-->
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <mu-icon slot="right" value="class"  color="blue" /><!--标题图标-->
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
           },

     },
     methods:{
         tasknum_click(index,event){
             let el=event.currentTarget;
             this.tasknum = index;
             this.listnum = this.modelnum;
             this.$store.dispatch({
                 type: "tasknum_now",
                 taskindex:this.tasknum,
                 listindex:this.listnum,
                 el:el
             })

         }
     }

 }
</script>
 <style>

 </style>