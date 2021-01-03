function AddTimelineEvent(nombre_evento ,diaE,mesE) {
    var documento = document.getElementById("TimelineHome");

    var fecha = new Date();
    var mes = fecha.getMonth() + 1;
    var dia  = fecha.getDate();
    var anno = fecha.getFullYear();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();


    var timelineEvent = document.createElement("div");
    timelineEvent.className = "row";

    var columna = document.createElement("div");
    columna.className = "col-10 align-center marker";

    var icono = document.createElement("div");
    icono.className = "icon-circle-small text-white cyan-700";

    var i = document.createElement("i");
    i.className = "icon ion-home";

    icono.appendChild(i);
    columna.appendChild(icono);
    timelineEvent.appendChild(columna);

    var colRadius = document.createElement("div");
    colRadius.className = "col shadow radius margin white";

    var margen = document.createElement("div");
    margen.className = "margin";

    negrita = document.createElement("h2");
    negrita.className = "text-bold";
    negrita.innerHTML = dia +"/"+ mes+"/"+anno + " - " + hora + ":" + minuto + " Actividad";


    head2 = document.createElement("h2");
    head2.innerHTML = "Has elegido la actividad "+nombre_evento +" para la fecha: "+diaE+"/"+mesE;

    textogris = document.createElement("p");
    textogris.className = "text-grey";
    textogris.innerHTML = "Actividad agendada";


    margen.appendChild(negrita);
    margen.appendChild(head2);
    margen.appendChild(textogris);
    colRadius.appendChild(margen);
    timelineEvent.appendChild(colRadius);

    documento.prepend(timelineEvent);
}

function AddTimelineTest() {
    var documento = document.getElementById("TimelineHome");
    var fecha = new Date();
    var mes = fecha.getMonth() + 1;
    var dia  = fecha.getDate();
    var anno = fecha.getFullYear();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();


    var timelineEvent = document.createElement("div");
    timelineEvent.className = "row";

    var columna = document.createElement("div");
    columna.className = "col-10 align-center marker";

    var icono = document.createElement("div");
    icono.className = "icon-circle-small text-white cyan-700";

    var i = document.createElement("i");
    i.className = "icon ion-home";

    icono.appendChild(i);
    columna.appendChild(icono);
    timelineEvent.appendChild(columna);

    var colRadius = document.createElement("div");
    colRadius.className = "col shadow radius margin white";

    var margen = document.createElement("div");
    margen.className = "margin";

    negrita = document.createElement("h2");
    negrita.className = "text-bold";
    negrita.innerHTML = dia +"/"+ mes+"/"+anno + " - " + hora + ":" + minuto + " Test";


    head2 = document.createElement("h2");
    head2.innerHTML = "Has realizado una autoevaluacion!";

    textogris = document.createElement("p");
    textogris.className = "text-grey";
    textogris.innerHTML = "Datos actualizados";


    margen.appendChild(negrita);
    margen.appendChild(head2);
    margen.appendChild(textogris);
    colRadius.appendChild(margen);
    timelineEvent.appendChild(colRadius);

    documento.prepend(timelineEvent);
}

function AddTimelineUpdate(Actividad, cambio) {
    var documento = document.getElementById("TimelineHome");
    var fecha = new Date();
    var mes = fecha.getMonth() + 1;
    var dia  = fecha.getDate();
    var anno = fecha.getFullYear();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();


    var timelineEvent = document.createElement("div");
    timelineEvent.className = "row";

    var columna = document.createElement("div");
    columna.className = "col-10 align-center marker";

    var icono = document.createElement("div");
    icono.className = "icon-circle-small text-white cyan-700";

    var i = document.createElement("i");
    i.className = "icon ion-home";

    icono.appendChild(i);
    columna.appendChild(icono);
    timelineEvent.appendChild(columna);

    var colRadius = document.createElement("div");
    colRadius.className = "col shadow radius margin white";

    var margen = document.createElement("div");
    margen.className = "margin";

    negrita = document.createElement("h2");
    negrita.className = "text-bold";
    negrita.innerHTML = dia +"/"+ mes+"/"+anno + " - " + hora + ":" + minuto +" "+ cambio;


    head2 = document.createElement("h2");
    head2.innerHTML = "La actividad " + Actividad +" ha pasado al estado: "+ cambio;

    textogris = document.createElement("p");
    textogris.className = "text-grey";
    textogris.innerHTML = "Actividad actualizada";


    margen.appendChild(negrita);
    margen.appendChild(head2);
    margen.appendChild(textogris);
    colRadius.appendChild(margen);
    timelineEvent.appendChild(colRadius);

    documento.prepend(timelineEvent);
}