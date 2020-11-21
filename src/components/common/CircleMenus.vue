<template lang="html">
  <div class="recipt-circle-menus">
      <button class="circle-button">
        <i class="fa fa-shopping-cart fa-2x"></i>
      </button>
      <button class="circle-button" v-on:click="goLoginOrProfilePage">
        <i class="fa fa-user fa-2x"></i>
      </button>
  </div>
</template>

<script>
import CookieKeys from '@/constants/CookieKeys.js'
import CookieUtils from '@/utils/CookieUtils.js'

export default {
  methods: {
    goLoginOrProfilePage() {
      const accessToken = CookieUtils.getCookie(CookieKeys.ACCESS_TOKEN);

      if (accessToken == null) {
        window.location.href = "/user/login";
      } else {
        window.location.href = "/user/profile";
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
