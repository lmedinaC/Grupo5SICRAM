<template>
  <div class="Especialidades">
    <Navbar></Navbar>
    <Slider></Slider>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'
import Cuerpo from '@/components/Cuerpo.vue'
export default {
  name: 'Especialidades',
  components: {
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
.Especialidades{
  background-color: #ffffff;
}
</style>