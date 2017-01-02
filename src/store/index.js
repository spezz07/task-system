import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const  state = {
         datalist:[
             {
                 title:"任务1",
                 children:[
                     {
                         title:"11111",
                         children:[{title:"12222"}]
                     },
                     {
                         title:"22222",
                         children:[
                             {title:"22222"}
                         ]
                     },
                     {
                         title:"333",
                         children:[
                             {title:"3333"}
                         ]
                     }
                 ]
             },
             {
                 title:"任务2",
                 children:[
                     {
                         title:"44444",
                         children:[
                             {title:"12222"}
                         ]
                     },
                     {
                         title:"55555",
                         children:[
                             {title:"22222"}
                         ]
                     }
                 ]
             },
             {
                 title:"任务3",
                 children:[
                     {
                         title:"66666",
                         children:[
                             {title:"12222"}
                         ]
                     },
                     {
                         title:"7777",
                         children:[
                             {title:"22222"}
                         ]
                     }
                 ]
             },
         ]
};

export  default  new  Vuex.Store({
    state,
    mutations,
    actions
})