/*Todas las validaciones y demás antes de enviar a BBDD las hice con JS.

    Quiero aclararar que JS no es mi fuerte, solo lo hice así porque
    sinceramente es más fácil y rápido.
*/
let tipo_nave = document.getElementById("tipo_nave");
let contenido= document.getElementById("contenido_emergente");

tipo_nave.addEventListener("change",getTipoNave);

function getTipoNave() {
    const tipo_nave_value = tipo_nave.value;

    contenido.innerHTML="";

    if(tipo_nave_value=="lanzadera"){
        aparecerContenidoLanzadera();
    }
    if(tipo_nave_value=="tripulada"){
        aparecerContenidoNoTripulada();
    }
    if(tipo_nave_value=="no_tripulada"){
        aparecerContenidoTripulada();
    }

    contenido.innerHTML+="<div class=\"botones_abajo\"><input type=\"button\" value=\"Borrar formulario\"><input type=\"submit\" value=\"Crear ->\"></div>";
}

function aparecerContenidoLanzadera(){
    contenido.innerHTML="<label for=\"tipo_combustible\">Tipo de combustible:<select name=\"tipo_combustible\" id=\"tipo_combustible\"><option value=\"hidracina\">Hidracina</option><option value=\"MMH\">MMH</option><option value=\"oxid_nit\">Óxido nítrico</option><option value=\"oxig_liq\">Oxígeno líquido</option><option value=\"pet_ref\">Petróleo refinado</option><option value=\"tet_nit\">Tetróxido de nitrógeno</option></select></label><label for=\"capacidad_carga\">Capacidad de Carga:<input type=\"number\" name=\"capacidad_carga\" id=\"capacidad_carga\" placeholder=\"En Toneladas\"></label><label for=\"objetos\">Objeto/s que transporta:<input type=\"text\" name=\"capacidad_carga\" id=\"objetos\"></label>";
}

function aparecerContenidoTripulada(){
    contenido.innerHTML="<label for=\"cantidad_motores\">Cantidad de Motores:<input type=\"number\" name=\"cantidad_motores\"></label><label for=\"cuerpo_observado\">Cuerpo celeste observado:<input type=\"text\" name=\"cuerpo_observado\"></label><label for=\"cuerpo_orbitado\">Cuerpo celeste orbitando:<input type=\"text\" name=\"cuerpo_orbitado\"></label>";
}

function aparecerContenidoNoTripulada(){
    contenido.innerHTML="<label for=\"distancia_orbita\">Distancia a la que orbita (de la tierra):<input type=\"text\" name=\"distancia_orbita\" placeholder=\"En Km\"></label><label for=\"distancia_orbita\">Tripulación max.:<input type=\"number\" name=\"distancia_orbita\"></label>";
}