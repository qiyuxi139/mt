<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classicList" :key="item.type">
        <m-slect :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.type">
        <m-slect :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import mSlect from './select.vue'
import api from '@/api/index.js'
export default {
  data() {
    return {
      classicList: [],
      areaList: [],
      classicListCopy: [
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",

              id: "Japan"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            }
          ]
        }
      ],
      areaListCopy: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        }
      ]
    }
  },
  created(){
    api.getClassify().then(res => {
      this.classicList = res.data;
    });
    api.getAreaList().then(res => {
      const data = res + ']}';

      const resCopy = eval("(" + data + ")");
      this.areaList =resCopy.data;
    }).catch(err => {
      throw new Error(err)
    })
  },
  components: {
    mSlect
  }
};
</script>