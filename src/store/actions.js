import * as types from './mutation-types'


export default {
    addtypename({commit},newtype){
        commit(types.ADD_NEWTYPENAME,newtype)
    }
}