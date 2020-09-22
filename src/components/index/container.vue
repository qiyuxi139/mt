<template>
  <div class="m-istyle">
      <dl :class="nav.class" @mouseover="changList">
        <dt>{{ nav.title }}</dt>
        <dd v-for="(item, index) in nav.list" :key="index" :class="{active: kind === item.tab}" :data-type="item.tab">{{ item.text }}</dd>
      </dl>
      <ul class="ibody">
        <li v-for="(item, index) in showList[kind]" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <img :src="item.image" class="image">
           <div class="cbody">
             <div class="title" :title="item.title">{{ item.title }}</div>
             <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
             <div class="price-info">
               <span class="current-price-wrapper">
                 <span class="price-symbol numfont">¥</span>
                 <span class="current-price numfont">{{ item.price }}</span>
               </span>
               <span class="sold bottom-right-info">{{ item.adress }}</span>
             </div>
           </div>
          </el-card>
        </li>
      </ul>
  </div>
</template>
<script>
import axios from '@/api/index.js'
export default {
  data(){
    return {
      kind: 'all',
      showList: {}
    }
  },
  props: {
    nav: {
      type: Object
    }
  },
  created(){
    axios.getIStyle().then(res => {
      this.showList = res.data;
    })
  },
  methods:{
    changList(e){
      const dom = e.target;
      const tagName = dom.tagName.toLowerCase();
      if(tagName !== 'dd'){
        return false;
      }
      this.kind = dom.getAttribute('data-type');
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/index/artistic.scss';
</style>