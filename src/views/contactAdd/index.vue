<template>
  <div class="main flex-column bg_gray">
    <div class="flex flex-center pt20">
      <svg
        t="1676537057958"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4632"
        width="80"
        height="80"
      >
        <path
          d="M512 0c281.6 0 512 230.4 512 512s-230.4 512-512 512S0 793.6 0 512 230.4 0 512 0z m115.2 505.6C672 467.2 704 416 704 352c0-108.8-83.2-192-192-192s-192 83.2-192 192c0 64 32 115.2 76.8 153.6C294.4 550.4 224 652.8 224 768c0 19.2 12.8 32 32 32s32-12.8 32-32c0-121.6 102.4-224 224-224s224 102.4 224 224c0 19.2 12.8 32 32 32s32-12.8 32-32c0-115.2-70.4-217.6-172.8-262.4zM512 480c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128-57.6 128-128 128z"
          p-id="4633"
        ></path>
      </svg>
    </div>
    <div class="flex flex-center">{{ info.name || "-" }}</div>
    <div class="flex flex-around align pl10 pr10 mb20 mt20">
      <div
        style="position: relative"
        class="width100 height80 column flex flex-center align ta_c radius10 bg_white"
      >
        <svg
          t="1680144078330"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4850"
          width="100"
          height="70"
        >
          <path
            d="M0.05248 281.638046V102.44723a102.394752 102.394752 0 0 1 102.394752-102.394753h179.190817a24.062767 24.062767 0 0 1 25.598688 25.598688 24.062767 24.062767 0 0 1-25.598688 25.598688H102.447232a51.197376 51.197376 0 0 0-51.197376 51.197377v179.190816a24.062767 24.062767 0 0 1-25.598688 25.598688 24.062767 24.062767 0 0 1-25.598688-25.598688z m51.197376 460.776385v179.190817a51.197376 51.197376 0 0 0 51.197376 51.197376h179.190817a25.598688 25.598688 0 0 1 0 51.197376H102.447232a102.394752 102.394752 0 0 1-102.394752-102.394752v-179.190817a24.062767 24.062767 0 0 1 25.598688-25.598688 24.062767 24.062767 0 0 1 25.598688 25.598688z m691.164578 230.388193h179.190816a51.197376 51.197376 0 0 0 51.197377-51.197376v-179.190817a25.598688 25.598688 0 0 1 51.197376 0v179.190817a102.394752 102.394752 0 0 1-102.394753 102.394752h-179.190816a25.598688 25.598688 0 0 1 0-51.197376z m230.388193-870.355394a51.197376 51.197376 0 0 0-51.197377-51.197377h-179.190816a24.062767 24.062767 0 0 1-25.598688-25.598688 24.062767 24.062767 0 0 1 25.598688-25.598688h179.190816a102.394752 102.394752 0 0 1 102.394753 102.394753v179.190816a25.598688 25.598688 0 0 1-51.197376 0zM204.841985 281.638046a24.062767 24.062767 0 0 0-25.598689 25.598688v409.579009a24.062767 24.062767 0 0 0 25.598689 25.598688h614.368513a24.062767 24.062767 0 0 0 25.598688-25.598688V307.236734a24.062767 24.062767 0 0 0-25.598688-25.598688z m0-25.598688h614.368513a51.197376 51.197376 0 0 1 51.197376 51.197376v409.579009a51.197376 51.197376 0 0 1-51.197376 51.197376H204.841985a51.197376 51.197376 0 0 1-51.197377-51.197376V307.236734a51.197376 51.197376 0 0 1 51.197377-51.197376z m281.585568 396.779665a115.194096 115.194096 0 0 0-230.388192 0 12.799344 12.799344 0 0 1-25.598688 0 142.584693 142.584693 0 0 1 89.595408-130.553309 89.595408 89.595408 0 0 1-38.398032-74.236196 89.595408 89.595408 0 0 1 179.190816 0 93.435211 93.435211 0 0 1-38.398032 74.236196 142.584693 142.584693 0 0 1 89.595408 130.553309 12.799344 12.799344 0 0 1-25.598688 0zM371.233457 512.026239a63.99672 63.99672 0 1 0-63.99672-63.996721 63.484746 63.484746 0 0 0 63.99672 63.996721z m204.789505-102.394753h204.789504a12.799344 12.799344 0 0 1 0 25.598688h-204.789504a12.799344 12.799344 0 0 1 0-25.598688z m0 102.394753h204.789504a12.799344 12.799344 0 0 1 0 25.598688h-204.789504a12.799344 12.799344 0 0 1 0-25.598688z m0 102.394752h127.99344a12.799344 12.799344 0 0 1 0 25.598688h-127.99344a12.799344 12.799344 0 0 1 0-25.598688z"
            p-id="4851"
          ></path>
        </svg>
        <input
          style="opacity: 0; position: absolute; width: 100%; height: 100%"
          type="file"
          id="imagefile"
          accept="image/*"
          @change="fileChange"
        />
        <!-- <div class="font_10" style="color: #1296db">OCR识别</div> -->
      </div>
    </div>
    <div class="content">
      <!-- <van-field label="电话" :value="info.phone || '-'" readonly />
      <van-field label="座机" :value="info.tel || '-'" readonly />
      <van-field label="邮箱" :value="info.email || '-'" readonly />
      <van-field label="年龄" :value="info.age || '-'" readonly />
      <van-field label="生日" :value="info.birthday || '-'" readonly />
      <van-field label="地址" :value="info.address || '-'" readonly />
      <van-field label="备注" value="佳士得" readonly /> -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="联系人姓名"
          label="联系人姓名"
          placeholder="联系人姓名"
          :rules="[{ required: true, message: '请填联系人姓名' }]"
        />
        <van-field
          v-model="phone"
          name="电话"
          label="电话"
          placeholder="电话"
          :rules="[{ required: true, message: '请填电话' }]"
        />
        <van-field
          v-model="email"
          name="邮箱"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: false, message: '请填邮箱' }]"
        />
        <!-- <van-field
          readonly
          clickable
          name="birthday"
          :value="value"
          label="生日"
          placeholder="点击选择日期"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            type="time"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup> -->
        <van-field
          v-model="address"
          name="地址"
          label="地址"
          placeholder="地址"
          :rules="[{ required: false, message: '请填地址' }]"
        />
        <van-field
          v-model="remark"
          rows="3"
          autosize
          name="备注"
          label="备注"
          maxlength="100"
          show-word-limit
          placeholder="备注"
          :rules="[{ required: false, message: '请填备注' }]"
        />
        <div style="margin-bottom: 36px; margin-top: 30px; align-items: center">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
      <van-popup v-model="show">
        <!-- <van-button color="#ffffff"
          >使用相机拍照<input
            style="opacity: 0"
            type="file"
            accept="image/*"
            capture="camera"
        /></van-button> -->
        <van-button color="#ffffff"
          ><input style="opacity: 0" type="file" accept="image/*"
        /></van-button>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { bdtoken, business_card } from "@/services/api";
export default {
  name: "contact_info",
  created() {
    console.log("params:", this.$route.params);
    this.info = this.$route.params;
  },
  data() {
    return {
      username: "",
      phone: "",
      email: "",
      birthday: "",
      address: "",
      remark: "",
      info: {},
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
        },
      ],
      showPicker: false,
      value: "",
      show: false,
    };
  },
  methods: {
    onConfirm(time) {
      this.value = time;
      this.showPicker = false;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    showPopup() {
      this.show = true;
    },
    fileChange(e) {
      console.log("File:", e.target.files);
      // let files = e.target.files;
      // let formData = new FormData();
      // for (let i = 0, file = files[i]; i < files.length; i++) {
      //   formData.append(file.name, file);
      // }
      // file转base64
      let file = document.getElementById("imagefile").files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
        let params = {
          grant_type: "client_credentials",
          client_id: "aAnvV8kxG0X7qHak5h4kVExY",
          client_secret: "3ZFfWiXWcd6vwcn1qlxXjj4XIsGUShpy",
        };
        bdtoken(params).then((res) => {
          console.log("BDACCESS=>", res);
          if (res.access_token) {
            business_card({ image: reader.result }, res.access_token).then(
              (res) => {
                console.log("BDAOCR=>", res);
              }
            );
          }
        });
      };
    },
  },
};
</script>
<style lang="scss">
.main {
  height: 90vh;
}
</style>
