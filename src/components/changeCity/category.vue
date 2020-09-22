<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item, index) in andWord" :key="index">
              <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section " v-for="(item, index) in cityGroup" :key="index" :id="'city-'+ index">
      <dt>{{index}}</dt>
      <dd>
          <span v-for="city in item" :key="city.id" @click="changeCity(city)"> {{city}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data(){
    return {
      andWord: 'ABCDEFGHIGKLMNOPQRSTUVWSYZ'.split(''),
      cityGroup: {},
    }
  },
  created(){
    api.getAllCityList().then(res => {
      this.cityGroup = this.getCityGroup(res.data);
      console.log(this.cityGroup)
    })
  },
  methods: {
    changeCity(){

    },
    getCityGroup(list){
      let result = {};
      for(let i = 0; i < list.length; i++){
        const listItem = list[i];
        if(!result[listItem.firstChar.toUpperCase()]){
          this.$set(result, listItem.firstChar.toUpperCase(), []);
        }
        result[listItem.firstChar.toUpperCase()].push(listItem.name);
      }
      return result;
    }
  },
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/categroy.scss";
</style>