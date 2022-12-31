package com.estacion_sofka;

public abstract class Nave_Base {
	protected String nombre;
	protected String pais_fabricante;
	protected String pais_lanzamiento;
	protected String peso;
	protected String altura;
	protected String empuje;
	protected String tipo_nave;
	protected String puestaOrbita;
	
	//Según entendí, las lanzadoras son simplemente las que envían las verdaderas naves al espacio
	//Pero, tienen la capacidad de ser autopropulsadas hasta abandonar la tierra. Mientras las otras
	//dos sí necesitan apoyo (de una lanzadora) para poder salir.
	protected abstract void setPuestaEnOrbita();
	
}