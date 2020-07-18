<template>
  <div class="Admin">
    <Navbar></Navbar>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Admin',
    components: {
    Navbar,
  },
}
</script>

<style lang="scss" scoped>
.Admin{
  background-color: #ffffff;
}
</style>