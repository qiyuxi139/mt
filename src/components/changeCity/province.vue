<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      className="province"
      :value="province"
      title="省份"
      @change_show_list="changeProvince"
      :active="provinceActive"
      @change="changeProvinceValue"
    />
    <m-select
      :list="cityList"
      className="city"
      :value="city"
      title="城市"
      :active="cityActive"
      @change_show_list="changeCity"
      :disabled='disabled'
      @change="changeCityValue"
      
    />
    <span>直接搜索</span>
    <el-select
      v-model="searchWord"
      placeholder="请输入关键词"
      filterable
      remote
      reserve-keyword
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import mSelect from "./select.vue";
import api from '@/api/index.js'
export default {
  components: {
    mSelect
  },
  methods: {
    remoteMethod(){
      //发送ajax请求后端

        setTimeout(()=> {
          this.searchList = ['北京','北海','北流','北培','北镇市','北安市','重庆','天津','绵阳']

          this.loading = false;
        }, 1000)
    },
    changeProvinceValue(item){
        this.province = item.name;
        this.disabled = false;
        this.cityList = item.cityInfoList;
    },
    changeCityValue(item){
        this.city = item.name;
        this.$store.dispatch('setPosition', item);
        this.$router.push({name: 'index'})
    },
    changeProvince(type) {
      if (type == "province") {
        this.provinceActive = true;
        if (this.cityActive) {
          this.cityActive = false;
        }
      } else if (type === false) {
        this.provinceActive = false;
      }
    },
    changeCity(type) {
      if (type == "city") {
        this.cityActive = true;
        if (this.provinceActive) {
          this.provinceActive = false;
        }
      } else if (type == false) {
        this.cityActive = false;
      }
    }
  },
  created() {
    api.getProvinceList().then(res => {
      const data = res.data;
      this.provinceList = data.map((item) => {
        item.name = item.provinceName;
        return item;
      })
    })
  },
  props:['list'],
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: ["北京", "萍乡", "南昌", "抚州", "九江"],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchWord: '',
      loading: true,
      searchList: [],
      disabled: true
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>