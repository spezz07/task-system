import * as types from './mutation-types';
import Vue from "vue";

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
            state.tasklistnum[0]=0
    },
    [types.TASKNUM](state,num){
        // Object.assign({}, state.clicknum[0], {  listnum: num.listindex, tasknum: num.taskindex })
        state.clicknum=[];
        state.clicknum.push(num.listindex);
        state.clicknum.push(num.taskindex);
        state.eventtarget.event=num.el
    },
    [types.TASKLISTNUM](state,num){
         state.tasklistnum=[];
         state.tasklistnum.push(num)
    },
    [types.TASKFINISH](state,taskstate){
            Vue.set(taskstate,"finish",1);
            //taskstate.finish=1;
    },
    [types.TASKEDIT](state,taskstate){
        let newob={
                contitle:taskstate.Taskedit_title,
                time:taskstate.Taskedit_time,
                content:taskstate.Taskedit_content,
                summary:taskstate.Taskedit_summary
            };
                Object.assign(taskstate.Taskedit_index,newob)
            //Vue.set(taskstate.Taskedit_index,"contitle",taskstate.Taskedit_title);
            //Vue.set(taskstate.Taskedit_index,"time",taskstate.Taskedit_time);
            //Vue.set(taskstate.Taskedit_index,"content",taskstate.Taskedit_content);
            //Vue.set(taskstate.Taskedit_index,"summary",taskstate.Taskedit_summary);

            // taskstate.Taskedit_index.contitle=taskstate.Taskedit_title;
            // taskstate.Taskedit_index.time=taskstate.Taskedit_time;
            //taskstate.Taskedit_index.content=taskstate.Taskedit_content;
            // taskstate.Taskedit_index.summary=taskstate.Taskedit_summary
    },
    [types.TASKEVEVT](state,events){//新增分类和编辑时候，模拟点击此时任务树，从而触发视图更新
        events.click()
    },
    [types.LISTDEL](state,listnum){
        state.datalist.splice(listnum,1)
    }
}
