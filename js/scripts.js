 
  function go(loc){
    console.log(loc);
      document.getElementById('iframe').src = loc; 
  }

  // Variables globales
  var pathname = window.location.pathname;

  var iImg=1; //contador de imagenes del carrusel.
  setInterval(siguiente,5000);//intervalo para pasar de imagen

  //funcion siguiente imagen
  function siguiente(){
      iActual="#portada" + iImg;//creamos la id de la imágen actual
      iImg++;//añadimos 1 ya que las ids van numeradas y son seriales
      if(iImg>3){//cuando llegue a la última imágen volvemos a empezar
          iImg=1;
          iSiguiente="#portada" + iImg;
      }else{
          iSiguiente="#portada" + iImg;
      }
      //animacion de ocultar uno y mostrar el otro
      $(iActual).hide("slide", {
          direction: "left"
      }, 1000);
      $(iSiguiente).show("slide",{
          direction: "right"
      }, 1000);
  }

  //funcion para 'iluminar' el enlace del menú superior
  function pagActual(pagina){
    $(pagina).css({"color":"rgb(255, 166, 0)",
    "text-shadow": 
    "rgb(255, 228, 77) 0px 0px 20px, rgb(255, 228, 77) 0px 0px 30px, rgb(255, 228, 77) 0px 0px 40px, rgb(255, 228, 77) 0px 0px 50px, rgb(255, 228, 77) 0px 0px 75px"});
   }


  $(document).ready(function(){
    //Pag alrededores!-> ocultamos las 4 primeras secciones y las mostramos con un fade in.
    $(".showPrimeros").hide();
    $(".showPrimeros").fadeIn(1500);

    /****** MENU SUPERIOR (enlaces a páginas) ********/    
    var paginaActual="#el_" + $("html").attr('id').split("_")[1];//creamos una variable con la id de la pág html que esté abierta
    pagActual(paginaActual);//asignamos un color y shadow al link del menú superior que toque según la página en la que esté

    //cuando entre en otro de los enlaces del menú asignamos esas caracteristicas al enlace nuevo y retiremos el css del de la pag.
    $(".headerLinks > a").bind("mouseenter click",function(){
      $(this).css({"color":"rgb(255, 166, 0)",
      "text-shadow": 
      "rgb(255, 228, 77) 0px 0px 20px, rgb(255, 228, 77) 0px 0px 30px, rgb(255, 228, 77) 0px 0px 40px, rgb(255, 228, 77) 0px 0px 50px, rgb(255, 228, 77) 0px 0px 75px"}),
      $(this).siblings().css({"color":"",
      "text-shadow":""});
    })

    //al avandonar el hover de un menú reseteamos los css.
    $(".headerLinks > a").bind("mouseleave",function(){
      $(this).css({"color":"",
      "text-shadow":""});
      pagActual(paginaActual);
    })

    /****** MENU REDUCIDO  *******/
    //control para mostrar el menú en pantalla reducida
    var bMenuPeque=false;//Boolean para controlar el click del menú desplegable
    $("#imgMenuPeque img").on("click",function(){
      if(bMenuPeque){
        $(".headerLinks").css("visibility", "");//ocultamos los enlaces
      }else{
        $(".headerLinks").css({"display": "block","visibility": "visible"});//mostramos los enlaces
      }
      bMenuPeque= !bMenuPeque;
      
    });

    /**** SOBRE NOSOTROS *****/
    
    $("#divImgSelect").hide();//img seleccion de la galeria oculto
    $(".imgGaleria").click(function(){//cuando clican en una imágen asociamos el src a la imagen 'grande' que estaba oculta y la mostramos
      $("#imgSelect").attr("src",$(this).attr('src'));
      $("#divImgSelect").fadeIn();
    });
    $("#exit").click(function(){//salimos de la imagen agrandada
      $("#divImgSelect").fadeOut();
    });


    /****** SECCION TURISMO ******/
    $(".accordion-image").hover(function() {//cambiamos el cursor al colocarse sobre una imágen
      $(this).css('cursor','pointer');
    }, function() {
      $(this).css('cursor','auto');
    });
    // enlaces de imagenes en turismo.html
    $("#accordiontransporte").on("click", function(){
      window.open("https://albarracinturismo.com/?s=&category=114&location=&a=true")
    })
    $("#accordionhoteles").on("click", function(){
      window.open("https://albarracinturismo.com/cat/alojamientos/")
    })
    $("#accordionrestaurantes").on("click", function(){
      window.open("https://albarracinturismo.com/cat/restaurantes_bares/")
    })
    $("#accordioncaballo").on("click", function(){
      window.open("https://www.caballosalbarracin.com/")
    })
    $("#accordionsenderos").on("click", function(){
      window.open("https://albarracinturismo.com/turismo-accesible/")
    })
    $("#accordionescalada").on("click", function(){
      window.open("https://albarracinturismo.com/turismo-deportivo-en-la-sierra-de-albarracin-teruel/")
    })
    $("#accordionmuseojuguetes").on("click", function(){
      window.open("https://albarracinturismo.com/item/tienda-de-juguetes-museo/")
    })
    $("#accordionvisitantes").on("click", function(){
      window.open("https://albarracinturismo.com/item/centro-de-visitantes-del-paisaje-protegido-de-los-pinares-de-rodeno/")
    })
    $("#accordionmuseo").on("click", function(){
      window.open("https://albarracinturismo.com/item/casa-museo-perez-y-toyuela/")
    })
    $("#accordionbtt").on("click", function(){
      window.open("https://albarracinturismo.com/btt-en-la-sierra-de-albarracin-teruel-bici-de-montana/")
    })
    $("#accordiontirolina").on("click", function(){
      window.open("https://albarracinturismo.com/turismo-activo/")
    })
    $("#accordionfarmacia").on("click", function(){
      window.open("https://www.paginasamarillas.es/f/albarracin/farmacia-perez-hernandez_001833185_000000001.html")
    })
    $("#accordionbiblioteca").on("click", function(){
      window.open("https://www.facebook.com/lusae1971/")
    })

  /****** ALREDEDORES ********/
  //cuando el usuario haga scroll hacia abajo mostraremos las imágenes ocultas
  $(window).scroll( function(){
    
    $('.hideme').each( function(i){
      //cogemos la posición del objeto oculto mas proximo y la posición del usuario en la 'ventana'
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      //si el usuario ha llegado a la zona del objeto oculto lo muestra 
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},1000);
      }
        
    });   
  });

})

 