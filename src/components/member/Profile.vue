<template lang="html">
  <div class="profile-area">
    <img id="profile-image" v-bind:src="defaultImage"/>
    <div class="profile-info-area">
      <div class="profile-info-top">
        <span class="profile-info-name" v-text="nickname"/>
        <ul class="profile-counting-info fa-ul">
          <li>
            <i class="fa fa-li fa-users"/> {{ followerCount }}
          </li>
          <li>
            <i class="fa fa-li fa-eye"/> {{ followingCount }}
          </li>
          <li>
            <i class="fa fa-li fa-heart"/> {{ totalRecipeLikeCount }}
          </li>
          <li>
            <i class="fa fa-li fa-clipboard"/> {{ totalRecipePostingCount }}
          </li>
        </ul>
      </div>
      <div class="profile-info-content">
        <p v-text="introduction"/>
      </div>
      <div class="profile-info-buttom">
        <img class="profile-cook-thumbnail" v-bind:src="samples[0]"/>
        <img class="profile-cook-thumbnail" v-bind:src="samples[1]"/>
        <img class="profile-cook-thumbnail" v-bind:src="samples[2]"/>
      </div>
    </div>
  </div>
</template>

<script>
import defaultProfileImage from '@/assets/default-profile-image.jpg'
import sample1 from '@/assets/sample1.jpeg'
import sample2 from '@/assets/sample2.jpeg'
import sample3 from '@/assets/sample3.jpeg'
import axios from 'axios'

import CookieKeys from '@/constants/CookieKeys.js'
import CookieUtils from '@/utils/CookieUtils.js'

export default {
  data() {
    return {
      nickname: '',
      introduction: '',
      followerCount: 0,
      followingCount: 0,
      totalRecipeLikeCount: 0,
      totalRecipePostingCount: 0,
      profileImageUrl: null,
      defaultImage: defaultProfileImage,
      samples: [
        sample1, sample2, sample3
      ]
    }
  },

  // life cycle

  created() {
    const accessToken = CookieUtils.getCookie(CookieKeys.ACCESS_TOKEN);

    if (accessToken == null) {
      window.location.href = "/";
      return;
    }

    axios.get(`${process.env.VUE_APP_API_URL}/members/profiles/me`,
      {
        headers: {
          'reciptAccessToken': accessToken
        }
      }
    ).then(res => {
      this.nickname = res.data.nickname;
      this.introduction = res.data.introduction;
      this.followerCount = res.data.followerCount;
      this.profileImageUrl = res.data.profileImageUrl;
    })
  }
}
</script>

<style lang="css" scoped>
.profile-area {
  max-width: 800px;
  height: 300px;
  margin: 10px 0px 10px 0px;
  background-color: #000;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#profile-image {
  width: 200px;
}
.profile-info-area {
  background-color: black;
  flex-grow: 1;

  padding: 0px 30px 0px 30px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
}

.profile-info-top {
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;

  flex-grow: 1;
  align-items: flex-end;
  border-bottom: 1px solid gray;
}
.profile-info-name {
  font-size: 30px;
}
.profile-counting-info {
  margin-left: 50px;
}
.fa-ul {
  margin-bottom: 0px;
}
.profile-counting-info > li {
  float: left;
  margin-right: 40px;
}

.profile-info-content {
  flex-grow: 2;
  border-bottom: 1px solid gray;
}

.profile-info-buttom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
}
.profile-cook-thumbnail {
  margin: 0px 15px 0px 15px;
  width: 120px;
  height: auto;
}
</style>
