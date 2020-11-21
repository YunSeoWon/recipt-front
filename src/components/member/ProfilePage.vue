<template lang="html">
  <main>
    <div class="profile-page-area">
      <Profile/>
    </div>
  </main>
</template>

<script>
import Profile from './Profile.vue'

export default {
  components: {
    'Profile': Profile
  }
}
</script>

<style lang="css" scoped>
.profile-page-area {
  display: flex;
  flex-direction: column;
}
</style>
