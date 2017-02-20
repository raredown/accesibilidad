/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fechasConciertos=["2017-02-05", "2017-02-03", "2017-07-30"]; ;
function cargar(ruta) {
    $("#secion").load(ruta);
}
function chekear() {
  $('#mostrar').toggle();

}
function conciertos(){
   
    if (!fechasConciertos.indexOf($('#fechas').val()) >= 0){
        alert("Ese día no hay concierto");
    }
      
}