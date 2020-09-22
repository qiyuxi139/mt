<template>
  <div class="s-item">
    <dt>
      <img :src="meta.image" alt />
    </dt>
    <dd>
      <h3>
        <router-link :to="{name: 'productDeatil'}">{{ meta.title }}</router-link>
      </h3>
      <p>
        <el-rate
          v-model="meta.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        ></el-rate>
        <span>{{ evaluate }}</span>
        <span>{{ meta.score }}分</span>
        <span class="s-item-comment-total">{{ meta.commentNum }}人评论</span>
      </p>
      <p>
        <span class="s-item-tab">
          <span
            v-for="(item, index) in meta.tab"
            :key="index"
          >{{ item + addFG(index, meta.tab.length) }}</span>
        </span>
        <span class="s-item-addr">{{ meta.address }}</span>
        <span>
          <a href="#">
            <i class="el-icon-location"></i>
            查看地图
          </a>
        </span>
      </p>
      <p>
        <span class="s-item-price">人均￥{{meta.avg_price}}</span>
      </p>
      <ul class="deal-items">
        <li class="items" v-for="(item, index) in meta.dealItems.slice(0, 2)" :key="index">
          <p class="deal-title">{{item.title}}</p>
          <p>
            <span class="deal-price">￥{{item.price}}</span>
            <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
            <span class="deal-sales">已售{{item.saleNum}}</span>
          </p>
        </li>
      </ul>
    </dd>
  </div>
</template>

<script>
export default {
  props: ["meta"],
  computed: {
    evaluate() {
      if (this.meta.score > 4.5) {
        return "很好";
      } else if (this.meta.score > 4) {
        return "好";
      } else if (this.meta.score > 3.5) {
        return "一般";
      }
      return "差";
    }
  },
  methods: {
    addFG(curIndex, totalLength) {
      if (curIndex < totalLength - 1) {
        return "|";
      }
      return "";
    }
  }
};
</script>