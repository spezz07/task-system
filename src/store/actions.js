import * as types from './mutation-types'



export default {
    addtypename({commit},newtype){
        commit(types.ADD_NEWTYPENAME,newtype)
    },
    addtaskname({commit},newtask){
        commit(types.ADD_NEWTASKNAME,newtask)
    },
    tasknum_now({commit},num){//获取此时点击的任务树index和children的index
        commit(types.TASKNUM,num)
    },
    tasklist_now({commit},num){//获取此时点击的具体任务list的index
        commit(types.TASKLISTNUM,num)
    },
    taskfinsh({commit},taskstate){//点击任务任务完成，修改任务状态
        commit(types.TASKFINISH,taskstate)
    },
    taskedit({commit},taskstate){//编辑任务
        commit(types.TASKEDIT,taskstate)
    },
    updatalist({commit},events){//视图更新
        commit(types.TASKEVEVT,events)
    },
    listdel({commit},listnum){//删除分类
        commit(types.LISTDEL,listnum)
    },
    TaskConDel({commit}){//删除分类
        commit(types.CONTENTDEL)
    },
    DelTree({commit}){//删除分类
        commit(types.TASKTREE)
    }
}