<template>
<div>
    <mu-list  v-for="(item,index) in task" >
        <mu-sub-header inset >{{ item.time }}</mu-sub-header>
        <mu-list-item describeText="已完成" v-if="item.finish==1" :title="item.contitle" @click="chick_tasklist(index)">
            <mu-avatar icon="assignment" backgroundColor="blue" slot="leftAvatar"/>
            <br/>
             {{item.summary}}
            <br/>
            </mu-list-item>
        <mu-list-item  describeText="没完成" :title="item.contitle" v-else-if="item.finish==0"  @click="chick_tasklist(index)" >
            <mu-avatar icon="assignment" backgroundColor="yellow600" slot="leftAvatar"  />
            <br/>
            {{item.summary}}
            <br/>
        </mu-list-item>
        <mu-divider inset/>
    </mu-list>




</div>
</template>
<script>
    export default{
        data(){
            return{
             tasklist_index:""
            }
        },
        methods:{
          chick_tasklist(index){
              this.tasklist_index=index;
              this.$store.dispatch("tasklist_now",this.tasklist_index)//传出当前点击的index
          }
        },
        computed:{
            listnum(){
                return this.$store.state.clicknum[0]
            },
            tasknum(){
                return  this.$store.state.clicknum[1]
            },
            task(){
                return this.$store.state.datalist[this.listnum].children[this.tasknum].children
            }
        }
    }

</script>