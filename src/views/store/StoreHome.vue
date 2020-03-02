<template>
  <div class="store-home">
    <search-bar></search-bar>
    <flap-card></flap-card>
    <scroll :top="scrollTop" @onScroll="onScroll" ref="scroll">
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
      <div>ddddddddddddd</div>
    </scroll>
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import FlapCard from '../../components/home/FlapCard'
import Scroll from '../../components/common/Scroll'
import { storeHomeMixin } from '../../utils/mixin'

export default {
  mixins: [storeHomeMixin],
  components: {
    Scroll,
    SearchBar,
    FlapCard
  },
  data () {
    return {
      scrollTop: 94
    }
  },
  methods: {
    onScroll (offsetY) {
      this.setOffsetY(offsetY)
      if (this.offsetY) {
        this.scrollTop = 52
      } else {
        this.scrollTop = 94
      }
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style lang="scss" ref="stylesheet/scss" scoped>
  @import '../../assets/styles/global';

  .store-home {
    width: 100%;
    height: 100%;
  }
</style>
