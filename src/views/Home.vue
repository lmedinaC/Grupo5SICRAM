
<template>
  <div class="home">
    <Navbar></Navbar>
    <Slider></Slider>
    <Cuerpo></Cuerpo>
    <Footer></Footer>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'
import Cuerpo from '@/components/Cuerpo.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Navbar,
    Slider,
    Footer,
    Cuerpo
  },
   /*created() {
              EventBus.$on('refresh-stores-list', () => {
                  this.$forceUpdate();
              });
          },*/
}
</script>
<style lang="scss" scoped>
.home{
  background-color: #ffffff;
}
</style>