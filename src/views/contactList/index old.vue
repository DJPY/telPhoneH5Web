<template>
  <div class="main flex-column">
    <div class="font_30 bold pl20 bg_white">联系人</div>
    <div>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <!-- <input type="file" accept="image/*" capture="camera" />
      <a href="tel:15215169257">拨打电话</a>
      <br />
      <a href="sms:15215169257?body=你好 这是一个测试">发送短信</a> -->
    <div class="list">
      <van-index-bar :z-index="-1">
        <van-index-anchor
          v-for="item in list"
          :index="item.index"
          :key="item.index"
        >
          <div
            class="item flex-start"
            v-for="info in item.info"
            :title="info.name"
            :key="info.id"
            @click="toInfo(info.id)"
          >
            <div class="flex-start align">
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
            <!-- <div class="flex align ml8  0">
              <svg
                t="1676887329001"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7293"
                width="50"
                height="50"
              >
                <path
                  d="M725.681633 902.791837c-38.661224 0-82.02449-7.314286-127.477551-21.420408-109.191837-33.959184-216.816327-105.012245-303.020409-200.09796C166.138776 538.644898 104.489796 396.538776 116.506122 270.106122c3.657143-31.346939 13.583673-71.053061 60.604082-102.922449 36.04898-29.257143 77.322449-45.97551 109.714286-45.453061 33.959184 0.522449 45.453061 12.538776 80.457143 63.216327 53.812245 74.187755 57.469388 110.759184 55.379591 131.657143-3.657143 34.481633-22.465306 49.632653-39.706122 63.216326-4.179592 3.134694-8.359184 6.791837-12.016326 9.926531-20.897959 26.644898-46.497959 63.738776 63.216326 177.110204 93.518367 89.861224 144.195918 100.832653 165.616327 99.265306 16.718367-1.044898 22.987755-9.926531 25.6-13.061225l0.522449-0.522448c35.004082-49.110204 46.497959-61.126531 79.934693-66.351021 32.391837-5.22449 49.110204 5.22449 118.07347 48.587755 62.171429 39.183673 90.906122 65.306122 84.636735 106.579592-2.089796 44.930612-36.571429 106.057143-75.232654 133.746939-26.644898 18.285714-63.738776 27.689796-107.624489 27.689796z"
                  fill="#16C4AF"
                  p-id="7294"
                ></path>
              </svg>
            </div> -->
          </div>
        </van-index-anchor>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home_page",
  computed: {
    ...mapGetters("contactList", { contactListData: "contactListData" }),
  },
  data() {
    return {
      active: "cc",
      value: "",
      list: [
        {
          index: "Z",
          info: [
            {
              id: 1,
              name: "西安",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 2,
              name: "西安",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 3,
              name: "西安",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 4,
              name: "西安",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 5,
              name: "西安",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 6,
              name: "西安",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 7,
              name: "西安",
              tel: "13637891821",
              sex: "男",
              age: "24",
              address: "南京市大同街西祠胡同266号",
            },
            {
              id: 8,
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
    this.$store.dispatch("contactList/getContactList", { id: 1 });
  },
  methods: {
    changeTab(val) {
      console.log(val);
    },
    toInfo(id) {
      this.$router.push({ name: "ContactInfo", query: { id } });
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

<style scoped lang="scss">
.main {
  height: calc(100vh - 100px);
  .list {
    height: calc(100% - 150px);
    overflow: scroll;
    .item {
      height: 80px;
    }
  }
}
</style>
