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
        <div v-for="item in arrAZ" :key="item">
          <van-index-anchor :index="item" class="ml20" />
          <item-list
            class="ml20"
            :list="list.filter((data) => data.initial === item)"
            @toInfo="toInfo"
          />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ItemList from "./components/itemList";
import { contactlist } from "@/services/api";

function getA_Z() {
  let arr = [];
  for (let i = 0; i < 26; i++) {
    let cc = String.fromCharCode(65 + i);
    arr.push(cc);
  }
  return arr;
}
export default {
  name: "home_page",
  components: { ItemList },
  computed: {
    ...mapGetters("contactList", { contactListData: "contactListData" }),
  },
  data() {
    return {
      active: "cc",
      value: "",
      arrAZ: getA_Z(),
      list: [
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
      ],
      listA: [
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
    getA_Z();
    this.getList();
    // this.getDeviceType();
    // this.$store.dispatch("contactList/getContactList", { id: 1 });
  },
  methods: {
    getList() {
      contactlist({ id: null }).then((res) => {
        if (res.success) {
          this.list = res.data;
        }
      });
    },
    changeTab(val) {
      console.log(val);
    },
    toInfo(item) {
      console.log("item:", item);
      this.$router.push({ name: "ContactInfo", params: { ...item } });
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
