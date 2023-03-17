<template>
  <div class="homePage">
   

    <div class="img">
      <img :src="bigImg" alt="" />
    </div>

    <div class="content1">
      <h3>{{ problem }}</h3>
      <div class="imgs">
        <img
        class="imgs4"
          v-for="(item, index) in problemImg"
          :key="index"
          :src="item"
          alt=""
        />
      </div>
    </div>


    <div class="content1">
      <h3>{{ plan }}</h3>
      <div class="imgs">
        <img
         class="imgs1"
          :src="imgs1"
          alt=""
        />
      </div>
    </div>
  
    <div class="greyBox">
      <div class="content1">
      <h3>{{ characteristic }}</h3>
      <div class="imgs">
        <img
        class="imgs2-4"
          v-for="(item, index) in problemImg"
          :key="index"
          :src="item"
          alt=""
        />
      </div>
    </div>
    </div>

   
    
  </div>
</template>

<script lang="ts">
import { reactive, ref,defineComponent } from "vue";
export default defineComponent({
  setup() {
   

    let bigImg = ref(
      "https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0"
    );

    let problem = ref("应用痛点");
    let problemImg = reactive([
      "https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0",
    ]);
   
    let plan = ref("解决方案")
    let imgs1 = ref('https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0')

    let characteristic =ref('方案特点')
    let characteristicImg = reactive([
      "https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0",
    ]);
   
   
   
    return {
    
      bigImg,
      problem,
      problemImg,
      imgs1,
      plan,
      characteristic,
      characteristicImg,
    
     
    };
  },
});
</script>

<style scoped lang="scss">

.img {
  width: 100%;
  height: 480px;
  img {
    width: 100%;
    height: 100%;
  }
}

.content1 {
  width: 1330px;
  margin: 0px auto;
  h3 {
    font-size: 60px;
    font-weight: 520;
    margin: 100px 0px;
  }
  .imgs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 150px;
    img.imgs4 {
      width: 20%;
      height: 290px;
      border-radius: 5px;
      border: #ccc;
      box-shadow: 0 0 16px #ccc;
    }

    img.imgs1{
      width: 100%;
    }
    img.imgs2-4{
      width: 18%;
      height: 450px;
      border-radius: 5px;
      border: #ccc;
      box-shadow: 0 0 16px #ccc;
    }
  }
}

.greyBox{
  background:#F8F8F8 ;
  width: 100%;
  padding: 30px 0px;
}


</style>