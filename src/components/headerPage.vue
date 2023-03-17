<template>
  <div class="box">
    <header>
      <div class="header-content">
        <div class="header-left">
          <p class="title">{{ title }}</p>
          <div class="left-content">
            <div v-for="(item, index) in title1" :key="index" class="p-box">
              <p
                :class="istitle === index ? 'active' : ''"
                @click="setId(index)"
              >
                {{ item }}
                <span :class="istitle === index ? 'active' : ''"> </span>
              </p>
            </div>
          </div>
        </div>

        <div class="header-right">
          <p v-for="(item, index) in title2" :key="index">{{ item }}</p>
        </div>
      </div>
    </header>
    <div class="header-box"></div>
  </div>
</template>

<script lang="ts">
import { reactive, ref,defineComponent } from "vue";
export default defineComponent({
setup() {
    let istitle = ref(0);
    let title = ref("青鸟云");
    let title1 = reactive(["简介", "视频教程", "常见问题"]);
    let title2 = reactive(["申请适用", "购买", "登入"]);
    const setId = (val: number) => {
      istitle.value = val;
    };
    return{
        istitle,
      title,
      title1,
      title2,
      setId,
    }
}
})
</script>

<style scoped lang="scss">
header {
  p:hover{
    cursor: pointer;
  }
  position: fixed;
  top: 0px;
  width: 100%;
  height: 60px;
  background: #000000;
  .header-content {
    margin: 0px auto;
    width: 1330px;
    display: flex;
    height: 100%;
    justify-content: space-between;
    text-align: center;

    .header-left {
      width: 450px;
      display: flex;
      justify-content: space-between;
      text-align: center;

      box-sizing: border-box;

      .title {
        width: 160px;
        line-height: 60px;

        text-align: left;
        color: #3d97e5;
        font-size: 28px;
        font-weight: bold;
      }
      .left-content {
        display: flex;
        flex: 1;
        justify-content: space-between;
        text-align: center;
        div {
          display: flex;
          text-align: center;
          justify-content: center;
        }
        p {
          flex-shrink: 0;
          font-size: 18px;
          font-weight: bold;
          line-height: 60px;
          color: white;
          position: relative;
        }
        span.active {
          position: absolute;
          border: #3d97e5 3px solid;
          width: 100%;
          bottom: 0px;
          left: -5px;
          border-radius: 3px;
        }
        p.active {
          color: #3d97e5;cursor: default;
        }
      }
    }

    .header-right {
      display: flex;
      justify-content: space-between;
      align-content: center;
      font-size: 15px;
      line-height: 60px;
      color: white;
      width: 200px;
    }
  }
}
.header-box {
  height: 60px;
}
</style>