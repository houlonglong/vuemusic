<template>
    <div class="singer">
          
    </div>
</template>

<script>
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import  Singer  from 'common/js/singer'
const HOT_NAME = '热门'
const HOT_SINGR_LEN = 10
export default {
  data(){
     return{
        singers:[]
     }
  },
  created(){
    this._getSingerList()
  },
  methods:{
      _getSingerList(){
        getSingerList().then((res)=>{
            if(res.code === ERR_OK ){
                this.singers = res.data.list
                this.__normlizeSlinger(res.data.list)
            }
        })
      },
      __normlizeSlinger(list){
            //热门数据和聚合数据
            let map={
                hot:{
                    title:HOT_NAME,
                    items:[]
                }
            }
            list.forEach((itme,index) => {
                if(index < HOT_SINGR_LEN){
                    map.hot.items.push(new Singer(itme.Fsinger_mid,itme.Fsinger_name))
                }
                //聚类
                const key = itme.Findex
                if(!map[key]){
                    map[key] = {
                        title:key,
                        itmes:[]
                    }
                }
                map[key].itmes.push(new Singer(itme.Fsinger_mid,itme.Fsinger_name))
            });
            //为了得到有序列表
            let hot = [],ret = [];
            for(let key in map){
                let val = map[key]
                if(val.title.match(/[a-zA-z]/)){
                    ret.push(val)
                }else if(val.title === HOT_NAME){
                    hot.push(val)
                }
            }
            ret.sort((a,b)=>{
                return a.title.charCodeAt(0) - b.title.charCodeAt(0)
            })
            //console.log([...hot, ...ret] , hot.concat(ret) )
           return [...hot, ...ret]
         
      }
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position : fixed
    top: 88px 
    bottom: 0
    width: 100% 
</style>
