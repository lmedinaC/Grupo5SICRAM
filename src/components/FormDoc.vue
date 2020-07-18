<template>
  <div >
    <br />
    <br />
    <!-- area de Formulario de Medico -->
    <div class="container pad_100" style="width:80%;">
      <div class="text-center">
        <h3 class="h1 mt-2 titulo-reg">REGISTRO DEL MÉDICO</h3>
      </div>
      <form
        class="p-3 form"
        @submit.prevent="registrarDoctor({correo: $v.doctor.correo.$model, contrasena:$v.doctor.contrasena.$model},
        {nombre: $v.doctorDatos.nombre.$model, apellido: $v.doctorDatos.apellido.$model,
        dni: $v.doctorDatos.dni.$model,
         edad: $v.doctorDatos.edad.$model, telefono: $v.doctorDatos.telefono.$model},
         {cmp: $v.doctorProfesion.cmp.$model, profesion: $v.doctorProfesion.profesion.$model,
         especialidad: $v.doctorProfesion.especialidad.$model, num_colegiatura: $v.doctorProfesion.num_colegiatura.$model,
         reg_especialidad: $v.doctorProfesion.reg_especialidad.$model})"
      >
        <div>
          <h3 class="offset-1 subtitulo-reg">DATOS PERSONALES</h3>
        </div>
        <div style="border:2px solid #E1E1E1; border-radius:20px;  padding: 0px 120px 0px 100px; background-color: white;">
          <div class="form-row">
            <div class="form-group col-md-6 mt-4">
              <label for="inputUsuario">Nombre de Usuario</label>
              <input type="text" class="form-control" id="inputUsuario" />
            </div>
            <div class="form-group col-md-6 mt-4">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                v-model="$v.doctor.correo.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctor.correo.required"
              >Campo Requerido</small>
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctor.correo.email"
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
                v-model="$v.doctor.contrasena.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctor.contrasena.required"
              >Campo Requerido</small>
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctor.contrasena.minLength"
              >Digite más de 4 carácteres</small>
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
                v-model="$v.doctorDatos.nombre.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctorDatos.nombre.required"
              >Campo Requerido</small>
            </div>
            <div class="form-group col-md-6">
              <label for="inputLastName">Apellidos</label>
              <input
                type="text"
                class="form-control"
                id="inputLastName"
                v-model="$v.doctorDatos.apellido.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctorDatos.apellido.required"
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
                v-model="$v.doctorDatos.dni.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctorDatos.dni.required"
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
                v-model="$v.doctorDatos.edad.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctorDatos.edad.required"
              >Campo Requerido</small>
            </div>
            <div class="form-group col-md-6">
              <label for="inputtelefono">Celular</label>
              <input
                type="number"
                class="form-control"
                id="inputtelefono"
                v-model="$v.doctorDatos.telefono.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctorDatos.telefono.required"
              >Campo Requerido</small>
            </div>
          </div>
        </div>

        <div class="mt-3">
          <h3 class="offset-1 subtitulo-reg">DATOS PROFESIONALES</h3>
        </div>
        <div style="border:2px solid #E1E1E1; border-radius:20px;  padding: 0px 120px 0px 100px; background-color: white;">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCmp">Cmp</label>
              <input
                type="text"
                class="form-control"
                id="inputCmp"
                v-model="$v.doctorProfesion.cmp.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctorProfesion.cmp.required"
              >Campo Requerido</small>
            </div>
            <div class="form-group col-md-6">
              <label for="inputProfesion">Profesión</label>
              <input
                type="text"
                class="form-control"
                id="inputProfesion"
                v-model="$v.doctorProfesion.profesion.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctorProfesion.profesion.required"
              >Campo Requerido</small>
            </div>
          </div>
          <div class="form-group">
            <label for="inputEspecialidad">Especialidad</label>
            <input
              class="form-control"
              id="inputEspecialidad"
              v-model="$v.doctorProfesion.especialidad.$model"
            />
            <small
              class="text-danger"
              style="font-weight: bold;"
              v-if="!$v.doctorProfesion.especialidad.required"
            >Campo Requerido</small>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputNumColeg">Numero de Colegiatura</label>
              <input
                type="text"
                class="form-control"
                id="inputNumColeg"
                v-model="$v.doctorProfesion.num_colegiatura.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctorProfesion.num_colegiatura.required"
              >Campo Requerido</small>
            </div>
            <div class="form-group col-md-6">
              <label for="inputRegEsp">Registro Nacional de Especialidad</label>
              <input
                type="text"
                class="form-control"
                id="inputRegEsp"
                v-model="$v.doctorProfesion.reg_especialidad.$model"
              />
              <small
                class="text-danger"
                style="font-weight: bold;"
                v-if="!$v.doctorProfesion.reg_especialidad.required"
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
            <input type="submit" class="btn btn-lg btn-dark mb-4 boton-reg" value="REGISTRAR" />
          </div>
        </div>
      </form>
    </div>
    <!--ends -->
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "FormDoc",
  data() {
    return {
      doctor: {
        correo: "",
        contrasena: ""
      },
      doctorDatos: {
        nombre: "",
        apellido: "",
        dni: "",
        sexo: "",

        edad: "",
        telefono: ""
      },
      doctorProfesion: {
        cmp: "",
        profesion: "",
        especialidad: "",
        num_colegiatura: "",
        reg_especialidad: ""
      },
      mensaje: "",
      carga: null
    };
  },

  validations: {
    doctor: {
      correo: {
        required,
        email
      },
      contrasena: {
        required,
        minLength: minLength(4)
      }
    },
    doctorDatos: {
      nombre: { required },
      apellido: { required },
      dni: { required },

      edad: { required },
      telefono: { required }
    },
    doctorProfesion: {
      cmp: { required },
      profesion: { required },
      especialidad: { required },
      num_colegiatura: { required },
      reg_especialidad: { required }
    }
  },

  methods: {
    //...mapActions(['iniciarUsuario']),

    registrarDoctor(doctor, doctorDatos, doctorProfesion) {
      this.carga = true;
      this.doctor = doctor;
      this.doctorDatos = doctorDatos;
      this.doctorProfesion = doctorProfesion;

      this.axios
        .post("https://proyectocalidad9.herokuapp.com/doctor/registro", {
          ...this.doctor,
          ...this.doctorDatos,
          ...this.doctorProfesion,
          genero: "femenino"
        }) //elemento spreat
        //agrega al obejto json al contenido que agregamos, seria como un solo json de todos los parámetros

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
input {
  width: 80%;
}
select {
  width: 80%;
}
.boton-reg {
  padding: 15px 20px;
}
#inputEspecialidad {
  width: 39.45%;
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

