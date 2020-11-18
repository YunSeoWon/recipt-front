<template lang="html">
  <div class="gnb-nav">
    <ul class="menu-bar">
      <li href="#">
        <a href="#">인기</a>
      </li>
      <li>
        <a href="#">주재료</a>
      </li>
      <li>
        <a href="#">종류</a>
      </li>
      <li>
        <a href="#">시간</a>
      </li>
      <li>
        <a href="#">가격</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.gnb-nav {
  height: 50px;
  background-color: #fcb241;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.menu-bar > li {
  list-style-type: none;

  float: left;
  width: 120px;
}

.menu-bar > li > a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
  font: normal normal 18px godo;
}

.menu-bar > li > a:hover {
  color: yellow;
  background-color: #ffa011;
}

</style>
