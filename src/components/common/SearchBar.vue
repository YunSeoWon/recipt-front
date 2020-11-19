<template lang="html">
  <div class="recipt-search-bar-area">
      <input class="recipt-search-bar" placeholder="검색어를 입력하세요."/>
      <button class="search-button recipt-button ">
        <i class="fa fa-search fa-lg"></i>
      </button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.recipt-search-bar-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
}
.recipt-search-bar {
  width: 400px;
  padding: 0px;
  height: 100%;
  padding-right: 10px;
  border: 1px solid #DDD;
  border-radius: 7px 0px 0px 7px;
  text-align: right;
}
.search-button {
  flex: auto;
  height: 100%;
  width: 50px;
  border-left: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>
