<template>
  <div>
    <ReciptHeader/>
    <MenuBar/>
    <Profile/>
    <ReciptMain/>
    <ReciptFooter/>
  </div>
</template>

<script>
import ReciptHeader from './ReciptHeader.vue'
import MenuBar from './MenuBar.vue'
import Profile from './member/Profile.vue'
import ReciptMain from './ReciptMain.vue'
import ReciptFooter from './ReciptFooter.vue'

export default {
  components: {
    'ReciptHeader': ReciptHeader,
    'MenuBar': MenuBar,
    'Profile': Profile,
    'ReciptMain': ReciptMain,
    'ReciptFooter': ReciptFooter
  }
}
</script>

<style>

</style>
