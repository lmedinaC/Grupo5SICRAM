<template>
  <div>
      <!-- Page Content  -->
        <div id="content">
            <div class="">
                <button type="button" id="sidebarCollapse" class=" boton-menu mb-0 pb-0">
                    <i class="fas fa-align-left"></i>
                    <span>Menú</span>
                </button>
            </div>
            <div class="contenido">
                <div class="container">
                    <div class=" titulo">
                        <h3>Actualización de datos</h3>
                    </div>
                    <form>
                        <div class="form-row ">
                            <div class="form-group col-md-6">
                                <label for="inputNombre">Nombres</label>
                                <input type="text" class="form-control" id="inputNombre">
                            </div>
                            <div class="form-group col-md-6 ">
                                <label for="inputApellido">Apellidos</label>
                                <input type="text" class="form-control" id="inputApellido">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputDNI">DNI</label>
                                <input type="text" class="form-control" id="inputDNI">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputNewPassword">Contraseña</label>
                                <input type="password" class="form-control" id="inputNewPassword">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputGenero">Genero</label>
                                <select id="inputGenero" class="form-control">
                                    <option selected>-- Elegir --</option>
                                    <option>Femenino</option>
                                    <option>Masculino</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputEdad">Discapacidad</label>
                                <input type="text" class="form-control" id="inputEdad">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCelular">Edad</label>
                                <input type="text" class="form-control" id="inputCelular">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputCMP">Celular</label>
                                <input type="text" class="form-control" id="inputCMP">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="inputProfesion">Dirección</label>
                                <input type="text" class="form-control" id="inputProfesion">
                            </div>
                            
                        </div>
                        
                        <div class="text-center boton-final">  
                            <a href="formPaciente.html"><button class="btn btn-dark btn-lg">Actualizar</button></a>
 
                        </div>
                    </form>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
export default {
 name: 'ActualizarPaciente',
mounted(){
       $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    }
}
</script>

<style  scoped>
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
/* ACTUALIZAR DATOS CSS*/
.contenido{   
    padding:  0; 
}
form{
    padding: 50px;
}

label{
    font-weight: 500;
}


.boton-final button:hover{
    background:rgba(19, 101, 107, 0.829); 
}


.boton-final button:focus{
    background:rgba(19, 101, 107, 0.829) !important; 
    box-shadow: none !important;
}

@media (max-width:375px){
    .contenido{
        position: relative;
        margin-top: 30px;
    }
    #content .boton-menu{
        margin-right: 10px;
    }
    form{
        padding: 0;
    }
    .btn{
        margin-bottom: 10px;
    }
}

</style>