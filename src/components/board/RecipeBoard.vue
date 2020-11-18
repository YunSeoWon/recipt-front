<template lang="html">
  <div class="recipt-board">
    <h1>급상승 레시피</h1>
    <div class="recipe-previews">
      <div class="recipe-items">레시피1</div>
      <div class="recipe-items">레시피2</div>
      <div class="recipe-items">레시피3</div>
      <div class="recipe-items">레시피4</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.recipt-board{
  display: flex;
  flex-direction: column;
  background-color: #ffe5bf;
  width: 80vw;
  height: 550px;
}
.recipt-board > h1 {
  margin: 20px 0px 10px 30px;
}
.recipe-previews {
  margin-left: 30px;
  margin-right: 30px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  flex: none;
}

.recipe-previews > .recipe-items {
  display: inline-block;
  background-color: white;
  width: 300px;
  height: 450px;
  margin: 5px 40px 30px 5px;
}
</style>
