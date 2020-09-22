<template>
  <div class="page-changeCity">
    <el-row>
      <Province />
    </el-row>
    <el-row>
      <hot-city :list="hostList" title="热门城市:" />
    </el-row>
    <el-row>
      <hot-city :list="searchList" title="最近搜索:" />
    </el-row>
    <el-row>
      <category :list='cityList'/>
    </el-row>
  </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue'
import hotCity from '@/components/changeCity/hotCity.vue'
import category from '@/components/changeCity/category.vue'
import api from '@/api/index.js'
export default {
  components: {
    Province,
    hotCity,
    category
  },
  data(){
    return {
      hostList: [],
      searchList: ['北京','萍乡','广州','深圳','天津','西安','重庆','杭州','南京','武汉','成都'],
      provinceList: [],
      cityList:[]
    }
  },
  methods:{
    concatCityArr(list){
      let result = [];
      let cityListAllArr = list.map(item => {
        return item.cityInfoList;
      })
      for(let i = 0; i < cityListAllArr.length; i++){
        result = result.concat(cityListAllArr[i])
      }
      return result;
    }
  },
  created(){
    api.getHotCityList().then(res => {
      this.hostList = res.data.map(item => item.name);
    })
    api.getRecentsCityList().then(res => {
      this.searchList = res.data.map(item => item.name);
    });
  }
}
</script>