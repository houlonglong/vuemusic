import { playMode } from 'common/js/config'
//数据存储

const state = {
    singer:{
    },
    playing:false,
    fullScreen: false,
    playList:[],
    sequenceList:[], //随机播放
    mode:playMode.sequenct,
    currentIndex:-1

}
export default state