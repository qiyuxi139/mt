<template>
  <el-row class="m-header-searchbar">
    <div class="search-panel">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="hostSearch">
            <dt>热门搜索</dt>
            <template v-if="hostSearchList.length !== 0">
              <dd v-for="(item, index) in hostSearchList" :key="item + '_' + index">
                <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
              </dd>
            </template>
          </dl>
          <dl class="searchList" v-if="showSearchList">
            <dd v-for="(item, index)  in searchList" :key="item + '+' + index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest" v-if="hostSearchList.length !== 0">
          <router-link
            v-for="(item, index) in suggestList"
            :key="item + '~' + index"
            :to="{name: 'goods', params: {name: item}}"
          >{{item}}</router-link>
        </p>
      </el-col>
    </div>
  </el-row>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      searchList: [],
      hostSearchList: [],
      suggestList: [],
      timer: null
    };
  },
  computed: {
    hostSearch() {
      return this.isFocus && !this.searchWord;
    },
    showSearchList() {
      return this.isFocus && this.searchWord;
    }
  },
  created() {
    api.getSearchHotWord().then(res => {
      this.suggestList = res.data;
      this.hostSearchList = res.data;
    });
  },
  watch: {
    "$route.params.name": function() {
      this.searchWord = this.$route.params.name;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isFocus = false;
        this.timer = null;
      }, 200);
    },
    input() {
      api.getSearchList().then(res => {
        this.searchList = res.data.list.filter((item, index) => {
          return item.indexOf(this.searchWord) > -1;
        });
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>