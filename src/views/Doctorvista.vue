<template>
  <div>
    
    <MenuDoctor></MenuDoctor>
    
      <component v-bind:is="this.componenteVista">
      </component>
    
  </div>
</template>

<style type="scss">
@import '../css/pacientevista.css';

</style>
<script>
import MenuDoctor from '@/components/MenuDoctor.vue'
import InicioPaciente from '@/components/InicioPaciente.vue'
import PerfilPaciente from '@/components/PerfilPaciente.vue'
import ActualizarPaciente from '@/components/ActualizarPaciente.vue'
import ActualizarCitaPaciente from '@/components/ActualizarCitaPaciente.vue'
import NuevaCitaPaciente from '@/components/NuevaCitaPaciente.vue'
import { mapActions, mapState } from 'vuex'

export default {
    
    name: 'Doctorvista',
    components: {
      MenuDoctor,
      InicioPaciente,
      PerfilPaciente,
      ActualizarPaciente,
      ActualizarCitaPaciente,
      NuevaCitaPaciente
    },
    
    computed:{
      ...mapState(['componenteVista'])
    },
    
}
</script>

<style>

</style>