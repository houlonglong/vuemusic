<template>
  <div id="app">
      <m-header></m-header>
      <tab></tab>
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
      <player></player>
  </div>
</template>

<script>
import MHeader from 'components/herader/header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  name: 'App',
  components:{
    MHeader,
    Tab,
    Player
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  #app
    color: $color-theme
</style>
