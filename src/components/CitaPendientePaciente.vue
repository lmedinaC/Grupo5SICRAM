<template>
  <div>
    <!-- Page Content  -->
    <div id="content"  >
      <div class="" >
        <button type="button" id="sidebarCollapse" class=" boton-menu">
          <i class="fas fa-align-left"></i>
          <span>Menú</span>
        </button>
      </div>
      <br>
      <div class="contenido">
        <div class="container" 
        style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); background:white;">
          <div
            class="row "
            style="background:#0099a1; height:60px; align-content: center;"
          >
            <div class="col-12 text-center">
              <h3 style="color:white">Mis Citas pendientes</h3>
            </div>
          </div>
          <table
            class="table table-striped table-hover tabla mt-4"
            style="border-style: solid; border-width: 2px; border-color: #f2f2f2; "
          >
            <thead class="text-center">
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Doctor</th>
                <th scope="col">Rango hora</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="(element, index) in datosUsuario" :key="index">
                <td>{{ element.fecha.substr(0, 10) }}</td>
                <td style="text-transform: uppercase;">
                  {{ element.doctor.nombre }} {{ element.doctor.apellido }}
                </td>
                <td>{{ element.horas }}</td>
                <td>
                  <div class="boton-group">
                      <button class="btn btn-success  mr-2">Ingresar</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CitaPendientePaciente",
  data() {
    return {
      mensaje: "",
      usuario: "",
      datosUsuario: {},
    };
  },
  mounted() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar, #content").toggleClass("active");
      $(".collapse.in").toggleClass("in");
      $("a[aria-expanded=true]").attr("aria-expanded", "false");
    });
    this.getDoctor();
  },
  methods: {
    getDoctor() {
      this.usuario = this.usuarioPaciente;
      this.axios
        .post("https://proyectocalidad9.herokuapp.com/paciente/cita/listar", {
          paciente_id: this.usuario,
        })
        .then((res) => {
          this.datosUsuario = res.data.citas;
          console.log(this.datosUsuario);
        })
        .catch((e) => {
          this.mensaje = e.response.data.message;
          console.log(e.response.data.message);
        });
    },
  },
  computed: {
    ...mapState(["usuarioPaciente"]),
  },
};
</script>

<style>
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
    margin-top: 50px;
  }
}

/* Actualizar cita css */
.contenido {
  padding: 0 20px;
}

label {
  font-weight: 500;
}
</style>
