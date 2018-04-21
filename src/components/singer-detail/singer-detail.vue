<template>
    <transition name="slide">
       <music-list :title="title" :bg-image="bgImage"  :songs="songs"></music-list>
    </transition>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import { ERR_OK } from 'api/config'
import { getSingerDetail } from 'api/singer'
import { createSong } from 'common/js/song'
import  MusicList  from 'components/music-list/music-list'
var player = new QMplayer();
export default{
  data(){
      return {
        songs:[]
      }
  },
  computed:{
    title(){
      return this.singer.name
    },
    bgImage(){
       return this.singer.avatar
    },
  ...mapGetters([
      'singer'
    ]),
  },
  created(){

  
    this._getDetail()
  },
  methods:{
    _getDetail(){
        const singerId = this.singer.id 
        if(singerId){
          getSingerDetail(singerId).then((res)=>{
          if(res.code === ERR_OK){
            this.songs = this._normailzeSongs(res.data.list)
         ;
          }
        })
      }else{
        this.$router.push('/singer')
      }
    },
    _normailzeSongs(list){
        let ret = [] 
        list.forEach((item)=>{
            let  { musicData } = item;
            if(musicData.songid && musicData.albummid){
               ret.push(createSong(musicData))
            }
        })
        return ret
    }
  },
  components:{
    MusicList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .singer-detail
    position : fixed
    z-index : 100
    top : 0
    left : 0
    right : 0
    bottom : 0
    background : $color-background     
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>