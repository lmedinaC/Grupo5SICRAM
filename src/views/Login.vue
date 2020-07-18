<template >

  <div class="Login">
    <Navbar style="position:relative;top:-50px;"></Navbar>
    <div class="container">
        <div class="row justify-content-center pt-5 mt-5 ">
            <div class="col-10 col-sm-10 col-md-8 col-lg-5 col-xl-4 formulario needs-validation">
                <form @submit.prevent="iniciarUsuario({password:$v.usuario.password.$model ,correo: $v.usuario.correo.$model})">
                    <div class="form-group text-center pt-3">
                        <h1 class="">INICIAR SESIÓN</h1>
                    </div>
                    <div class="form-group mx-sm-4 pt-3">
                        <input type="text" class="form-control" name="" id="" placeholder="Ingrese su Usuario"
                        v-model="$v.usuario.correo.$model">
                        <small class="text-danger" style="font-weight: bold;" v-if="!$v.usuario.correo.required">Campo Requerido</small>
                        <small class="text-danger" style="font-weight: bold;" v-if="!$v.usuario.correo.email">Digite un correo válido</small>
                    </div>
                    
                    <div class="form-group mx-sm-4 pb-3">
                        <input type="password" class="form-control" name="" id="" placeholder="Ingrese su Contraseña"
                        v-model="$v.usuario.password.$model">
                        <small class="text-danger" style="font-weight: bold;" v-if="!$v.usuario.password.required">Campo Requerido</small>
                        <small class="text-danger" style="font-weight: bold;" v-if="!$v.usuario.password.minLength">Digite más de 6 carácteres</small>
                    </div>
                    <div class="form-group mx-sm-4 pb-5">
                        <input  type="submit" class="btn btn-block ingresar" value="INGRESAR" :disabled="$v.$invalid || carga">
                        
                    </div>
                    <div class="form-group text-center">
                        <span><a href="/registropaciente" class="registrarse" >Registrarse</a></span>
                    </div>
                </form>
               
            </div>
        </div>
    </div>
  </div>


</template>
<style type="scss">
@import '../css/login.css';

</style>

<script>
import Navbar from '@/components/Navbar.vue'
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'

import {required , minLength, email} from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  components: {
    Navbar,
  },
  data(){
    return{
        usuario: {
            password: '',
            correo: '',
        },
        mensaje: '',
        carga: null
    }  
  },
  validations:{
      usuario: {
            password: {
                required,
                minLength: minLength(4)
            },
            correo: {
                required,
                email,
            }
        },
  },
  
  
  methods:{
      //...mapActions(['iniciarUsuario']),
      
      iniciarUsuario(user){
            this.carga = true;
            this.usuario = user;
            this.axios.post('https://proyectocalidad9.herokuapp.com/login',this.usuario)
          
          .then(res=>{
              this.$router.push('/pacientevista')
              this.carga = false;
          })
          .catch(e=>{
              this.mensaje = e;
          })
      }
      
  }
}
</script>

<style  scoped>

h1{
    color: #fff;
}

img{
    opacity: 0.9;
}

.formulario{
    background: rgba(0, 0, 0, .1);
    padding: 20px;
    border-radius:10px ;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
    color: white;

}

.form-control::placeholder{
    color: white;
}

.form-control{
    background: rgba(92, 90, 90, 0.144);
    border-style: none;
    transition: 0.3s ease-in;
    box-shadow: none;
    outline: none;
}

.form-control:focus{
    background: #bfd9e2b0;
    box-shadow: 0 0 2px 3px #1935528f;
}

.ingresar{
    background: #193552;
    padding: 10px;
    font-size: 16px;
    font-weight: 700!important;
    color: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.568);
    transition: 0s ease-in;
}

.ingresar:hover{
    color: white;
}

.registrarse{
    color: white;
    font-size: 20px;
    font-weight: 700!important;
    border: 2px solid white;
    padding: 7px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
}

.registrarse:hover{
    color: white;
    text-decoration: none;
}

@media(max-width: 396px){
    h1{
        font-size: 2rem;
    }
}

   
    
   


</style>