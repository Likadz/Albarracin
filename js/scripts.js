 
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
      iActual="#portada" + iImg;
      iImg++;
      if(iImg>3){
          iImg=1;
          iSiguiente="#portada" + iImg;
      }else{
          iSiguiente="#portada" + iImg;
      }

      $(iActual).hide("slide", {
          direction: "left"
      }, 1000);
      $(iSiguiente).show("slide",{
          direction: "right"
      }, 1000);
  }

  function pagActual(pagina){
    $(pagina).css({"color":"rgb(255, 166, 0)",
    "text-shadow": 
    "rgb(255, 228, 77) 0px 0px 20px, rgb(255, 228, 77) 0px 0px 30px, rgb(255, 228, 77) 0px 0px 40px, rgb(255, 228, 77) 0px 0px 50px, rgb(255, 228, 77) 0px 0px 75px"});
   }


  $(document).ready(function(){
    //MENU SUPERIOR DE PÁGINAS (cambio de color)
    //aColor=["black","blue","green","yellow","orange"]// array de colores para los background
    // menú superior
    /*$( ".headerLinks" ).children().hover(function(){
      $(this).children().slideToggle(500).css("background-color",aColor[$(this).children().attr('id')]);
    })
    $(".headerLinks a").mouseover(function(){
      $(this).css("text-shadow","4px 3px 6px rgb(189,126,0)");
    })
    $(".headerLinks a").mouseleave(function(){
      $(this).css("text-shadow","");
    });*/

    /* SOBRE NOSOTROS */
    //img seleccion de la galeria
    $("#divImgSelect").hide();
    $(".imgGaleria").click(function(){
      $("#imgSelect").attr("src",$(this).attr('src'));
      $("#divImgSelect").fadeIn();
    });
    $("#exit").click(function(){
      $("#divImgSelect").fadeOut();
    });

    
    //creamos una variable con la id de la pág html que esté abierta
    var paginaActual="#el_" + $("html").attr('id').split("_")[1];
    //asignamos un color y shadow al link del menú superior que toque según la página en la que esté
    pagActual(paginaActual);
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


    var bMenuPeque=false;
    $("#imgMenuPeque img").on("click",function(){
      if(bMenuPeque){
        $(".headerLinks").css("visibility", "");
      }else{
        $(".headerLinks").css({"display": "block","visibility": "visible"});
      }
      bMenuPeque= !bMenuPeque;
      
    });
    

    /****** SECCION TURISMO ******/
    $(".accordion-image").hover(function() {
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

  })

 