<template lang="html">
  <div class="recipt-circle-menus">
      <button class="circle-button">
        <i class="fa fa-shopping-cart fa-2x"></i>
      </button>
      <button class="circle-button" v-on:click="goProfilePage">
        <i class="fa fa-user fa-2x"></i>
      </button>
  </div>
</template>

<script>
import LoginUtils from '@/utils/LoginUtils.js'
import LocalStorageKeys from '@/constants/LocalStorageKeys.js'

export default {
  data() {
    return {
      profileUrl: '/user/profile',
      loginUrl: '/user/login'
    }
  },
  methods: {
    goProfilePage() {
      if(LoginUtils.isLogined()) {
        window.location.href = this.profileUrl
      } else {
        console.log(this.loginUrl)
        window.location.href = this.loginUrl
      }
    }
  }
}
</script>

<style lang="css" scoped>
.recipt-circle-menus {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
}
.circle-button {
  height: 100%;
  width: 50px;
  border-radius: 100%;
  border: 1px solid #ffa011;
  background-color: #fcb241;
  margin: 5px;
}
</style>
