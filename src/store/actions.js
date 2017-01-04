import * as types from './mutation-types'



export default {
    addtypename({commit},newtype){
        commit(types.ADD_NEWTYPENAME,newtype)
    },
    addtaskname({commit},newtask){
        commit(types.ADD_NEWTASKNAME,newtask)
    },
    tasknum_now({commit},num){
        commit(types.TASKNUM,num)
    },
    tasklist_now({commit},num){
        commit(types.TASKLISTNUM,num)
    },
}