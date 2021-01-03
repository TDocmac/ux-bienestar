
function loadCalendarMonths_mod() {
    for (var i = 0; i < months.length; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function () {
                month = selectedMonth;
                document.getElementById("curMonth_mod").innerHTML = months[month];
                loadCalendarDays_mod();
                return month;
            }
        })();

        document.getElementById("months_mod").appendChild(doc);
    }
}

function loadCalendarYears_mod() {
    document.getElementById("years_mod").innerHTML = "";

    for (var i = startYear; i <= endYear; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = i;
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedYear = i;
            return function () {
                year = selectedYear;
                document.getElementById("curYear_mod").innerHTML = year;
                loadCalendarDays_mod();
                return year;
            }
        })();

        document.getElementById("years_mod").appendChild(doc);
    }
}

function loadCalendarDays_mod() {
    document.getElementById("calendarDays_mod").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay();       // find where to start calendar day of week

    for (var i = 0; i <= dayofweek; i++) {
        var d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays_mod").appendChild(d);
    }

    for (var i = 0; i < num; i++) {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday__mod" + tmp;
        d.className = "day";
        d.innerHTML = tmp;
        d.dataset.day = tmp;
        

        d.addEventListener('click', function(){
            //reset components
            replaceText("instruccion_1_mod","instruccion_mod","Seleccione un día con actividad a modificar","h3",document);
            replaceText("actividad_1_mod","actividad_mod","","p",document);
            document.getElementById("actividad_1_mod").classList.remove("fisico","amigos","mental","amor/pareja","familia","proposito","experiencias","espiritu","finanzas","aprendizaje");

            deleteBtns();
           
            var button_mod = document.getElementById("button_mod");
            if (button_mod != null){
                button_mod.remove();
            }
            
            mod_dia=this;
            this.classList.toggle('selected');

            if(selectedDays_mod.size>0&&!selectedDays_mod.has(this.dataset.day)){
                document.getElementById(selectedDays_mod.values().next().value).classList.toggle('selected');
                selectedDays_mod.clear();
            }

            if (!selectedDays_mod.has(this.dataset.day)){
                selectedDays_mod.set(this.dataset.day,this.id);
                
                if(busyDays.has(this.dataset.day)){
                    //mostrar actividad
                    replaceText("actividad_1_mod","actividad_mod",busyDays.get(this.dataset.day).actividad,"p",document);
                    document.getElementById("actividad_1_mod").classList.toggle(actMap.get(busyDays.get(this.dataset.day).actividad))
                    //cambiar instruccion
                    replaceText("instruccion_1_mod","instruccion_mod","Seleccione una acción","h3",document);

                    //desplegar botones
                    var parent_btn = document.getElementById("options_mod");
                    var btn_completado=document.createElement("button");
                    var btn_dnf=document.createElement("button");
                    var btn_eliminar=document.createElement("button");
                    var descripcion=document.createElement("h3");
                    descripcion.setAttribute("id","descripcion_mod");
                    btn_completado.setAttribute("id","btn_completado");
                    btn_completado.setAttribute("class","green circle icon ion-checkmark-circled margin align-left");
                    
                    btn_completado.addEventListener('click',function(){
                        if (mod_action!=1){
                            mod_action=1;
                            btn_completado.setAttribute("class","green-800 big circle icon ion-checkmark-circled margin align-left");
                            btn_dnf.setAttribute("class","red circle icon ion-close-circled margin align-center");
                            btn_eliminar.setAttribute("class","grey circle icon ion-trash-b margin align-right");
                            replaceText("descripcion_mod","options_mod","¿Marcar actividad como completada?","h3",document);
                            var button_mod = document.getElementById("button_mod");
                            if (button_mod == null){
                                confirmBtn();
                            }
                        }else{
                            mod_action=0;
                            btn_completado.setAttribute("class","green circle icon ion-checkmark-circled margin align-left");
                            var button_mod = document.getElementById("button_mod");
                            if (button_mod != null){
                                button_mod.remove();
                            }
                            replaceText("descripcion_mod","options_mod","","h3",document);
                        }
                       
                    });
                    btn_dnf.setAttribute("id","btn_dnf");
                    btn_dnf.setAttribute("class","red circle icon ion-close-circled margin align-center");
                    btn_dnf.addEventListener('click',function(){
                        if (mod_action!=2){
                            mod_action=2;
                            btn_completado.setAttribute("class","green circle icon ion-checkmark-circled margin align-left");
                            btn_dnf.setAttribute("class","red-800 big circle icon ion-close-circled margin align-center");
                            btn_eliminar.setAttribute("class","grey circle icon ion-trash-b margin align-right");
                            replaceText("descripcion_mod","options_mod","¿Marcar actividad como no realizada?","h3",document);
                            var button_mod = document.getElementById("button_mod");
                            if (button_mod == null){
                                confirmBtn();
                            }
                        }else{
                            mod_action=0;
                            btn_dnf.setAttribute("class","red circle icon ion-close-circled margin align-center");
                            replaceText("descripcion_mod","options_mod","","h3",document);
                            var button_mod = document.getElementById("button_mod");
                            if (button_mod != null){
                                button_mod.remove();
                            }
                            
                        }
                       
                    });
                    btn_eliminar.setAttribute("id","btn_eliminar");
                    btn_eliminar.setAttribute("class","grey circle icon ion-trash-b margin align-right");
                    btn_eliminar.addEventListener('click',function(){
                        if (mod_action!=3){
                            mod_action=3;
                            btn_completado.setAttribute("class","green circle icon ion-checkmark-circled margin align-left");
                            btn_dnf.setAttribute("class","red circle icon ion-close-circled margin align-center");
                            btn_eliminar.setAttribute("class","grey-800 big circle icon ion-trash-b margin align-right");
                            replaceText("descripcion_mod","options_mod","¿Eliminar actividad?","h3",document);
                            var button_mod = document.getElementById("button_mod");
                            if (button_mod == null){
                                confirmBtn();
                            }
                        }else{
                            mod_action=0;
                            btn_eliminar.setAttribute("class","grey circle icon ion-trash-b margin align-right");
                            replaceText("descripcion_mod","options_mod","","h3",document);
                            var button_mod = document.getElementById("button_mod");
                            if (button_mod != null){
                                button_mod.remove();
                            }
                        }
                       
                    });
                    parent_btn.appendChild(btn_completado);
                    parent_btn.appendChild(btn_dnf);
                    parent_btn.appendChild(btn_eliminar);
                    parent_btn.appendChild(descripcion);
                    

                    
                    
                }else{
                
                    replaceText("instruccion_1_mod","instruccion_mod","Seleccione un día con actividad a modificar","h3",document);

                }
                
            }  
            else{
                selectedDays_mod.clear();
                replaceText("instruccion_1_mod","instruccion_mod","Seleccione un día con actividad a modificar","h3",document);
                replaceText("actividad_1_mod","actividad_mod","","p",document);
                document.getElementById("actividad_1_mod").classList.remove("fisico","amigos","mental","amor/pareja","familia","proposito","experiencias","espiritu","finanzas","aprendizaje");
            }
        });

        document.getElementById("calendarDays_mod").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays_mod").appendChild(clear);
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

function deleteBtns(){
    var btn1=document.getElementById("btn_completado");
    if (btn1!=null){
        btn1.remove();
    }
    var btn2=document.getElementById("btn_dnf");
    if (btn2!=null){
        btn2.remove();
    }
    var btn3=document.getElementById("btn_eliminar");
    if (btn3!=null){
        btn3.remove();
    }
    var desc=document.getElementById("descripcion_mod");
    if (desc!=null){
        desc.remove();
    }
}

function confirmBtn(){
    var dia = mod_dia;
    var button_mod = document.getElementById("button_mod");
    if (button_mod == null){
        button_mod = document.createElement("button");
        button_mod.innerHTML="Confirmar";
        button_mod.setAttribute("class","align-center")
        button_mod.addEventListener('click',function(){
            if(mod_action==1){
                alert('Actividad marcada como completada.');
                dia.classList.remove('done','failed');
                document.getElementById(dia.id.replace('__mod','__view')).classList.remove('done','failed');
                document.getElementById(dia.id.replace('__mod','_')).classList.remove('done','failed');
                dia.classList.toggle('done');
                document.getElementById(dia.id.replace('__mod','__view')).classList.toggle('done');
                document.getElementById(dia.id.replace('__mod','_')).classList.toggle('done');
                
                //replaceText("actividad_1","actividad",list_actividades.value,"p",document);
                document.getElementById(selectedDays_mod.values().next().value).classList.toggle('selected');
                selectedDays_mod.clear();
                replaceText("instruccion_1_mod","instruccion_mod","Seleccione un día con actividad a modificar","h3",document);
                deleteBtns();
                var button_mod = document.getElementById("button_mod");
                if (button_mod != null){
                    button_mod.remove();
                }
                AddTimelineUpdate(document.getElementById("actividad_1_mod").innerHTML,"Completada");
                replaceText("actividad_1_mod","actividad_mod","","p",document);
                document.getElementById("actividad_1_mod").classList.remove("fisico","amigos","mental","amor/pareja","familia","proposito","experiencias","espiritu","finanzas","aprendizaje");
                
                //agragar evento a timeline
                //AddTimelineEvent(selected.actividad);
            }else if(mod_action==2){
                alert('Actividad marcada como no realizada.');
                dia.classList.remove('done','failed');
                document.getElementById(dia.id.replace('__mod','__view')).classList.remove('done','failed');
                document.getElementById(dia.id.replace('__mod','_')).classList.remove('done','failed');
                dia.classList.toggle('failed');
                document.getElementById(dia.id.replace('__mod','__view')).classList.toggle('failed');
                document.getElementById(dia.id.replace('__mod','_')).classList.toggle('failed');
                
                //replaceText("actividad_1","actividad",list_actividades.value,"p",document);
                document.getElementById(selectedDays_mod.values().next().value).classList.toggle('selected');
                selectedDays_mod.clear();
                AddTimelineUpdate(document.getElementById("actividad_1_mod").innerHTML,"No Realizada");
                replaceText("instruccion_1_mod","instruccion_mod","Seleccione un día con actividad a modificar","h3",document);
                deleteBtns();
                var button_mod = document.getElementById("button_mod");
                if (button_mod != null){
                    button_mod.remove();
                }
                replaceText("actividad_1_mod","actividad_mod","","p",document);
                document.getElementById("actividad_1_mod").classList.remove("fisico","amigos","mental","amor/pareja","familia","proposito","experiencias","espiritu","finanzas","aprendizaje");
                //agragar evento a timeline
                //AddTimelineEvent(selected.actividad);
            }else if (mod_action==3){
                alert({
                    title:'Alerta',
                    message:'¿Está seguro que desea eliminar la actividad?',
                    class:'red',
                    buttons:[
                        {
                        label: 'SÍ',
                        class:'red-900',
                        onclick: function(){
                            //You code when user click in OK button.
                            dia.classList.remove('busy','done','failed');
                            document.getElementById(dia.id.replace('__mod','__view')).classList.remove('busy','done','failed');
                            document.getElementById(dia.id.replace('__mod','_')).classList.remove('busy','done','failed');
                            busyDays.delete(dia.dataset.day);
                            
                            //replaceText("actividad_1","actividad",list_actividades.value,"p",document);
                            document.getElementById(selectedDays_mod.values().next().value).classList.toggle('selected');
                            selectedDays_mod.clear();
                            AddTimelineUpdate(document.getElementById("actividad_1_mod").innerHTML,"Eliminada");
                            replaceText("instruccion_1_mod","instruccion_mod","Seleccione un día con actividad a modificar","h3",document);
                            deleteBtns();
                            var button_mod = document.getElementById("button_mod");
                            if (button_mod != null){
                                button_mod.remove();
                            }
                            replaceText("actividad_1_mod","actividad_mod","","p",document);
                            document.getElementById("actividad_1_mod").classList.remove("fisico","amigos","mental","amor/pareja","familia","proposito","experiencias","espiritu","finanzas","aprendizaje");
                            //agragar evento a timeline
                            //AddTimelineEvent(selected.actividad);
                            closeAlert();
                            }
                        },
                        {
                        label:'NO',
                        class:'text-white',
                        onclick: function(){
                            closeAlert();
                            }
                        }
                    ]
                    });
            }
        });
        button_mod.setAttribute("id","button_mod");
        button_mod.setAttribute("class","blue border-black text-white");
        var parent_button_mod = document.getElementById("boton_confirmar_mod");
        parent_button_mod.appendChild(button_mod);
        
    }
}


window.addEventListener('load', function () {
    var date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
    document.getElementById("curMonth_mod").innerHTML = months[month];
    document.getElementById("curYear_mod").innerHTML = year;
    loadCalendarMonths_mod();
    loadCalendarYears_mod();
    loadCalendarDays_mod();
});