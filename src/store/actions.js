import  * as types from './mutation-types'
export const selectPlay = function({commit,state},{list,index}){
    console.log('index',index,types.SET_CURRENT_INDEX)
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_PLAYLIST,list)
    commit(types.SET_CURRENT_INDEX, index)
    commit(types.SET_FULL_SCRREN, true)
    commit(types.SET_PlAYING_STATE,true)
  
}