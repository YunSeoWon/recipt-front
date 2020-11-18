<template>
  <div>
    <ReciptHeader/>
    <MenuBar/>
    <ReciptMain/>
    <ReciptFooter/>
  </div>
</template>

<script>
import ReciptHeader from './ReciptHeader.vue'
import MenuBar from './MenuBar.vue'
import ReciptMain from './ReciptMain.vue'
import ReciptFooter from './ReciptFooter.vue'

export default {
  components: {
    'ReciptHeader': ReciptHeader,
    'MenuBar': MenuBar,
    'ReciptMain': ReciptMain,
    'ReciptFooter': ReciptFooter
  }
}
</script>

<style>

</style>
