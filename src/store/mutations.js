import * as types from './mutation-types'


export default{
    [types.ADD_NEWTYPENAME](state,newtype){
                    let ob={};
                    ob.title=newtype;
                    ob.children=[];
                    state.datalist.push(ob)
    },
    [types.ADD_NEWTASKNAME](state,newtask){//使用对象风格参数时，你应该把全部传入参数作为对象的属性传入。整个对象都会被作为 mutation 函数的第二个参数被传入
             let ob={};//新建对象
             ob.title=newtask.taskname;
             state.datalist[newtask.taskindexnum].children.push(ob);
             if(state.datalist[newtask.taskindexnum].children.length==0){
                 state.datalist[newtask.taskindexnum].children[0].children=[];
                 let newob={
                     contitle:"",
                     summary:"",
                     time:"",
                     content:"",
                     finish:""
                 };
                 state.datalist[newtask.taskindexnum].children[0].children.push(newob)
             }
             else{
                 state.datalist[newtask.taskindexnum].children[state.datalist[newtask.taskindexnum].children.length-1].children=[];
                 let newob={
                     contitle:"",
                     summary:"",
                     time:"",
                     content:"",
                     finish:""
                 };
                 state.datalist[newtask.taskindexnum].children[state.datalist[newtask.taskindexnum].children.length-1].children.push(newob)
             }
    },
    [types.TASKNUM](state,num){
        //state.clicknum[0] = Object.assign({}, state.clicknum[0], {  listnum: num.listindex, tasknum: num.taskindex })
        state.clicknum=[];
        state.clicknum.push(num.listindex);
        state.clicknum.push(num.taskindex)
    },
    [types.TASKLISTNUM](state,num){
         state.tasklistnum=[];
         state.tasklistnum.push(num)
    },
    [types.TASKFINISH](state,taskstate){
            taskstate.finish=1;
    },
    [types.TASKEDIT](state,taskstate){
          taskstate.Taskedit_index.contitle=taskstate.Taskedit_title;
          taskstate.Taskedit_index.time=taskstate.Taskedit_time;
          taskstate.Taskedit_index.content=taskstate.Taskedit_content;
          taskstate.Taskedit_index.summary=taskstate.Taskedit_summary
    }
}
