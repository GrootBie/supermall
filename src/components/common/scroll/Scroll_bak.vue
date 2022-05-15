<!--<template>-->
<!--  <div class="wrapper" ref="wrapper">-->
<!--    <div class="content">-->
<!--      <<slot></slot>>-->
<!--&lt;!&ndash;      <div v-for="item in data_list">&ndash;&gt;-->
<!--&lt;!&ndash;        <div style="height: 800px">{{item}}</div>&ndash;&gt;-->
<!--&lt;!&ndash;         <div style="height: 800px">{{item}}</div>&ndash;&gt;-->

<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import BScroll from 'better-scroll'-->

<!--  export default {-->
<!--    name: "Scroll",-->
<!--    props: {-->
<!--      probeType: {-->
<!--        type: Number,-->
<!--        default: 0-->
<!--      },-->
<!--      pullUpLoad: {-->
<!--        type: Boolean,-->
<!--        default: true-->
<!--      },-->
<!--      pulldown: {-->
<!--        type: Boolean,-->
<!--        default: true-->
<!--      }-->
<!--    },-->
<!--    data() {-->
<!--      return {-->
<!--        scroll: null,-->
<!--        message: '哈哈哈',-->
<!--        data_list:['hahahha']-->
<!--      }-->
<!--    },-->

<!--    mounted() {-->
<!--      // 1.创建BScroll对象-->
<!--      this.scroll = new BScroll(this.$refs.wrapper, {-->
<!--        click: true,-->
<!--        probeType: this.probeType,-->
<!--        pullUpLoad: this.pullUpLoad-->
<!--      })-->

<!--      // 2.监听滚动的位置-->
<!--      if (this.probeType === 2 || this.probeType === 3) {-->
<!--        this.scroll.on('scroll', (position) => {-->
<!--          // console.log(position);-->
<!--          this.$emit('scroll', position)-->
<!--        })-->
<!--      }-->

<!--      // 3.监听scroll滚动到底部-->
<!--      if (this.pullUpLoad) {-->
<!--        this.scroll.on('pullingUp', () => {-->
<!--          this.$emit('pullingUp')-->
<!--        })-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      scrollTo(x, y, time=300) {-->
<!--        this.scroll && this.scroll.scrollTo(x, y, time)-->
<!--      },-->
<!--      refresh() {-->
<!--        this.scroll && this.scroll.refresh()-->
<!--      },-->
<!--      finishPullUp() {-->
<!--        this.scroll && this.scroll.finishPullUp()-->
<!--      },-->
<!--      getScrollY() {-->
<!--        return this.scroll ? this.scroll.y : 0-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->


<!--<script>-->
<!--  import BScroll from '@better-scroll/core'-->
<!--  import Pullup from '@better-scroll/pull-up'-->

<!--  BScroll.use(Pullup)-->

<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        isPullUpLoad: false,-->
<!--        data: 30-->
<!--      }-->
<!--    },-->
<!--    mounted() {-->
<!--      this.initBscroll()-->
<!--    },-->
<!--    methods: {-->
<!--      initBscroll() {-->
<!--        this.bscroll = new BScroll(this.$refs.scroll, {-->
<!--          pullUpLoad: true-->
<!--        })-->

<!--        this.bscroll.on('pullingUp', this.pullingUpHandler)-->
<!--      },-->
<!--      async pullingUpHandler() {-->
<!--        this.isPullUpLoad = true-->

<!--        await this.requestData()-->

<!--        this.bscroll.finishPullUp()-->
<!--        this.bscroll.refresh()-->
<!--        this.isPullUpLoad = false-->
<!--      },-->
<!--      async requestData() {-->
<!--        try {-->
<!--          const newData = await this.ajaxGet(/* url */)-->
<!--          this.data += newData-->
<!--        } catch (err) {-->
<!--          // handle err-->
<!--          console.log(err)-->
<!--        }-->
<!--      },-->
<!--      ajaxGet(/* url */) {-->
<!--        return new Promise(resolve => {-->
<!--          setTimeout(() => {-->
<!--            resolve(20)-->
<!--          }, 1000)-->
<!--        })-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->
<template>
  <div class="pullup">
    <div ref="scroll" class="pullup-wrapper">
      <div class="pullup-content">
        <ul class="pullup-list">
          <li v-for="i of data" :key="i" class="pullup-list-item">
            {{ i % 5 === 0 ? 'scroll up 👆🏻' : `I am item ${i} `}}
          </li>
        </ul>
        <div class="pullup-tips">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <span class="pullup-txt">Pull up and load more</span>
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isPullUpLoad: false,
        data: 30
      }
    },
    mounted() {
      this.initBscroll()
    },
    methods: {
      initBscroll() {
        this.bscroll = new BScroll(this.$refs.scroll, {
          pullUpLoad: true
        })

        this.bscroll.on('pullingUp', this.pullingUpHandler)
      },
      async pullingUpHandler() {
        this.isPullUpLoad = true

        await this.requestData()

        this.bscroll.finishPullUp()
        this.bscroll.refresh()
        this.isPullUpLoad = false
      },
      async requestData() {
        try {
          const newData = await this.ajaxGet(/* url */)
          this.data += newData
        } catch (err) {
          // handle err
          console.log(err)
        }
      },
      ajaxGet(/* url */) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(20)
          }, 1000)
        })
      }
    }
  }
</script>


<style lang="stylus" scoped>
.pullup
  height: 100%
  .pullup-wrapper
    height: 100%
    padding: 0 10px
    border: 1px solid #ccc
    overflow: hidden
  .pullup-list
    padding: 0
  .pullup-list-item
    padding: 10px 0
    list-style: none
    border-bottom: 1px solid #ccc
  .pullup-tips
    padding: 20px
    text-align: center
    color: #999

</style>


