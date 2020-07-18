<template>
  <div>
      <Navbar></Navbar>
      <FormPaciente></FormPaciente>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import FormPaciente from '@/components/FormPaciente.vue'
export default {
    name:'RegistroPaciente',
    components: {
    Navbar,
    FormPaciente
  },
}
</script>

<style>

</style>