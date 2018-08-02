var titles = ["Big Data","Infra","Integ",
			  "BusinessA","BusinessP",
			  "Seguridad","Gobierno"];
var texts = ["Manejo de información en grandes cantidades que permite el entendimiento de grupos comportamentales en ambientes empresariales.",
			 "La infraestructura de TI hace referencia a toda la plataforma de elementos subyacentes necesarios para brindar tecnología a un.",
			 "Nuestro servicio de Integración de Sistemas tiene como objetivo entregar soluciones a proyectos complejos mediante la integració",
			 "Business analytics focuses on developing new insights and understanding of business performance based on data and statistical methods.",
			 "Disciplina de gestión compuesta de metodologías y tecnologías, cuyo objetivo es mejorar el desempeño (eficiencia y eficacia) y la",
			 "La sofisticación del uso y estrategia de Tecnología de Información conlleva la necesidad y obligación de mejorar las herramientas",
			 "disciplina encargada de la orquestación de gente, procesos y tecnología que permite habilitar a una compañía a apalancar la info"];
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