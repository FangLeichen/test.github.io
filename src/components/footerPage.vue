<template>
   <footer>
      <div class="foonterContent">
      <div class="fContent fc1">
        <p>{{product}}</p>
        <ul>
          <li v-for="(item,index) in products" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="fContent fc1">
        <p>{{place}}</p>
        <ul>
          <li v-for="(item,index) in places" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="fContent fc2">
        <p>{{contact}}</p>
        <ul>
          <li v-for="(item,index) in contacts" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="code">
        <div v-for="(item,index) in codes" :key="index" class="codeBox">
          <img :src="item.img" alt="">
          <li>{{ item.p }}</li>
        </div>
      </div>
      </div>

      <div class="copyright">
      <p>&copy;  {{copyright.left}}
        <span>{{copyright.right}}</span></p>
    </div>
    
    </footer>
</template>

<script lang="ts">
import { reactive, ref,defineComponent } from "vue";
export default defineComponent({
setup() {
    let product = ref('产品')
   let products = reactive(['青鸟云','单兵','青鸟云','单兵','青鸟云','单兵'])

   let place =ref('解决方案')
   let places = reactive(['单兵','青鸟云','单兵','青鸟云','单兵'])

   let contact = ref('联系我们')
   let contacts = reactive(['青鸟云','单兵','青鸟云','单兵','青鸟云','单兵'])

   let codes =reactive([
    {
      img:'https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0',
      p:'官方微信公众号',
    },
    {
      img:'https://ts1.cn.mm.bing.net/th/id/R-C.98fd48542e3b25ea6358b13456c1564f?rik=rsAUToKD5F9H%2fA&riu=http%3a%2f%2fwww.tmtnews.tech%2fwp-content%2fuploads%2f2019%2f07%2f%e6%97%a0%e4%ba%ba%e6%9c%ba.jpg&ehk=RyisUlMPz68PNkV2ZCsqpjU%2f%2bQHdBlugeODH2sxxDW8%3d&risl=&pid=ImgRaw&r=0',
      p:'下载智能单兵',
      url:''
    }
   ])
   let copyright = reactive({
    left:'2022深圳三青鸟科技有限公司版权所有',
    right:'粤ICP备2020087956号'
   })
   return{
    product,
      products,
      place,
      places,
      contact,
      contacts,
      codes,
      copyright,
   }
}
})
</script>

<style scoped lang="scss">
footer{

  background: black;
  width: 100%;
  padding: 46px 0px 20px 0px;
  .foonterContent{
    width: 1330px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
    p{
        color: white;
        font-size: 18px;
      }
      li{
        font-size: 15px;
        color: #727377;
        margin-top: 16px;
       text-overflow: clip;
      }
    .fContent{
      text-align: left;
    }
    .fc1{
      width: 20%;
      li:hover{
        cursor: pointer;
      }
    }
    .fc2{
      flex: 1;
    }
    .code{
      width: 30%;
      display: flex;
      justify-content: space-between;
      align-items: start;
      .codeBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40%;
        img{
          width: 100%;
        }
      }
    }
  }
  .copyright{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    span{
      font-weight: bold;
    }
  }

}
</style>