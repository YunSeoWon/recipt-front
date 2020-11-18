<template lang="html">
  <main>
    <div class="recipe-boards">
      <RecipeBoard class="recipe-board-item"/>
      <RecipeBoard class="recipe-board-item"/>
      <RecipeBoard class="recipe-board-item"/>
    </div>
  </main>
</template>

<script>
import RecipeBoard from './board/RecipeBoard.vue'

export default {
  components: {
    'RecipeBoard': RecipeBoard
  }
}
</script>

<style lang="css" scoped>
.recipe-boards {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow-y: scroll;
}

.recipe-boards > .recipe-board-item {
  margin: 10px;
}

</style>
