import * as types from './mutation-types'


export default{
    [types.ADD_NEWTYPENAME](state,newtype){
                    let ob={};
                    ob.title=newtype;
                    state.datalist.push(ob)
    }
}
