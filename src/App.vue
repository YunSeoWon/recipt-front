<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
console.log(process.env)
</script>

<style>
@@font-face {
  font-family: godo;
  src: '../fonts/godoM.ttf';
}

main {
  display: flex;
  height: 90vh;
  background-color: #f2f2f2;
  flex-direction: row;
  justify-content: center;
}

.recipt-button {
  border: 1px solid #ffa011;
  background-color: #fcb241;
  border-radius: 7px;
  font-style: normal;
  font-weight: normal;
  font-family: godo;
}
.recipt-button:hover {
  background-color: #ffa011;
}

.recipt-input {
  border: 1px solid #ddd;
  padding: 10px;
}

</style>
