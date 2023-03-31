<template>
  <div class="login align flex column">
    <div class="font_30">通讯录系统V1.0</div>
    <div>
      <svg
        t="1679537722927"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5273"
        width="200"
        height="200"
      >
        <path
          d="M925.2 692.3l-76.4 63.8V503.8h92.1v155.1c-0.1 12.9-5.8 25.1-15.7 33.4z"
          fill="#2196F3"
          p-id="5274"
        ></path>
        <path
          d="M940.8 525.6l-92.1 76.8V350.2h92.1z"
          fill="#F44336"
          p-id="5275"
        ></path>
        <path
          d="M940.8 360.5l-92.1 76.9V152.7h92.1z"
          fill="#FFCA28"
          p-id="5276"
        ></path>
        <path
          d="M929.1 197.6l-111.8 91.9 31.5-233.6h59.4c18 0 32.6 14.6 32.6 32.6v84c0 9.7-4.3 18.9-11.7 25.1z"
          fill="#4CAF50"
          p-id="5277"
        ></path>
        <path
          d="M819 968.1H126.7c-24 0-43.5-19.5-43.5-43.5V99.4c0-24 19.5-43.5 43.5-43.5h735.8v868.7c0 24-19.4 43.5-43.5 43.5z"
          fill="#4CAF50"
          p-id="5278"
        ></path>
        <path
          d="M126.7 55.9c-24 0-43.5 19.5-43.5 43.5v825.2c0 24 19.5 43.5 43.5 43.5H217V55.9h-90.3z"
          fill="#2E7D32"
          p-id="5279"
        ></path>
        <path
          d="M862.5 924.6V841L689.4 609.4H581.3l-162.9-55.6 309.8 414.4H819c24.1-0.1 43.5-19.6 43.5-43.6z"
          fill="#43A047"
          p-id="5280"
        ></path>
        <path
          d="M493.9 538.7c-34.4-34.4-67.3-74.2-51.5-90 22.5-22.5 42.2-36.4 2.3-86.2-40-49.8-66.6-11.6-88.5 10.3C331 398 354.8 492 447.7 584.9c92.9 92.9 186.9 116.8 212.1 91.6 21.8-21.8 60-48.5 10.3-88.4-49.7-40-63.6-20.3-86.2 2.3-15.7 15.6-55.6-17.3-90-51.7z"
          fill="#E8F5E9"
          p-id="5281"
        ></path>
      </svg>
    </div>
    <div class="width240 mt10" v-if="formType === 1">
      <van-form @submit="onSubmit">
        <van-field
          :left-icon="require('@/assets/user.png')"
          v-model="username"
          name="user"
          label=""
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          :left-icon="require('@/assets/pass.png')"
          v-model="password"
          type="password"
          name="passwd"
          label=""
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 36px; align-items: center">
          <van-button
            size="small"
            round
            block
            type="primary"
            native-type="submit"
            >登录</van-button
          >
          <van-button
            class="mt5"
            size="small"
            round
            block
            type="default"
            @click="toSign(2)"
            >注册</van-button
          >
        </div>
      </van-form>
    </div>
    <div class="width240 mt10" v-show="formType === 2">
      <van-form @submit="onSubmit">
        <van-field
          :left-icon="require('@/assets/user.png')"
          v-model="username"
          name="user"
          label=""
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          :left-icon="require('@/assets/pass.png')"
          v-model="password"
          type="password"
          name="passwd"
          label=""
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          :left-icon="require('@/assets/email.png')"
          v-model="email"
          name="email"
          label=""
          placeholder="邮箱地址"
          :rules="[{ required: true, message: '请填写邮箱地址' }]"
        />
        <van-field
          :left-icon="require('@/assets/code.png')"
          v-model="code"
          name="code"
          label=""
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写邮箱验证码' }]"
        >
          <template #button>
            <van-button
              :disabled="isPostCode"
              @click="getCode"
              size="mini"
              type="primary"
              >获取验证码</van-button
            >
          </template>
        </van-field>
        <div style="margin: 36px; align-items: center">
          <van-button
            class="mt5"
            size="small"
            round
            block
            type="primary"
            native-type="submit"
            >立即注册</van-button
          >
          <van-button
            @click="toSign(1)"
            class="mt5"
            size="small"
            round
            block
            type="default"
            >返回登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { contactlogin, contactsign, contactcode } from "@/services/api";
export default {
  name: "login_page",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      code: "",
      formType: 1, // 1 login 2sign
      isPostCode: false,
    };
  },
  created() {
    //
    let params = {
      grant_type: "client_credentials",
      client_id: "aAnvV8kxG0X7qHak5h4kVExY",
      client_secret: "3ZFfWiXWcd6vwcn1qlxXjj4XIsGUShpy",
    };
    this.$store.dispatch("login/getToken", { ...params });
  },
  methods: {
    getCode() {
      if (this.email) {
        contactcode({ email: this.email }).then((res) => {
          console.log("contactcode:", res);
          if (res.success) {
            this.$notify({
              message: "验证码已发送，请查看邮箱",
              color: "#07c160",
              background: "#ffffff",
              duration: 3000,
            });
            this.isPostCode = true;
          }
        });
      } else {
        this.$notify({
          message: "请填写邮箱地址",
          color: "#F7AA2D",
          background: "#ffffff",
          duration: 2000,
        });
      }
    },
    onSubmit(values) {
      console.log("formType", this.formType);
      console.log("submit", values);
      if (this.formType === 1) {
        contactlogin(values).then((res) => {
          console.log("RR1:", res);
        });
      }
      if (this.formType === 2) {
        contactsign(values).then((res) => {
          console.log("RR2:", res);
        });
      }
      // this.$router.push({ name: "ContactList" });
    },
    toSign(type) {
      this.formType = type;
    },
  },
};
</script>

<style scoped="scss">
/* 引入第三方或自定义的字体图标样式 */
/* @font-face {
  font-family: "my-icon";
  src: url("@/assets/iconfont/iconfont.ttf") format("truetype");
}

.my-icon {
  font-family: "my-icon";
} */
.login {
  /* margin-top: 45vh; */
  padding: 50px;
}
</style>
