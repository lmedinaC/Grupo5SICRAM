<template>
  <div>
    <br />
    <br />
    <div class="container pad_100" >
      <div class="text-center">
        <h3 class="h1 mt-2 titulo-reg">REGISTRO DEL PACIENTE</h3>
      </div>
      <form
        @submit.prevent="registrarPaciente({correo: $v.paciente.correo.$model, contrasena:$v.paciente.contrasena.$model},
        {nombre: $v.pacienteDatos.nombre.$model,
        apellido: $v.pacienteDatos.apellido.$model,
        dni: $v.pacienteDatos.dni.$model,
        edad: $v.pacienteDatos.edad.$model,
        discapacidad:$v.pacienteDatos.discapacidad.$model,
        telefono: $v.pacienteDatos.telefono.$model,
        direccion: $v.pacienteDatos.direccion.$model})"
      >
        <br />
        <div style="border:2px solid #E1E1E1; border-radius:20px;  padding: 0px 120px 0px 100px; background-color: white;">
          <div class="form-row">
            <div class="form-group col-md-6 mt-4">
              <label for="inputUsuario">Usuario</label>
              <input type="text" class="form-control" id="inputUsuario" />
            </div>
            <div class="form-group col-md-6 mt-4">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                v-model="$v.paciente.correo.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.paciente.correo.required"
              >Campo Requerido</small>
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.paciente.correo.email"
              >Digite correo válido</small>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputPassword4">Contraseña</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                v-model="$v.paciente.contrasena.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.paciente.contrasena.required"
              >Campo Requerido</small>
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.paciente.contrasena.minLength"
              >Digite correo válido</small>
            </div>
            <div class="form-group col-md-6">
              <label for="inputNewPassword4">Nuevamente Contraseña</label>
              <input type="password" class="form-control" id="inputNewPassword4" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputName">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                v-model="$v.pacienteDatos.nombre.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.pacienteDatos.nombre.required"
              >Campo Requerido</small>
            </div>
            <div class="form-group col-md-6">
              <label for="inputLastName">Apellido</label>
              <input
                type="text"
                class="form-control"
                id="inputLastName"
                v-model="$v.pacienteDatos.apellido.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.pacienteDatos.apellido.required"
              >Campo Requerido</small>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputDni">DNI</label>
              <input
                type="text"
                class="form-control"
                id="inputDni"
                v-model="$v.pacienteDatos.dni.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.pacienteDatos.dni.required"
              >Campo Requerido</small>
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">Sexo</label>
              <select id="inputState" class="form-control">
                <option selected>-- Elegir --</option>
                <option>Femenino</option>
                <option>Masculino</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEdad">Edad</label>
              <input
                type="number"
                class="form-control"
                id="inputEdad"
                v-model="$v.pacienteDatos.edad.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.pacienteDatos.edad.required"
              >Campo Requerido</small>
            </div>
            <div class="form-group col-md-6">
              <label for="inputDiscapacidad">Discapacidad</label>
              <input
                type="text"
                class="form-control"
                id="inputDiscapacidad"
                v-model="$v.pacienteDatos.discapacidad.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.pacienteDatos.discapacidad.required"
              >Campo Requerido</small>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCelular">Celular</label>
              <input
                type="number"
                class="form-control"
                id="inputCelular"
                v-model="$v.pacienteDatos.telefono.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.pacienteDatos.telefono.required"
              >Campo Requerido</small>
            </div>
            <div class="form-group col-md-6">
              <label for="inputDireccion">Dirección</label>
              <input
                type="text"
                class="form-control"
                id="inputDireccion"
                placeholder="1234 Main St"
                v-model="$v.pacienteDatos.direccion.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.pacienteDatos.direccion.required"
              >Campo Requerido</small>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">Acepto los términos y condiciones.</label>
            </div>
          </div>
        </div>
        <br />
        <small class="text-danger" style="font-weight: bold;" v-if="$v.mensaje != ''">{{mensaje}}</small>
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-xl-6 text-center">
            <input
              type="submit"
              class="btn btn-lg btn-dark mb-4 boton-reg"
              value="REGISTRAR"
              :disabled="$v.$invalid || carga"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "FormPaciente",
  data() {
    return {
      paciente: {
        correo: "",
        contrasena: ""
      },
      pacienteDatos: {
        nombre: "",
        apellido: "",
        edad: "",

        direccion: "",
        telefono: "",
        dni: "",
        discapacidad: ""
      },
      mensaje: "",
      carga: null
    };
  },
  validations: {
    paciente: {
      correo: {
        required,
        email
      },
      contrasena: {
        required,
        minLength: minLength(4)
      }
    },
    pacienteDatos: {
      nombre: { required },
      apellido: { required },
      edad: { required },

      direccion: { required },
      telefono: { required },
      dni: { required },
      discapacidad: { required }
    }
  },
  methods: {
    registrarPaciente(paciente, pacienteDatos) {
      this.carga = true;
      this.paciente = paciente;
      this.pacienteDatos = pacienteDatos;
      this.axios
        .post("https://proyectocalidad9.herokuapp.com/paciente/registro", {
        //.post("http://localhost:1400/paciente/registro", {
          ...this.paciente,
          ...this.pacienteDatos,
          genero: "femenino"
        })

        .then(res => {
          this.$router.push("/about");
          this.carga = false;
        })
        .catch(e => {
          this.mensaje = e.response.data.message;
          this.carga = false;
        });
    }
  }
};
</script>


<style scoped>
.boton-reg {
  padding: 15px 20px;
}

input:focus {
  box-shadow: 1px solid green;
}

@media (max-width: 585px) {
  .subtitulo-reg {
    text-align: center;
  }
}
@media (max-width: 473px) {
  .subtitulo-reg {
    text-align: center;
  }
}
</style>

