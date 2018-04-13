<template>
    <transition name="slide">
          <div class="singer-detail"></div>
    </transition>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import { ERR_OK } from 'api/config'
import { getSingerDetail } from 'api/singer'
import { createSong } from 'common/js/song'
var player = new QMplayer();
export default{
  data(){
      return {
        songs:[]
      }
  },
  computed:{
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
            player.play(this.songs[0].mid);
           console.log(player.data)
         ;
          }
        })
      }else{
        this.$router.push('/singer')
      }
    },
    _normailzeSongs(list){
        let ret = [] 
        console.log(list,'list')
        list.forEach((item)=>{
            let  { musicData } = item;
            if(musicData.songid && musicData.albummid){
               ret.push(createSong(musicData))
            }
        })
        return ret
    }
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