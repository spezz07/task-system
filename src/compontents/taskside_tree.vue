<template>
    <div>
            <mu-list-item    v-for="item in model.children"  :open="false"  slot="nested" v-if="isNext"  ><!--标题-->
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
          }
      },
     props:['model'],
     computed:{
           isNext(){
              return this.model.children&&this.model.children.length
           } ,

     },
     methods:{

     }

 }
</script>
 <style>

 </style>