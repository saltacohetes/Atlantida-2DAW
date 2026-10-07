/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Fernando",
				Photo: "Cliente.webp",
				Quote: "Soy padre",
				Age: 67,
				Occupation: "Funcionario Jubilado",
				Family: "Con su mujer desde que se conocieron y con dos hijos ya criados",
				Location: "Granada (La Chana)",
				Character: "Se jubiló y ahora puede hacer cosas con su tiempo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Disfrutar del tiempo libre", "Encontrar amigos de su edad"],
				Frustrations: ["Le gusta la tecnología, pero siempre 'llama a alguno de sus hijos' para resolver problemas", "Le gustaría encontrar algun sitio organizado y con espacio sociable"],
				Bio: "Es de Peligros y se mudó a Granada para trabajar en su plaza fija, tras saltar de hobby en hobby se ha dado cuenta de que lo que quiere es un sitio donde poder socializar y ahcer actividades. LLeva 2 años intentando organizarse para que le den clases de pintura pero pasan de el en la tienda y no tiene metodo de apuntarse más allá del ir a probar suerte",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 1 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos: "LLeva un tiempo intentando hacer cosas y quiere probar a pintar u otro hobbys frikis.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Paquita",
				Photo: "woman.png",
				Quote: "¡Me gusta el arte!",
				Age: 26,
				Occupation: "Medico de familia",
				Family: "Sin familia conocida",
				Location: "Zaidín",
				Character: "Fuerte y concisa.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Le gustaria estar jublada ya y poder dedicarse a lo que le gusta de verdad que es no trabajar"],
				Frustrations: ["El sistema capitalista y los fachapobres."],
				Bio: "Médica en Olivares lo que le deja las tardes libre para trabajo autónomo o hobby´s en los que interesarse como la ceramica o la pintura.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])