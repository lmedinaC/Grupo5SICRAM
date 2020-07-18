<template>
  <div>
      <Navbar></Navbar>
      <FormDoc></FormDoc>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FormDoc from '@/components/FormDoc.vue'
export default {
    name:'RegistroDoctor',
    components: {
    Navbar,
    FormDoc
  },
}
</script>

<style>

</style>