<template lang="html">
  <div>
    <ReciptHeader/>
    <MenuBar/>
    <main>
      <div class="profile-page-area">
        <Profile/>
      </div>
    </main>
    <ReciptFooter/>
  </div>
</template>

<script>
import ReciptHeader from '@/components/ReciptHeader.vue'
import MenuBar from '@/components/MenuBar.vue'
import ReciptFooter from '@/components/ReciptFooter.vue'
import Profile from './Profile.vue'

export default {
  components: {
    'ReciptHeader': ReciptHeader,
    'MenuBar': MenuBar,
    'Profile': Profile,
    'ReciptFooter': ReciptFooter
  }
}
</script>

<style lang="css" scoped>
.profile-page-area {
  display: flex;
  flex-direction: column;
}
</style>
