import * as types from './mutation-types'


export default{
    [types.ADD_NEWTYPENAME](state,newtype){
                    let ob={};
                    ob.title=newtype;
                    state.datalist.push(ob)
    },
    [types.ADD_NEWTASKNAME](state,newtask){//使用对象风格参数时，你应该把全部传入参数作为对象的属性传入。整个对象都会被作为 mutation 函数的第二个参数被传入
        let ob={};//新建对象
        ob.title=newtask.taskname;
        if(state.datalist[newtask.taskindexnum].children){//判断是否是state原有的数据
            state.datalist[newtask.taskindexnum].children.push(ob)

        }else {
            state.datalist[newtask.taskindexnum].children=[];//如果是新建的分类，则无children，此时新建一个Array
            state.datalist[newtask.taskindexnum].children.push(ob)
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
    }
}
