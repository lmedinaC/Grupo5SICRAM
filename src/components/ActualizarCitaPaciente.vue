<template>
  <div>
      <!-- Page Content  -->
        <div id="content">
            <div class="">
                <button type="button" id="sidebarCollapse" class=" boton-menu">
                    <i class="fas fa-align-left"></i>
                    <span>Menú</span>
                </button>
            </div>
            <div class="contenido">
                <table class="table table-striped table-hover tabla">
                    <thead>
                        <tr>
                            <td colspan="4">
                                <p class="m-0"><b> Mi horario</b></p>
                            </td>
                        </tr>
                      <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora inicio</th>
                        <th scope="col">Hora fin</th>
                        <th scope="col">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td >01/01/2020</td>
                        <td>08:00</td>
                        <td>13:00</td>
                        <td>
                            <div class="boton-group">
                                <a href="" class="btn btn-primary btn-sm">Actualizar</a>   
                                <a href="" class="btn btn-danger btn-sm">Eliminar</a> 
                            </div>
                            
                        </td>
                      </tr>
                      <tr>
                        <td >01/01/2020</td>
                        <td>08:00</td>
                        <td>13:00</td>
                        <td>
                            <div class="boton-group">
                                <a href="" class="btn btn-primary btn-sm">Actualizar</a>   
                                <a href="" class="btn btn-danger btn-sm">Eliminar</a> 
                            </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td >01/01/2020</td>
                        <td>08:00</td>
                        <td>13:00</td>
                        <td>
                            <div class="boton-group">
                                <a href="" class="btn btn-primary btn-sm">Actualizar</a>   
                                <a href="" class="btn btn-danger btn-sm">Eliminar  </a> 
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td >01/01/2020</td>
                        <td>08:00</td>
                        <td>13:00</td>
                        <td>
                            <div class="boton-group">
                                <button href="" class="btn btn-primary btn-sm">Actualizar</button>   
                                <button href="" class="btn btn-danger btn-sm">Eliminar</button> 
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td >01/01/2020</td>
                        <td>08:00</td>
                        <td>13:00</td>
                        <td>
                            <div class="boton-group">
                                <button href="" class="btn btn-primary btn-sm">Actualizar</button>   
                                <button href="" class="btn btn-danger btn-sm">Eliminar</button> 
                            </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'ActualizarCitaPaciente',
    mounted(){
        $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    }
}
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
p {
    font-family: 'Poppins', sans-serif;
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
#content{
    width: calc(100% - 150px);
    padding: 10px 0 0 0px;
    min-height: 100vh;
    transition: all 0.3s;
    position: absolute;
    top: 0;
    right: 0;
}

#content.active {
    width: 100%;
}

#content .contenido{
    position: relative;
    top:10px;
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

/* Actualizar cita css */
.contenido{
    padding: 0 20px;
}

</style>