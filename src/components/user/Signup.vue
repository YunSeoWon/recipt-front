<template>
  <div>
    <ReciptHeader/>
    <MenuBar/>
    <main>
      <div class="signup-area">
        <h1 class="signup-title">회원가입</h1>
        <form class="signup-form" method="post" @submit.prevent="requestSignUp">
          <input class="recipt-input signup-input" placeholder="이메일" v-model="email"/>
          <span class="input-warning-message" v-show="checks.email==false">이메일 형식으로 작성해주세요.</span>
          <span class="input-correct-message" v-show="checks.email==true">이메일 형식이 올바릅니다.</span>
          <input class="recipt-input signup-input" placeholder="비밀번호" v-model="password" type="password"/>
          <span class="input-warning-message" v-show="checks.password==false">비밀번호는 8~15자로 최소 하나 이상의 영문자, 숫자와 특수문자가 필요합니다.</span>
          <span class="input-correct-message" v-show="checks.password==true">패스워드 형식이 올바릅니다.</span>
          <input class="recipt-input signup-input" placeholder="비밀번호 확인" v-model="passwordCheck" type="password"/>
          <span class="input-warning-message" v-show="checks.passwordCheck==false">입력하신 비밀번호와 일치하지 않습니다.</span>
          <span class="input-correct-message" v-show="checks.passwordCheck==true">입력하신 비밀번호와 일치합니다.</span>
          <input class="recipt-input signup-input" placeholder="닉네임" v-model="nickname"/>
          <span class="input-warning-message" v-show="checks.nickname==false">닉네임은 최소 1자에서 최대 6자까지 가능합니다.</span>
          <span class="input-correct-message" v-show="checks.nickname==true">닉네임을 올바르게 입력하였습니다.</span>
          <input class="recipt-input signup-input" placeholder="휴대전화 번호" v-model="mobile"/>
          <span class="input-warning-message" v-show="checks.mobile==false">휴대전화 번호 양식이 올바르지 않습니다. (ex.010-1234-5678)</span>
          <span class="input-correct-message" v-show="checks.mobile==true">휴대전화 번호를 올바르게 입력하였습니다.</span>
          <input class="recipt-signup-button recipt-button" type="submit" value="가입하기"/>
        </form>
      </div>
    </main>
    <ReciptFooter/>
  </div>
</template>

<script>
import ReciptHeader from '../ReciptHeader.vue'
import MenuBar from '../MenuBar.vue'
import ReciptFooter from '../ReciptFooter.vue'
import axios from 'axios'

export default {
  components: {
    'ReciptHeader': ReciptHeader,
    'MenuBar': MenuBar,
    'ReciptFooter': ReciptFooter
  },
  data() {
    return {
      emailExp: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
      passwordExp: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
      mobileExp: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,

      email: '',
      password: '',
      passwordCheck: '',
      nickname: '',
      mobile: '',

      checks: {
        email: null,
        password: null,
        passwordCheck: null,
        nickname: null,
        mobile: null
      }
    }
  },
  watch: {
    email(val) {
      this.checks.email = this.emailExp.test(val)
    },
    password(val) {
      this.checks.password = this.passwordExp.test(val)
    },
    passwordCheck(val) {
      this.checks.passwordCheck = this.checks.password && (this.password === this.passwordCheck)
    },
    nickname(val) {
      this.checks.nickname = 0 < val.length && val.length <= 6
    },
    mobile(val) {
      this.checks.mobile = this.mobileExp.test(val)
    }
  },
  methods: {
    requestSignUp(e) {
      if (!Object.values(this.checks).every(x => x)) return;

      const requestBody = {
        email: this.email,
        password: this.password,
        nickname: this.nickname,
        mobileNo: this.mobile
      };

      axios.post(`${env.process.VUE_APP_API_URL}/members`, requestBody)
      .then(res => {
        alert("회원가입을 완료하였습니다.");
        window.location.href="/user/login";
      })
      .catch(err => {
        alert("회원가입 실패하였습니다. 다시 한 번 시도해주십시오.")
      })
    }
  }
}
</script>

<style>
.signup-area {
  display: flex;
  width: 400px;
  flex-direction: column;
}
.signup-title {
  align-self: center;
  margin: 200px 0px 30px 0px;
  font: normal normal 40px godo;
}

.signup-form {
  display: flex;
  flex-direction: column;
}

.signup-input {
  height: 40px;
  font-size: 15px;
}

.recipt-signup-button {
  margin-top: 30px;
  height: 50px;
}

.input-warning-message {
  color: #ff3200;
  margin: 10px 0px 10px 3px;
}

.input-correct-message {
  color: #03db00;
  margin: 10px 0px 10px 3px;
}

</style>
