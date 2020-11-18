<template lang="html">
  <div class="recipt-circle-menus">
      <button class="circle-button">
        <i class="fa fa-shopping-cart"></i>
      </button>
      <button class="circle-button" v-on:click="goLogin">
        <i class="fa fa-user"></i>
      </button>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      window.location.href = "/user/login"
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
