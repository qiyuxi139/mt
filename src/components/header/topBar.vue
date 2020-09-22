<template>
    <el-row class="m-header m-header-topbar">
        <el-col :span="10">
          <get />
        </el-col>
        <el-col :span="14">
          <my-nav />
        </el-col>
    </el-row>
</template>
<script>
import get from './geo.vue';
import myNav from './nav.vue';
export default {
  data () {
    return {}
  },
  components: {
    get,
    myNav
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/public/header/topbar.scss';
</style>
