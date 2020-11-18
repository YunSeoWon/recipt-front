<template lang="html">
  <header class="recipt-header">
    <img class="recipt-logo" v-bind:src="logo" v-on:click="goHome"/>
    <SearchBar class="search-bar"></SearchBar>
    <CircleMenus class="circle-menus"></CircleMenus>
  </header>
</template>

<script>
import SearchBar from './common/SearchBar.vue'
import reciptLogo from '../assets/recipt-logo.png'
import CircleMenus from './common/CircleMenus.vue'

export default {
  components: {
    'SearchBar': SearchBar,
    'CircleMenus': CircleMenus
  },
  data() {
    return {
      logo: reciptLogo
    }
  },
  methods: {
    goHome() {
      console.log(process.env);
      window.location.href="/";
    }
  }
}
</script>

<style lang="css" scoped>
.recipt-header {
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.recipt-logo {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 80%;
}

.search-bar {
  margin-left: 50px;
  margin-right: 180px;
}

</style>
