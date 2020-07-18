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
                        <h3 class="text-center font-weight-700">Nueva cita</h3>
                    </div>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEspecialidad">Especialidad</label>
                                <select id="inputEspecialidad" class="form-control">
                                    <option selected>-- Elegir --</option>
                                    <option>Cardiologia</option>
                                    <option>Anatomía Patológica</option>
                                    <option>Alergologia</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputDoctor">Doctor</label>
                                <select id="inputDoctor" class="form-control">
                                    <option selected>-- Elegir --</option>
                                    <option>Jorge</option>
                                    <option>Luisito</option>
                                    <option>Julio</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputFecha">Fecha</label>
                                <select id="inputFecha" class="form-control">
                                    <option selected>-- Elegir --</option>
                                    <option>no sé</option>
                                    <option>que formato poner XD</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputHora">Hora</label>
                                <select id="inputHora" class="form-control">
                                    <option selected>-- Elegir --</option>
                                    <option>09:00 - 10.00</option>
                                    <option>10:00 - 11.00</option>
                                    <option>11:00 - 12.00</option>
                                </select>
                            </div>
                        </div>
                       <div class="mb-5"></div>
                        
                        
                        <div class="text-center boton-final">  
                            
                            <button class="btn btn-lg btn-dark" type="submit">
                                Generar cita
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
export default {
    name:'NuevaCitaPaciente',
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

/* css nueva cita */
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