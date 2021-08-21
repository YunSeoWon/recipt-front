<template lang="html">
  <div class="profile-area">
    <div class="profile-content-area">
      <img id="profile-image" v-bind:src="defaultImage"/>
      <div class="profile-info-area">
        <div class="profile-info-top">
          <input class="profile-info-name edit-input" v-model="nickname" :disabled="!edited"/>
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
          <textarea class="profile-introduction edit-input" v-model="introduction" :disabled="!edited"/>
        </div>
        <div class="profile-info-buttom">
          <img class="profile-cook-thumbnail" v-bind:src="samples[0]"/>
          <img class="profile-cook-thumbnail" v-bind:src="samples[1]"/>
          <img class="profile-cook-thumbnail" v-bind:src="samples[2]"/>
        </div>
      </div>
    </div>
    <div class="profile-menu-area">
      <button class="profile-button" v-if="!edited" v-on:click="enableEdit()">
        <i class="fa fa-edit fa-3x"/>
      </button>
      <button class="profile-button" v-if="edited" v-on:click="reset()">
        <i class="fa fa-undo fa-3x"/>
      </button>
      <button class="profile-button" v-if="edited" v-on:click="cancel()">
        <i class="fa fa-window-close fa-3x"/>
      </button>
      <button class="profile-button" v-if="edited" v-on:click="save()">
        <i class="fa fa-save fa-3x"/>
      </button>
    </div>
  </div>
</template>

<script>
import defaultProfileImage from '@/assets/default-profile-image.jpg'
import sample1 from '@/assets/sample1.jpeg'
import sample2 from '@/assets/sample2.jpeg'
import sample3 from '@/assets/sample3.jpeg'
import ReciptApi from '@/http/ReciptApi.js'

import LoginUtils from '@/utils/LoginUtils.js'

export default {
  data() {
    return {
      defaultImage: defaultProfileImage,

      nickname: '',
      introduction: '',
      profileImageUrl: null,
      samples: [
        sample1, sample2, sample3
      ],

      followerCount: 0,
      followingCount: 0,
      totalRecipeLikeCount: 0,
      totalRecipePostingCount: 0,

      edited: false,

      initial: null
    }
  },

  // life cycle

  created() {
    const accessToken = LoginUtils.getToken()
    let api = new ReciptApi()

    api.getMyProfile(accessToken)
      .then(res => {
        this.nickname = res.data.nickname;
        this.introduction = res.data.introduction;
        this.followerCount = res.data.followerCount;
        this.profileImageUrl = res.data.profileImageUrl;
      })
  },

  methods: {
    saveInitial() {
      this.initial = {
          nickname: this.nickname,
          introduction: this.introduction,
          profileImageUrl: this.profileImageUrl,
          samples: this.samples
      }
    },

    enableEdit() {
      this.edited = true;
      this.saveInitial();
    },

    reset() {
      this.nickname = this.initial.nickname;
      this.introduction = this.initial.introduction;
      this.profileImageUrl = this.initial.profileImageUrl;
      this.samples = this.initial.samples;
    },

    cancel() {
      if (confirm("프로필 변경을 취소하시겠습니까?")) {
        this.reset();
        this.edited = false;
      }
    },

    save() {
      if (confirm("프로필을 변경하시겠습니까?")) {
        this.saveRequest();
      }
    },

    saveRequest() {
      const accessToken = LoginUtils.getToken();
      let api = new ReciptApi();
      let requestBody = {
        nickname: this.nickname,
        introduction: this.introduction,
        profileImageUrl: this.profileImageUrl
      }

      // TODO: 대표 레시피 사진 추가 필요.
      api.updateMyProfile(requestBody, accessToken)
        .then(res => {
          this.edited = false;
        })
    }
  },
  watch: {
    introduction(val) {
      if (val.split('\n').length >= 5) {
        alert("소개글은 최대 4줄까지 작성 가능합니다.");
        this.introduction = val.substr(0, val.length - 1);
      }
    }
  }
}
</script>

<style lang="css" scoped>
.profile-area {
  max-width: 800px;
  height: 350px;
  margin: 10px 0px 10px 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.profile-content-area {
  height: 300px;
  background-color: #000;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.profile-menu-area {
  height: 50px;
  background-color: #eee;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 10px 0px 10px;
}

.profile-menu-area > button {
  margin-left: 10px;
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
.edit-input {
  text-align: left;
  font-size: 30px;
  background-color: rgba( 255, 255, 255, 0 );
  border-color: rgba( 255, 255, 255, 0 );
  color: #fff
}
.edit-input:focus {
  outline: none;
}
.profile-introduction {
  resize: none;
  margin: 0px;
  padding: 5px;
  height: 100%;
  font-size: 16px;
}
.profile-button {
  border: 0px;
}
</style>
