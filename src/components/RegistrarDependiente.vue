<template>
  <div>
    <!-- Page Content  -->
    <div id="content">
      <div class="">
        <button
          type="button"
          id="sidebarCollapse"
          class=" boton-menu mb-0 pb-0"
        >
          <i class="fas fa-align-left"></i>
          <span>Menú</span>
        </button>
      </div>
      <div class="contenido">
        <div
          class="container"
          style=" box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); background:white;"
        >
          <div class="row justify-content-center" style="background:#0099a1;">
            <div class="foto col-sm-3  col-md-3 mt-2 mb-2 ">
              <img src="../assets/personas.jpg" alt="" />
            </div>

            <div class="col-sm-7 col-md-7 col-12 titulo">
              <h3 style="color:white;">Registro de familiar</h3>
            </div>
          </div>

          <form
            @submit.prevent="
              crearDependiente({
                name: dependiente.name,
                lastname: dependiente.lastname,
                email: dependiente.email,
                dni: dependiente.dni,
                edad: dependiente.edad,
                discapacidad: dependiente.discapacidad,
                celular: dependiente.celular,
                direccion: dependiente.direccion,
              })
            "
          >
            <div class="form-row ">
              <div class="form-group col-md-6">
                <div class="row mr-1">
                  <div class="col-4">
                    <label for="inputNombre">Nombres:</label>
                  </div>
                  <div class="col-8">
                    <input
                      style="text-transform: uppercase;"
                      type="text"
                      class="form-control"
                      id="inputNombre"
                      placeholder="NOMBRE Familiar"
                      v-model="dependiente.name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group col-md-6 ">
                <div class="row mr-1">
                  <div class="col-4">
                    <label for="inputApellido">Apellidos:</label>
                  </div>
                  <div class="col-8">
                    <input
                      style="text-transform: uppercase;"
                      type="text"
                      class="form-control"
                      id="inputApellido"
                      placeholder="APELLIDO Familiar"
                      v-model="dependiente.lastname"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="row mr-1">
                  <div class="col-4">
                    <label for="inputDNI">DNI:</label>
                  </div>
                  <div class="col-8">
                    <input
                      maxlength="8"
                      type="number"
                      class="form-control"
                      id="inputDNI"
                      placeholder="DNI Familiar"
                      v-model="dependiente.dni"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group col-md-6">
                <div class="row mr-1">
                  <div class="col-4">
                    <label for="inputEdad">Discapacidad</label>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      id="inputEdad"
                      placeholder="Discapacidad 'ninguna'"
                      v-model="dependiente.discapacidad"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-row ">
              <div class="form-group col-md-6">
                <div class="row mr-1">
                  <div class="col-4">
                    <label for="inputGenero">Correo</label>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      id="Correo"
                      v-model="dependiente.email"
                      placeholder="Correo Familiar"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group col-md-6">
                <div class="row mr-1">
                  <div class="col-4">
                    <label for="inputCelular">Edad</label>
                  </div>
                  <div class="col-8">
                    <input
                      type="number"
                      class="form-control"
                      id="inputCelular"
                      placeholder="Edad Familiar"
                      v-model="dependiente.edad"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="row mr-1">
                  <div class="col-4">
                    <label for="inputCMP">Celular</label>
                  </div>
                  <div class="col-8">
                    <input
                      type="number"
                      class="form-control"
                      id="inputCMP"
                      placeholder="Celular Familiar"
                      v-model="dependiente.celular"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group col-md-6">
                <div class="row mr-1">
                  <div class="col-4">
                    <label for="inputProfesion">Dirección</label>
                  </div>
                  <div class="col-8">
                    <input
                      type="text"
                      class="form-control"
                      id="inputProfesion"
                      placeholder="Direccion Familiar"
                      v-model="dependiente.direccion"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center boton-final">
              <a href="formPaciente.html"
                ><button class="but btn btn-lg mt-4" style="color:"
                :disabled="deshabilitar">
                  Registrar
                </button></a
              >
            </div>
          </form>
        </div>
      </div>
      <simplert :useRadius="true" :useIcon="true" ref="simplert"> </simplert>
    </div>
  </div>
</template>

<script>
import Simplert from "@/components/Simplert.vue";
import { mapState } from "vuex";
export default {
  name: "RegistrarDependiente",
  components: {
    Simplert,
  },
  data() {
    return {
      deshabilitar: false,
      mensajeRegistro: {},
      mensaje: "",
      usuario: "",
      datosUsuario: {},
      dependiente: {
        name: "",
        lastname: "",
        email: "",
        dni: "",
        edad: "",
        discapacidad: "",
        celular: "",
        direccion: "",
      },
    };
  },
  mounted() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar, #content").toggleClass("active");
      $(".collapse.in").toggleClass("in");
      $("a[aria-expanded=true]").attr("aria-expanded", "false");
    });
    document.getElementById("inputCMP").addEventListener("input", function() {
      if (this.value.length > 9) this.value = this.value.slice(0, 9);
    });
    document.getElementById("inputDNI").addEventListener("input", function() {
      if (this.value.length > 8) this.value = this.value.slice(0, 8);
    });
    this.usuario = this.usuarioPaciente;
  },
  methods: {
    vaciar(){
      this.dependiente= {
        name: "",
        lastname: "",
        email: "",
        dni: "",
        edad: "",
        discapacidad: "",
        celular: "",
        direccion: "",
      }
    },
    open2(o) {
      let obj = {
        title: o.title,
        message: o.message,
        type: o.type,
      };

      console.log("open simplert with obj : ", obj);
      this.$refs.simplert.openSimplert(obj);
      console.log(o);
    },

    crearDependiente(paciente) {
      this.deshabilitar =true;
      this.dependiente = paciente;
      console.log(this.dependiente);
      if (
        this.dependiente.name === "" ||
        this.dependiente.lastname === "" ||
        this.dependiente.email === "" ||
        this.dependiente.dni === "" ||
        this.dependiente.edad === "" ||
        this.dependiente.celular === "" ||
        this.dependiente.direccion === ""
      ) {
        this.mensajeRegistro = {
          title: "REGISTRO FALLIDO",
          message: "Rellene todos los campos",
          type: "warning",
        };
        this.open2(this.mensajeRegistro);
        this.deshabilitar =false;
      } else {
        this.deshabilitar =true;
        let url = `https://sicramv1.herokuapp.com/api/user/dependiente/agregar/${this.idPaciente}`;
        this.axios
          .post(
            url,
            { ...this.dependiente },
            {
              headers: {
                Authorization: `${this.usuario}`,
              },
            }
          )
          .then((res) => {
            this.deshabilitar =true;
            if (
              res.data === "error al guardar al dependiente correo ya usado:"
            ) {
              this.mensajeRegistro = {
                title: "REGISTRO FALLIDO",
                message: "Familiar ya registrado",
                type: "error",
              };
              this.open2(this.mensajeRegistro);
            } else {
              
              this.mensajeRegistro = {
                title: "REGISTRO EXITOSO",
                message: "Se registro al familiar",
                type: "success",
              };
              this.open2(this.mensajeRegistro);
              this.vaciar();
            }
            this.deshabilitar =false;
          })
          .catch((e) => {
            this.mensajeRegistro = {
              title: "REGISTRO FALLIDO",
              message: "Ocurrio un error",
              type: "error",
            };
            this.open2(this.mensajeRegistro);
            this.deshabilitar =false;
          });

      }
    },
  },
  computed: {
    ...mapState(["usuarioPaciente", "idPaciente"]),
  },
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
}

#sidebar ul li a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.boton-menu {
  cursor: pointer;
  position: relative;
  background: #fff;
  height: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  outline: none !important;
  border: none;
  margin-bottom: 15px;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed black;
  margin: 40px 0;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
  width: calc(100% - 150px);
  padding: 10px 0 0 0px;
  min-height: 100vh;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffffff;
}

#content.active {
  width: 100%;
}

#content .contenido {
  position: relative;
  top: 10px;
}
.titulo {
  margin-top: 35px;
  text-align: left;
  background: #0099a1;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -150px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
  }
  #content.active {
    width: calc(100% - 150px);
  }
  #sidebarCollapse span {
    display: none;
  }

  .boton-menu {
    cursor: pointer;
    background: #fff;
    height: 50px;
    width: 50px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    outline: none !important;
    border: none;
    margin-bottom: 15px;
  }

  .titulo {
    margin-top: 35px;
    text-align: left;
  }
}
@media (max-width: 425px) {
  .foto img {
    display: none;
  }
  .titulo {
    margin-top: 10px;
    text-align: center;
    height: 60px;
  }
}

@media (max-width: 375px) {
  #sidebar {
    margin-left: -150px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
  }
  #content.active {
    width: 99%;
  }
  #sidebarCollapse span {
    display: none;
  }

  .boton-menu {
    float: right;
    margin-right: -5px;
  }
  .contenido {
    position: relative;
    margin-top: 30px;
  }

  .titulo {
    margin-top: 0px;
    text-align: center;
    height: 80px;
  }
}
/* ACTUALIZAR DATOS CSS*/
.contenido {
  padding: 0;
}
form {
  padding: 50px;
}

label {
  font-weight: 500;
}
.but {
  background: #0099a1;
  color: white;
}
.but:hover {
  background: #01c2cc;
  color: white;
}

@media (max-width: 375px) {
  .contenido {
    position: relative;
    margin-top: 50px;
  }
  #content .boton-menu {
    margin-right: 10px;
  }
  form {
    margin-top: 30px;
    padding: 0;
  }
  .btn {
    margin-bottom: 10px;
  }
}

.foto {
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 20px;
}
.foto img {
  width: 100px;
  height: 100%;

  border-radius: 100%;
  box-shadow: 0 0 3px 3px #62bbe4;
  object-fit: cover;
}
</style>
