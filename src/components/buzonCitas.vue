<template>
    <div>
        <div class="contenedor-pestaña col-11" >
                <div class="container-fluid">
                    <table class="table bg-light table-hover">
                                <thead class="bg-info">
                                  <tr>
                                    <th scope="col">Número</th>
                                    <th scope="col">Fecha/Hora</th>
                                    <th scope="col">Especialidad</th>
                                    <th scope="col">Doctor</th>
                                    
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>fecha1</td>
                                    <td>esp1</td>
                                    <td>Doc1</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>fecha2</td>
                                    <td>esp2</td>
                                    <td>Doc2</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>fecha3</td>
                                    <td>esp3</td>
                                    <td>Doc3</td>
                                  </tr>
                                </tbody>
                              </table>
                </div>
            </div>

    </div>
</template>

<script>
export default {
    name: 'buzonCitas',
    mounted(){
        $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    }
}
</script>

<style scoped>
        /*header */
header{
    width: 100%;
}

header img{
    display: inline-block;
    width: 130px;
    height: 40px;
    margin: 10px 0;
}   


/*barra principal */
.menu-principal{
    background: #ffffff;
    position: fixed;
    z-index: 1000;
    
    
}
.nav-sup-derecha{
    display: flex;
    align-items: center;
}
.menu-principal .nav-sup-derecha a{
    color: #293bd8;
    padding: 6px;
    
    
}
.menu-principal .nav-sup-derecha a:focus{
    background: none;
    text-decoration: none;
    color: white;
}
/* barra lateral */ 

.barra-lateral{
    background: #ffffff;
    min-width: 100px;
    min-height: 100vh;
    padding: 0;
    top: 60px;
    position: fixed;
    left: 0;
    z-index: 1000;
    
    justify-content: center;
    align-items: start;
    border-top: 1px solid rgba(99, 98, 98, 0.178);
    
  
   
}
.barra-lateral .menu-lateral {
    width: 100%;
}
.barra-lateral .menu-lateral a{
    color: #616161;
    display: block;
}

/* menu */
.barra-lateral .menu-lateral a{
    display: block;
    padding: 10px 6px;
    font-family: 'Roboto',sans-serif;
    font-weight: 500;
    width: 100%;
    
    
    
   
}

.barra-lateral .menu-lateral a:hover{
    background: rgba(88, 87, 87, 0.349);
    text-decoration: none;
}

.barra-lateral .menu-lateral a i{
    font-size: 15px;
    font-weight: 300;
    margin-right: 3px;
    
    
}
.barra-lateral .menu-lateral a i span{
    font-size: 10px;
    font-weight: 300;display: flex;

    
    
}
/* row2 */ 
.fila2{
    position: relative;
}
/*contenedor de la fila2*/
.contenedor-pestaña{
    position: relative;
    left: 100px;
    top: 100px;
    
    display: flex;
    
    
 
}
</style>