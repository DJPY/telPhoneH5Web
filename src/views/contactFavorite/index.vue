<template>
  <div class="main flex-column">
    <div class="font_30 bold pl20 bg_white">联系人</div>
    <item-list class="ml20" :list="list" @toInfo="toInfo" />
  </div>
</template>

<script>
import ItemList from "@/views/contactList/components/itemList.vue";
export default {
  name: "contact_favo",
  components: { ItemList },
  created() {
    console.log("params:", this.$route.params);
    this.info = this.$route.params;
  },
  data() {
    return {
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
    };
  },
  methods: {
    toInfo(item) {
      console.log("item:", item);
      this.$router.push({ name: "ContactInfo", params: { ...item } });
    },
  },
};
</script>
<style lang="scss">
.main {
  height: 90vh;
}
</style>
