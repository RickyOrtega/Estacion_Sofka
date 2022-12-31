<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="ISO-8859-1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/styles_nave_creada.css">
    <title>¡Nave creada!</title>
</head>
<body>
	
	<%@ page import="java.sql.*" %>
	
	<%

		String nombre = request.getParameter("nombre");
		String fecha = request.getParameter("fecha");
		String pais_nave = request.getParameter("pais_nave");
		String pais_lanzamiento = request.getParameter("pais_lanzamiento");
		String peso = request.getParameter("peso");
		String altura = request.getParameter("altura");
		String empuje = request.getParameter("empuje");
		String tipo_nave = request.getParameter("tipo_nave");

		if(tipo_nave.equals("lanzadera"){
			String
		}
	%>

    <div class="contenedor">
        <header>
            <nav>
                <ul>
                    <li>Mis naves</li>
                    <li>Nueva nave</li>
                </ul>
            </nav>
        </header>
        <main>
            <div class="contenido">
                <p>
                    NADA POR AQUÍ :(
                    <br>
                    ¡Crea una nueva nave!
                </p>
            </div>
        </main>
        <footer>
            <div class="red-social">
                <a href="https://github.com/RickyOrtega"><img src="resources/img/github.svg"
                        alt="Enlace a mi cuenta de GitHub"></a>
            </div>
            <div class="red-social">
                <a href="https://www.linkedin.com/in/rickyrhonaldoortegavital/"><img src="resources/img/linkedin.svg"
                        alt="Enlace a mi cuenta de GitHub"></a>
            </div>
        </footer>
    </div>
</body>
</html>