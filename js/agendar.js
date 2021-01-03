
function loadCalendarMonths() {
    for (var i = 0; i < months.length; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function () {
                month = selectedMonth;
                document.getElementById("curMonth").innerHTML = months[month];
                loadCalendarDays();
                return month;
            }
        })();

        document.getElementById("months").appendChild(doc);
    }
}

function loadCalendarYears() {
    document.getElementById("years").innerHTML = "";

    for (var i = startYear; i <= endYear; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = i;
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedYear = i;
            return function () {
                year = selectedYear;
                document.getElementById("curYear").innerHTML = year;
                loadCalendarDays();
                return year;
            }
        })();

        document.getElementById("years").appendChild(doc);
    }
}

function loadCalendarDays() {
    document.getElementById("calendarDays").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay();       // find where to start calendar day of week

    for (var i = 0; i <= dayofweek; i++) {
        var d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays").appendChild(d);
    }

    for (var i = 0; i < num; i++) {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + tmp;
        d.className = "day";
        d.innerHTML = tmp;
        d.dataset.day = tmp;
        

        d.addEventListener('click', function(){
            //reset components
            replaceText("instruccion_1","instruccion","Seleccione un día disponible","h3",document);
            replaceText("actividad_1","actividad","","p",document);
            document.getElementById("actividad_1").classList.remove("fisico","amigos","mental","amor/pareja","familia","proposito","experiencias","espiritu","finanzas","aprendizaje");
            var lista_child=document.getElementById("lista_1");
            if (lista_child!=null){
                lista_child.remove();
            }
            var button = document.getElementById("button");
            if (button != null){
                button.remove();
            }
            var dia =this;
            this.classList.toggle('selected');

            if(selectedDays.size>0&&!selectedDays.has(this.dataset.day)){
                document.getElementById(selectedDays.values().next().value).classList.toggle('selected');
                selectedDays.clear();
            }

            if (!selectedDays.has(this.dataset.day)){
                selectedDays.set(this.dataset.day,this.id);
                
                if(!busyDays.has(this.dataset.day)){
                    //cambiar instruccion
                    replaceText("instruccion_1","instruccion","Seleccione una actividad","h3",document);


                    //desplegar lista de actividades
                    var parent = document.getElementById("dropdown_actividades");
                    var lista_child=document.getElementById("lista_1");
                    var list_actividades =document.createElement("select");
                    list_actividades.setAttribute("id","lista_1");
                    
                    for (var i = 0; i<actitvities.length;i++){
                        var option = document.createElement("option");
                        option.value = actitvities[i].actividad;
                        option.text = actitvities[i].actividad;
                        list_actividades.appendChild(option);
                    }
                    if (lista_child!=null){
                        parent.replaceChild(list_actividades,lista_child);
                    }else{
                        parent.appendChild(list_actividades);
                    }
                    var button = document.getElementById("button");
                    if (button == null){
                        button = document.createElement("button");
                        button.innerHTML="Confirmar";
                        button.addEventListener('click',function(){
                            if(list_actividades.value.localeCompare("Debes responder el cuestionario primero")!=0){
                                dia.classList.toggle('busy');
                                document.getElementById(dia.id.replace('_','__view')).classList.toggle('busy');
                                document.getElementById(dia.id.replace('_','__mod')).classList.toggle('busy');
                                for (var u = 0; u<actitvities.length;u++){
                                    if (actitvities[u].actividad==list_actividades.value){
                                        var selected=actitvities[u];
                                        break;
                                    }
                                }
                                
                                busyDays.set(dia.dataset.day,selected);
                                document.getElementById(selectedDays.values().next().value).classList.toggle('selected');
                                selectedDays.clear();
                                replaceText("instruccion_1","instruccion","Seleccione un día disponible","h3",document);
                                var lista_child=document.getElementById("lista_1");
                                if (lista_child!=null){
                                    lista_child.remove();
                                }
                                var button = document.getElementById("button");
                                if (button != null){
                                    button.remove();
                                }
                                replaceText("actividad_1","actividad","","p",document);
                                document.getElementById("actividad_1").classList.remove("fisico","amigos","mental","amor/pareja","familia","proposito","experiencias","espiritu","finanzas","aprendizaje");
                                AddTimelineEvent(selected.actividad , dia.dataset.day, "1");
                            }
                        });
                        button.setAttribute("id","button");
                        button.setAttribute("class","blue border-black text-white");
                        var parent_button = document.getElementById("boton_confirmar");
                        parent_button.appendChild(button);
                        
                    }
                    
                    

                    
                    
                }else{
                
                replaceText("actividad_1","actividad",busyDays.get(this.dataset.day).actividad,"p",document);
                document.getElementById("actividad_1").classList.toggle(actMap.get(busyDays.get(this.dataset.day).actividad))
                }
                
            }  
            else{
                selectedDays.clear();
                replaceText("instruccion_1","instruccion","Seleccione un día disponible","h3",document);
                var lista_child=document.getElementById("lista_1");
                if (lista_child!=null){
                    lista_child.remove();
                }
                var button = document.getElementById("button");
                if (button != null){
                    button.remove();
                }
                replaceText("actividad_1","actividad","","p",document);
                document.getElementById("actividad_1").classList.remove("fisico","amigos","mental","amor/pareja","familia","proposito","experiencias","espiritu","finanzas","aprendizaje");
            }
        });
        /*
        d.addEventListener('mousemove', function(e){
           e.preventDefault();
            if (mousedown)
            {
                this.classList.add('selected');

                if (!selectedDays.includes(this.dataset.day))
                    selectedDays.push(this.dataset.day);
            }
        });
        
        d.addEventListener('mousedown', function(e){
            e.preventDefault();
            mousedown = true;
        });
        
        d.addEventListener('mouseup', function(e){
            e.preventDefault();
            mousedown = false;
        });
        */
        document.getElementById("calendarDays").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays").appendChild(clear);
}

function daysInMonth(month, year)
{
    var d = new Date(year, month+1, 0);
    return d.getDate();
}
function replaceText(id_instruccion,id_padre,instruccion_nueva,tipo_texto,document){
    var instruccion =document.getElementById(id_instruccion);
    var para1 =document.createElement(tipo_texto);
    para1.setAttribute("id",id_instruccion);
    var node1 =document.createTextNode(instruccion_nueva);
    para1.appendChild(node1);
    var element = document.getElementById(id_padre);
    element.replaceChild(para1,instruccion);
}




window.addEventListener('load', function () {
    var date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
    document.getElementById("curMonth").innerHTML = months[month];
    document.getElementById("curYear").innerHTML = year;
    loadCalendarMonths();
    loadCalendarYears();
    loadCalendarDays();
});