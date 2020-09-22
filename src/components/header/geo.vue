<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{ $store.state.position.name }}
      <router-link :to="{name: 'changeCity'}" class="changeCity">切换城市</router-link>[
      <a href="#" class="loca" v-for="item in nearCity" :key="item.id">{{ item.name }}</a>
      ]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
      <router-link :to="{name: 'register'}" class="register">注册</router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      nearCity: []
    };
  },
  watch: {
    "$store.state.position": function() {
      this.nearCity = this.$store.state.position.nearCity;
    }
  },
  created() {
    api.getCurPosition().then(res => {
      this.$store.dispatch("setPosition", res.data);
      this.nearCity = res.data.nearCity;
    });
  }
};
</script>