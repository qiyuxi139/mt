<template>
  <div class="choose-wrap" v-document-click="hiddenList">
    <div class="choose" @click.stop="showList(className)" :class="{disabled:disabled}">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom" />
      <div class="mt-content" :class="{active: active}">
        <h2>{{ title }}</h2>
        <div class="wrapper" :class="className">
          <div class="col" v-for="(col, index) in renderList" :key='index'>
            <span :class="{active: item.name === value}" @click="changeValue(item)" v-for="(item, index) in col" :key="index" class="mt-item">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    changeValue(item){
      this.$emit('change', item);
    },
    showList(type){
      if(this.disabled && this.className =='city'){
        return ;
      }
      this.$emit('change_show_list', type);
    },
    hiddenList(){
      if(this.disabled && this.className =='city'){
        return ;
      }
      this.$emit('change_show_list', false);
    }
  },
  computed: {
    renderList(){
      const col = Math.ceil(this.list.length / 12);
      const result = [];
      for(let i = 0; i < col; i++){
        const data = this.list.slice(i * 12, i*12+12);
        result.push(data);
      }
      return result;
    }
  },
  props: ['list', 'title', 'className', 'value', 'active', 'disabled']
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
