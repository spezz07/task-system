<template>
    <div>
        <br>
        <div>
        <mu-flat-button label="所有"  @click="allcontent" class="demo-flat-button" :color="contentcolor"></mu-flat-button>
        <mu-flat-button label="已完成" class="demo-flat-button" @click="finish"   :color="fincolor" ></mu-flat-button>
        <mu-flat-button label="未完成" class="demo-flat-button" @click="unfinish"  :color="unfincolor" ></mu-flat-button>
        </div>
        <br><br>
        <mu-divider inset/>

        <mu-list  v-for="(item,index) in task"  >
            <mu-list-item :describeText="item.time" v-if="item.finish==1" :title="item.contitle" @click="chick_tasklist(index)" :class="{active: itemfinish}" >
                      <mu-avatar icon="assignment" backgroundColor="blue" slot="leftAvatar"/>
                  <br/>
                  {{item.summary}}
                  <br/>
              </mu-list-item>
            <mu-list-item  describeText="你还没编辑任务呢~" :title="item.contitle"  @click="chick_tasklist(index)" v-else-if="item.contitle==='' " :class="{active: itemcontent}" >
                <mu-avatar icon="assignment" backgroundColor="red300" slot="leftAvatar"  />
                <br/>
                快去右边的按钮那添加任务吧~
                <br/>
            </mu-list-item>
            <mu-list-item  :describeText="item.time" :title="item.contitle" v-else-if="item.finish===0"  @click="chick_tasklist(index)"  :class="{active: itemunfinish}"  >
                <mu-avatar icon="assignment" backgroundColor="red300" slot="leftAvatar"  />
                <br/>
                {{item.summary}}
                <br/>
            </mu-list-item>

        </mu-list>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                tasklist_index:"",
                itemfinish:false,
                itemunfinish:false,
                itemcontent:false,
                fincolor:"",
                unfincolor:"",
                contentcolor:"blue"
            }
        },
        methods:{
            chick_tasklist(index){
                this.tasklist_index=index;
                this.$store.dispatch("tasklist_now",this.tasklist_index)//传出当前点击的index
            },
            finish(){
                this.itemunfinish = true;
                this.itemcontent = true;
                this.itemfinish = false;
                this.fincolor="blue";
                this.unfincolor="";
                this.contentcolor=""


            },
            unfinish(){
                this.itemcontent = true;
                this.itemfinish = true;
                this.itemunfinish = false;
                this.fincolor="";
                this.unfincolor="blue";
                this.contentcolor=""
            },
            allcontent(){
                this.itemunfinish = false;
                this.itemcontent = false;
                this.itemfinish = false;
                this.fincolor="";
                this.unfincolor="";
                this.contentcolor="blue"
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
                    return this.$store.state.datalist[this.$store.state.clicknum[0]].children[this.$store.state.clicknum[1]].children

            },


        }
    }
</script>
<style>
    .active{
        display: none;
    }
</style>