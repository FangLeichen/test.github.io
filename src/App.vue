<script  lang="ts">
import Header from './components/headerPage.vue'
import Footer from './components/footerPage.vue'
import {defineComponent} from 'vue'
export default defineComponent({

  components:{
    Header,
    Footer
    
  }
})
</script>

<template>
    <Header/>
  <router-view/>
  <Footer/>
</template>

<style >
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
