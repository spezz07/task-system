import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const  state = {
         datalist:[
             {
                 title:"任务1",
                 children:[
                     {
                         title:"11111",
                         children:[
                         {title:"12222"}
                     ]
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
                         title:"11111",
                         children:[
                             {title:"12222"}
                         ]
                     },
                     {
                         title:"44444",
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
                         title:"11111",
                         children:[
                             {title:"12222"}
                         ]
                     },
                     {
                         title:"22222",
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
})