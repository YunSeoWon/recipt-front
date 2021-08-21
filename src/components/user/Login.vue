<template>
  <main>
    <div class="login-area">
      <h1 class="login-title">로그인</h1>
      <form class="login-form" method="post" @submit.prevent="requestLogin">
        <input class="recipt-input login-input" v-model="email" placeholder="이메일"/>
        <input class="recipt-input login-input" v-model="password" placeholder="비밀번호" type="password"/>
        <input class="recipt-login-button recipt-button" type="submit" value="로그인"/>
      </form>

      <div class="other-service-area">
        <button class="recipt-button" v-on:click="goSignup">회원가입</button>
        <button class="recipt-button">아이디/비밀번호 찾기</button>
      </div>
    </div>
  </main>
</template>

<script>
import ReciptApi from '@/http/ReciptApi.js'

import LocalStorageKeys from '@/constants/LocalStorageKeys.js'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    goSignup() {
      window.location.href="/user/signup"
    },
    requestLogin() {
      if (this.email === '' || this.password === '') {
        alert("이메일과 비밀번호를 입력해주세요.");
        return;
      }

      const requestBody = {
        email: this.email,
        password: this.password
      };

      let api = new ReciptApi();

      api.getToken(requestBody)
        .then(res => {
          console.log(res);
          localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, res.data.accessToken)
          localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, res.data.refreshToken)
          window.location.href=document.referrer
        })
        .catch(err => {
          alert("존재하지 않은 이메일이거나 비밀번호가 일치하지 않습니다.")
        })
    }
  }
}
</script>

<style>
.login-area {
  display: flex;
  width: 400px;
  flex-direction: column;
}
.login-title {
  align-self: center;
  margin: 200px 0px 30px 0px;
  font: normal normal 40px godo;
}

.login-form {
  display: flex;
  flex-direction: column;
}
.login-input {
  height: 50px;
  font-size: 15px;
}
.recipt-login-button {
  margin-top: 30px;
  height: 60px;
}
.other-service-area {
  width: 100%;
  align-self: center;
  margin-top: 70px;
  display: flex;
  flex-direction: row;
}
.other-service-area > .recipt-button {
  flex: 1;
  height: 50px;
}

</style>
