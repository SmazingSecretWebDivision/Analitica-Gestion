var titles = ["Big Data","Infraestructura","Integración",
			  "Business Analytics","Business Process Management",
			  "Seguridad","Gobierno de Información"];
var texts = ["Manejo de información en grandes cantidades que permite el entendimiento de grupos comportamentales en ambientes empresariales.",
			 "La infraestructura de TI hace referencia a toda la plataforma de elementos subyacentes necesarios para brindar tecnología a un usuario final. Esto incluye hardware (servidores, almacenamiento de datos, redes, sistemas convergentes), virtualización, administración, automatización y organización, y los medios para proporcionar las aplicaciones al cliente en forma de sistemas cliente (teléfonos inteligentes, laptops, tabletas, clientes ligeros, etc.).",
			 "Nuestro servicio de Integración de Sistemas tiene como objetivo entregar soluciones a proyectos complejos mediante la integración de sistemas que pueden incluir tareas de planificación, diseño, implementación y gestión de los mismos, para resolver necesidades específicas de sus clientes mediante el adecuado empleo de las TI.",
			 "Business analytics focuses on developing new insights and understanding of business performance based on data and statistical methods.",
			 "Disciplina de gestión compuesta de metodologías y tecnologías, cuyo objetivo es mejorar el desempeño (eficiencia y eficacia) y la optimización de los procesos de negocio de una organización, a través de la gestión de los procesos que se deben diseñar, modelar, organizar, documentar y optimizar de forma continua.",
			 "La sofisticación del uso y estrategia de Tecnología de Información conlleva la necesidad y obligación de mejorar las herramientas de seguridad. En todo el mundo los ataques cibernéticos se han incrementado con métodos innovadores.",
			 "disciplina encargada de la orquestación de gente, procesos y tecnología que permite habilitar a una compañía a apalancar la información como un recurso de valor empresarial, y al mismo tiempo, es la encargada de mantener a los usuarios, auditores y reguladores satisfechos, usando la mejora de la calidad de los datos para retener clientes, constituyendo y guiando a nuevas oportunidades en el mercado."];
var counter = 0;

$(document).ready(function(){
    $("#gearUp").click(function(){
		counter--;
		if(counter < 0)
		{
			counter = titles.length - 1;
		}
		
        $("#gearTitle").fadeToggle("slow");
		setTimeout(function(){
			$("#gearTitle").fadeToggle("slow");
			document.getElementById("gearTitle").innerHTML = titles[counter];
		}, 500);
		
		$("#gearText").fadeToggle("slow");
		setTimeout(function(){
			$("#gearText").fadeToggle("slow");
			document.getElementById("gearText").innerHTML = texts[counter];
		}, 500);
    });
	
	$("#gearDown").click(function(){
		counter++;
		if(counter > 6)
		{
			counter = 0;
		}
		
        $("#gearTitle").fadeToggle("slow");
		setTimeout(function(){
			$("#gearTitle").fadeToggle("slow");
			document.getElementById("gearTitle").innerHTML = titles[counter];
		}, 500);
		
		$("#gearText").fadeToggle("slow");
		setTimeout(function(){
			$("#gearText").fadeToggle("slow");
			document.getElementById("gearText").innerHTML = texts[counter];
		}, 500);
    });
});