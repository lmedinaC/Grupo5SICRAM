<template>
  <div id="menuPaciente">
       
      <nav id="sidebar">
          <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
            <div class="sidebar-header text-center" >
            <a href="/" style="color:#00405ef3;">
                <i class="fas fa-user-md fa-2x "></i>
               <p class="font-weight-bold">SICRAM</p>
            </a> 
            </div>

            <ul class="list-unstyled components">
                <p class="m-0">Paciente :</p>
                <p class="mb-1">"nombre"</p>

                <li class="active">
                    <a  href="#" @click="cambiarComponente('InicioPaciente')"><i class="fa fa-home icono" aria-hidden="true"></i>Inicio</a>
                </li>
                <li class="">
                    <a href="#PerfilSubmenu" v-b-toggle.collapse-1 data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                            class="fa fa-user icono" aria-hidden="true"></i>Perfil</a>
                   <b-collapse id="collapse-1" >         
                    <ul class="list-unstyled" id="PerfilSubmenu">
                        <li>
                            <a href="#" @click="cambiarComponente('PerfilPaciente')">Tu perfil</a>
                        </li>
                        <li>
                            <a href="#"  @click="cambiarComponente('ActualizarPaciente')">Actualizar datos</a>
                        </li>
                    </ul>
                    </b-collapse>
                </li>
                <li class="">
                    <a href="#citasSubmenu" v-b-toggle.collapse-2 data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i
                            class="fa fa-calendar icono" aria-hidden="true"></i>Citas</a>
                    <b-collapse id="collapse-2" >  
                    <ul class=" list-unstyled" id="citasSubmenu">
                        
                        <li>
                            <a href="#" @click="cambiarComponente('NuevaCitaPaciente')">Nueva cita</a>
                        </li>
                        <li>
                            <a href="#" @click="cambiarComponente('ActualizarCitaPaciente')">Actualizar cita</a>
                        </li>
                    </ul>
                    </b-collapse>
                </li>
                <li class="">
                    <a href="#BuzonSubmenu" v-b-toggle.collapse-3 data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fa fa-file icono" aria-hidden="true"></i>Buzón</a>
                    <b-collapse id="collapse-3" >  
                    <ul class=" list-unstyled" id="BuzonSubmenu" @click="cambiarComponente('asxd')">

                        <li>
                            <a href="#">Citas pendientes</a>
                        </li>
                        <li>
                            <a href="#">Citas pasadas</a>
                        </li>

                    </ul>
                   </b-collapse>
                </li>
                
                <li>
                    <a href="#"><i class="fa fa-arrow-left icono" aria-hidden="true"></i>
                        Salir</a>
                </li>
            </ul>
            </vue-custom-scrollbar>
        </nav>
       
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import { mapActions } from 'vuex'
export default {
    
    name: 'MenuPaciente',
    components: {
    vueCustomScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 50
      },
      componente: 'asdasdasd',
    }
  },
  methods: {
      
    scrollHanle(evt) {
      console.log(evt)
    },
    ...mapActions(['cambiarComponente'])

    
  },

    
    mounted(){
        $(document).ready(function () {
    
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $(document).keydown(function (tecla) {

        if (tecla.keyCode == 37) {
        	if($('#sidebar').hasClass('active')==false){
        		$('#sidebar, #content').toggleClass('active');
        	}
        
        }
        if(tecla.keyCode == 39){
        	if($('#sidebar').hasClass('active')==true){
        		$('#sidebar, #content').toggleClass('active');
        	}
        }
    });
});
    
    }
}

</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
.menuPaciente{
    display: flex;
    width: 100%;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
}
#sidebar {
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: #03a8f4d5;
    color: #fff;
    transition: all 0.3s;
}

#sidebar.active {
    margin-left: -150px;
}

#sidebar .sidebar-header {
    display: flex;
    flex-direction: column;
    padding: 15px 0 5px 0; 
    background: #03A9F4;
    align-items: center;
    
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #03A9F4;
    border-top: 1px solid #03A9F4;
}

#sidebar ul p {
    color: whitesmoke;
    padding:  0 5px;
    
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
    text-decoration:none;
    color: white;
}


#sidebar ul li a:hover {
   
    background: rgba(25, 209, 223, 0.603);
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: #ffffff;
    background:#0578ad25;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

#sidebar ul ul a {
    font-size: 0.9em !important;
    padding-left: 25px !important;
    background: #03A9F4;
}


/*imagen*/ 
#sidebar-header img{
    width: 40px;
   
}

/*icono */ 
.icono{
    font-size: 15px;
    margin-right: 10px;
    font-weight: 300;
}   

.scroll-area {
  position: relative;
  margin: auto;
  height: 600px;
}
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
        box-shadow: 0 0 6px #03a8f4d5;
        border-radius: 30px;
        outline: none !important;
        border: none;
        margin-bottom: 15px;
        
    }
    
}

@media (max-width:375px){
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

    .boton-menu{
        float:right;
        margin-right: -5px;
    }
    .contenido{
        position: relative;
        margin-top: 30px;
    }

}
</style>

