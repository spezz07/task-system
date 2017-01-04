<template>
    <div>
            <mu-list-item  :model="item" v-for="item in model.children"  :open="false"  slot="nested"  ><!--标题-->
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
              toggleNested:true
          }
      },
     props:['model'],
     computed:{
           isNext(){

           } ,
           isTop(){


           }
     },
     methods:{

     }

 }
</script>
 <style>

 </style>