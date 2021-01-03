var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var startYear = 2000;
var endYear = 2020;
var month = 0;
var year = 0;
var actitvities = [{actividad:"Debes responder el cuestionario primero",categoria:"falsa"}];//javascript no tiene tuplas porque es una basura de lenguaje
var timeline = [];
var selectedDays = new Map();//key: day, Value: id
var selectedDays_view = new Map();//key: day, Value: id
var selectedDays_mod = new Map();//key: day, Value: id
var busyDays = new Map();//key:day, Value: actividad
var mousedown = false;
var mousemove = false;
var mod_action=0;
var mod_dia;

var resultados = [0,0,0,0,0,0,0,0,0,0];

var totalActivities = [
{actividad:"Trotar", categoria:"fisico"}, {actividad:"Natación",categoria:"fisico"},
{actividad: "Meditación",categoria:"mental"},{actividad:"Respiración controlada",categoria:"mental"},
{actividad:"Cenar con pareja",categoria:"amor-pareja"},{actividad:"Ir al cine con pareja",categoria:"amor-pareja"},
{actividad:"Película con familia",categoria:"familia"},{actividad:"Cenar con familia",categoria:"familia" },
{actividad: "Ir a un bar con amigos",categoria:"amigos"},{actividad:"Cenar con amigos",categoria:"amigos"},
{actividad:"Replantear metas",categoria:"proposito"},{actividad:"Buscas nuevos enfoques laborales",categoria:"proposito"},
{actividad: "Subir una montaña",categoria:"experiencias"},{actividad:"Salir a bucear",categoria:"experiencias"},
{actividad: "Rezar/Meditar",categoria:"espiritu"},{actividad:"Asistir al templo",categoria:"espiritu"},
{actividad:"Revisar gastos semanales",categoria:"finanzas"},{actividad:"Abrir una cuenta de ahorro",categoria:"finanzas"},
{actividad:"Leer un libro",categoria:"aprendizaje"},{actividad:"Visitar un museo",categoria:"aprendizaje"}];

var actMap=new Map();
let reformattedArray = totalActivities.map(obj => {
    actMap.set(obj.actividad,obj.categoria);
 })
 
 

function clearSelection(){
    if(selectedDays.size>0){
        console.log("clear");
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
    }

    if(selectedDays_view.size>0){
        document.getElementById(selectedDays_view.values().next().value).classList.toggle('selected');
        selectedDays_view.clear();
        replaceText("actividad_1_view","actividad_view","","p",document);
    }


    if(selectedDays_mod.size>0){
        document.getElementById(selectedDays_mod.values().next().value).classList.toggle('selected');
        selectedDays_mod.clear();
    }

    mod_action=0;

}