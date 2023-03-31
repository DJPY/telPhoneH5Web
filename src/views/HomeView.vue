<template>
  <div class="main flex-column">
    <div class="font_30 bold">联系人</div>
    <div>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <!-- <input type="file" accept="image/*" capture="camera" />
    <a href="tel:15215169257">拨打电话</a>
    <br />
    <a href="sms:15215169257?body=你好 这是一个测试">发送短信</a> -->
    <!-- <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs> -->
    <van-tabbar v-model="active" @change="changeTab" safe-area-inset-bottom>
      <van-tabbar-item icon="home-o">联系人</van-tabbar-item>
      <van-tabbar-item icon="search">添加联系人</van-tabbar-item>
      <van-tabbar-item icon="friends-o">导出</van-tabbar-item>
      <van-tabbar-item icon="setting-o">导入</van-tabbar-item>
    </van-tabbar>
    <!-- <div>
      <van-index-bar>
        <van-index-anchor
          v-for="item in []"
          :index="item.index"
          :key="item.index"
        >
          <div
            class="flex-start o_s"
            v-for="info in item.info"
            :title="info.name"
            :key="info.id"
          >
            <div>
              <svg
                t="1676537057958"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4632"
                width="60"
                height="60"
              >
                <path
                  d="M512 0c281.6 0 512 230.4 512 512s-230.4 512-512 512S0 793.6 0 512 230.4 0 512 0z m115.2 505.6C672 467.2 704 416 704 352c0-108.8-83.2-192-192-192s-192 83.2-192 192c0 64 32 115.2 76.8 153.6C294.4 550.4 224 652.8 224 768c0 19.2 12.8 32 32 32s32-12.8 32-32c0-121.6 102.4-224 224-224s224 102.4 224 224c0 19.2 12.8 32 32 32s32-12.8 32-32c0-115.2-70.4-217.6-172.8-262.4zM512 480c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128-57.6 128-128 128z"
                  p-id="4633"
                ></path>
              </svg>
            </div>
            <div class="flex-column ml10 p10">
              <div class="font_18 bold">{{ info.name }}</div>
              <div class="font_14">{{ info.tel }}</div>
            </div>
          </div>
        </van-index-anchor>
      </van-index-bar>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "home_page",
  data() {
    return {
      active: "cc",
      value: "",
      list: [
        {
          index: "A",
          info: [
            {
              id: 1,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 2,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 3,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 4,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
          ],
        },
        {
          index: "B",
          info: [
            {
              id: 1,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 2,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 3,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 4,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
          ],
        },
        {
          index: "C",
          info: [
            {
              id: 1,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 2,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 3,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 4,
              name: "王牛牛",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
          ],
        },
      ],
    };
  },
  created() {
    this.$notify("提示文案");
    // this.getDeviceType();
    // this.$store.dispatch("contactList/getContactList", { id: 1 });
  },
  methods: {
    changeTab(val) {
      console.log(val);
    },
    getDeviceType() {
      let UA = window.navigator.userAgent;
      if (
        /Android|HTC/i.test(UA) ||
        !!(window.navigator["platform"] + "").match(/Linux/i)
      ) {
        UA = "Android";
      } else if (/iPad/i.test(UA) || /iPod|iPhone/i.test(UA)) {
        UA = "iOS";
      } else {
        UA = "other";
      }
      console.log("UA=>", UA);
    },
  },
};
</script>

<style scoped>
.main {
  /* background: #ffff; */
  padding: 10px;
  width: 100vw;
  /* height: 90vh; */
}
</style>
