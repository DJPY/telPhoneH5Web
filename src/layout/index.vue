<template>
  <div>
    <van-nav-bar
      v-show="isShow"
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <router-view />
    <!-- <van-tabbar v-show="isShow" v-model="active">
      <van-tabbar-item icon="home-o">联系人</van-tabbar-item>
      <van-tabbar-item icon="search">添加联系人</van-tabbar-item>
      <van-tabbar-item icon="friends-o">导出</van-tabbar-item>
      <van-tabbar-item icon="setting-o">导入</van-tabbar-item>
    </van-tabbar> -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/contactFavorite">
        <span>收藏夹</span>
        <template #icon="props">
          <img :src="props.active ? icon.savei : icon.save" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item badge="3" replace to="/contactList">
        <span>联系人</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/contactAdd">
        <span>添加联系人</span>
        <template #icon="props">
          <img :src="props.active ? icon.addi : icon.add" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/contactInfo">
        <span>设置</span>
        <template #icon="props">
          <img :src="props.active ? icon.settingi : icon.setting" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "lalyOut",
  created() {
    this.title = this.$route.meta.title;
    this.isShow = this.$route.path !== "/" ? true : false;
    console.log("rowute==>", this.$route);
    // this.menuShow();
  },
  data() {
    return {
      active: 1,
      icon: {
        active: require("@/assets/peop.png"),
        inactive: require("@/assets/peo.png"),
        add: require("@/assets/add.png"),
        addi: require("@/assets/addi.png"),
        setting: require("@/assets/setting.png"),
        settingi: require("@/assets/settingi.png"),
        save: require("@/assets/save.png"),
        savei: require("@/assets/savei.png"),
      },
      isShow: false,
      title: "",
    };
  },
  // watch: {
  //   $route(to, from) {
  //     console.log("to=>", to);
  //     console.log("from=>", from);
  //     if (to.name !== "Login") {
  //       this.isShow = true;
  //     } else {
  //       this.isShow = false;
  //     }
  //   },
  // },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onChange() {},
  },
};
</script>

<style lang="scss" scoped>
.navigationBar {
  width: 100vw;
  height: 96px;
  justify-content: center;
  z-index: 999;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  .arrow {
    position: absolute;
    left: 16px;
    font-size: 36px;
  }
  .title {
    font-size: 36px;
    font-family: "PingFangSC-Medium, PingFang SC";
    font-weight: 500;
  }
}
.black {
  color: #222222;
}
.white {
  color: #ffffff;
}

/* fade-transform */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
