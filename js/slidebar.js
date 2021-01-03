var elementoPadre1 = document.querySelector(".inputDiv.i1");
var elementoPadre2 = document.querySelector(".inputDiv.i2");
var elementoPadre3 = document.querySelector(".inputDiv.i3");
var elementoPadre4 = document.querySelector(".inputDiv.i4");
var elementoPadre5 = document.querySelector(".inputDiv.i5");
var elementoPadre6 = document.querySelector(".inputDiv.i6");
var elementoPadre7 = document.querySelector(".inputDiv.i7");
var elementoPadre8 = document.querySelector(".inputDiv.i8");
var elementoPadre9 = document.querySelector(".inputDiv.i9");
var elementoPadre10 = document.querySelector(".inputDiv.i10");

var inputsRy = [];

function Input() {
  //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
  this.att = {};
  this.att.type = "range";
  this.att.value = 0;
  this.att.min = 0;
  this.att.max = 10;
  this.att.autocomplete = "off";
  this.att.step = "1";
  this.input;
  this.output;

  this.crear = function(elementoPadre) {
    // crea un nuevo elemento input
    this.input = document.createElement("input");
    //para cada propiedad del objeto att establece un nuevo atributo del elemento input
    for (var name in this.att) {
      if (this.att.hasOwnProperty(name)) {
        this.input.setAttribute(name, this.att[name]);
      }
    }
    // crea un nuevo elemento div
    this.output = document.createElement("div");
    // establece el valor del atributo class del nuevo div
    this.output.setAttribute("class", "output");
    // y el contenido (innerHTML) de este
    this.output.innerHTML = this.att.value;

    // inserta los dos elementos creados al final  del elemento Padre 
    elementoPadre.appendChild(this.input);
    elementoPadre.appendChild(this.output);
  }

  this.actualizar = function() {
    this.output.innerHTML = this.input.value;
    this.att.value = this.input.value;
  }
}

// setup
var i = new Input();
i.crear(elementoPadre1);
inputsRy.push(i);

var i2 = new Input();
i2.crear(elementoPadre2);
inputsRy.push(i2);

var i3 = new Input();
i3.crear(elementoPadre3);
inputsRy.push(i3);

var i4 = new Input();
i4.crear(elementoPadre4);
inputsRy.push(i4);

var i5 = new Input();
i5.crear(elementoPadre5);
inputsRy.push(i5);

var i6 = new Input();
i6.crear(elementoPadre6);
inputsRy.push(i6);

var i7 = new Input();
i7.crear(elementoPadre7);
inputsRy.push(i7);

var i8 = new Input();
i8.crear(elementoPadre8);
inputsRy.push(i8);

var i9 = new Input();
i9.crear(elementoPadre9);
inputsRy.push(i9);

var i10 = new Input();
i10.crear(elementoPadre10);
inputsRy.push(i10);

for (var n = 0; n < inputsRy.length; n++) {
  (function(n) {
    inputsRy[n].input.addEventListener("input", function() {
      inputsRy[n].actualizar();
    }, false)
  }(n));
}

function saveResults(){
  for(var n=0; n< inputsRy.length; n++){
    resultados[n] = inputsRy[n].input.value;
  }
}

function addActivities(){
  var balance = false;
  for(var n=0; n<10;n++){
    if (resultados[n] < 10){
      balance = true;
      break;
    }
  }

  if(balance){
    if(resultados[0] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "fisico"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
    if(resultados[1] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "mental"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
    if(resultados[2] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "amor/pareja"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
    if(resultados[3] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "familia"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
    if(resultados[4] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "amigos"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
    if(resultados[5] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "proposito"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
    if(resultados[6] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "experiencias"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
    if(resultados[7] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "espiritu"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
    if(resultados[8] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "finanzas"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
    if(resultados[9] < 10){
      for(var n=0; n< totalActivities.length; n++){
        if(totalActivities[n].categoria == "aprendizaje"){
          actitvities.push(totalActivities[n]);
        }
      }
    }
  }
  else{
    actitvities.push({actividad:"Todos tus parámetros están en 10 puntos. ¡Muy bien!",categoria:"falsa"})
  }
  
}

function cleanActivitiesList(){
  actitvities = [];
}

function showResults(){
  document.getElementById("results1").innerHTML = resultados[0];
  document.getElementById("results2").innerHTML = resultados[1];
  document.getElementById("results3").innerHTML = resultados[2];
  document.getElementById("results4").innerHTML = resultados[3];
  document.getElementById("results5").innerHTML = resultados[4];
  document.getElementById("results6").innerHTML = resultados[5];
  document.getElementById("results7").innerHTML = resultados[6];
  document.getElementById("results8").innerHTML = resultados[7];
  document.getElementById("results9").innerHTML = resultados[8];
  document.getElementById("results10").innerHTML = resultados[9];
}



/* Draw
function Draw(){
 requestId = window.requestAnimationFrame(Draw); 
  for( var n = 0; n< inputsRy.length; n++){
    inputsRy[n].update();
  }
}

requestId = window.requestAnimationFrame(Draw);
*/
// JavaScript Document