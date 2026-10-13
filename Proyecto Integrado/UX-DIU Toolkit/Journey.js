/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DAW2.Adrián y Jesús";
        $scope.Curso ="2026/27";
        $scope.Github_ID ="https://github.com/saltacohetes/Atlantida-2DAW/tree/main/Proyecto%20Integrado/UX-DIU%20Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Fernando",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Le han regalado una impresora 3D por su jubilación",
                touch1: "Instrucciones",
                feel1: "4",
                con1: "No sabe muy bien para que va a usarla ",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet como usar su impresora y empieza a sacar miniaturas de su sagas de juegos y series favoritas",
                touch2: "Ordenador e impresora",
                feel2: "2",
                con2: "Hay mucha información y logra sacar sus piezas de la impresora perfectas pero no sabe que hacer con ellas",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un local cercano donde le enseñen a pintar esas miniaturas y poder sociabilizar con gente de su edad",
                touch3: "móvil (el tiempo)",
                feel3: "3",
                con3: "Está preocupado por el tiempo y el desplazamiento (coche y aparcamiento)",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Su hijo le ha recomendado un par de asociaciones y alguna tienda donde puede probar",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 3 opciones que encajan en sus preferencias",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "Llama a las asociaciones pero o le dan largas con las clases de pintura o no contestan",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Encuentra nuestra web la cual está muy organizada y puede reservar sin problemas y mirar fechas libres",
                touch6: "ordenador",
                feel6: "3",
                con6: "Puede que tenga que cancelar alguna fecha y el botón no es fácil de encontrar",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Paquita",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Se ha interesado por el vasto universo de warhammer",
                touch1: "agenda",
                feel1: "5",
                con1: "No conoce a nadie con ese tipo de gustos",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Mira webs de miniaturas para comprarse alguna y probar a jugar con ellas",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Se mofan de ella ya que sus miniaturas permenecen grises en el campo de batalla",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Quiere buscar clases de pintura ya que quiere pintar su ejercito de minis",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "La tienda donde juega tiene clases de pintura pero le dan largas",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Empieza a  pinbtar con dos amigos suyos",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "Siente que no avanza aunque se lo pasa muy bien con sus amigos",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Empiezan a buscar los 3 una mejor opcionpara poder aprender a mejorar y no estancarse",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "La tienda les da largas y dicen que no hay horarios o plazas para 3",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Encuentra nuestra asociación y gracias a su maravilloso calendario puede ir con sus 2 amigos",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver donde aparacar!",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



