//Aqui vamos almacenando la secuencia elegida por la maquina
let jugada = new Array();
let jugadaJugador= new Array();

let posiciones = [0,1,2,3];

//Seleccion de la dificultad de la partida
let dificultad = 1000;

//Contamos los turnos de la jugada (jugador)
let contadorJugada = 0;

//Contamos los turnos de la jugada (Maquina)
let cont = 0;

//Control del turno del jugador
let empieza = true;


//Para almacenar la puntuacion acumulada
let score = 0;

//Variables para guardar los elementos mas utiles
let botones 

let rojo;
let verde;
let amarillo;
let azul;

let ocultador;
let cubre;
let cartel;
let marcador;

//marca la duracion de la jugada de la maquina
let jugadaActiva;

//Determina la dificultad del modo de juego
let modoJuego;
//Sonidos
audio0 = new Audio("sounds/0.mp3");
audio1 = new Audio("sounds/1.mp3");
audio2 = new Audio("sounds/2.mp3");
audio3 = new Audio("sounds/3.mp3");
//Modo Ultra Violencia

let ultraViolencia = false;

let playing = true;


//Sinceramente no tengo ni la mas remota idea de como funciona esto, pero hace que el simón funcione
const timer = ms => new Promise(res => setTimeout(res, ms))



window.onload = function() {

    //Recuperamos los elementos mas utiles.
    botones = document.getElementsByClassName("botones");;
    ocultador = document.getElementById("ocultador");
    cartel = document.getElementById("cartel");
    cubre = document.getElementById("cubre");
    marcador = document.getElementById("marcador");
    rojo = document.getElementById("Rojo");
    verde = document.getElementById("Verde");
    amarillo = document.getElementById("Amarillo");
    azul = document.getElementById("Azul");


    //Cargamos los eventos del juego para el turno del jugador
    cargarLuces();

    //Cargamos los eventos para la seleccion de la dificultad
    seleccionarDificultad();

}

function seleccionarDificultad() {
    modoJuego = document.getElementsByTagName("button");

    for (let i = 0; i < modoJuego.length; i++){
        modoJuego[i].addEventListener("click",sel);
    }
    //Añadimos el evento a los botones de seleccion de dificultad.
}

function sel() {
    //Elegimos la dificultad
            if (this == modoJuego[1]) dificultad = 800;
            else if (this == modoJuego[2]) dificultad = 500;
            else if (this == modoJuego[3]) dificultad = 300;
            else if (this == modoJuego[4]) dificultad = 150, ultraViolencia=true;

    empezarPartida();
}

function empezarPartida() {
    cartel.hidden = true;
    cubre.hidden = true;
    ocultador = document.getElementById("ocultador").getElementsByTagName("b");
    ocultador[0].classList.add("brillaRojo");

    //Comienza la partida
    //Mostramos el cartel del turno de la maquina
    //Turno de la maquina
    setTimeout(jugadaMaquina, 1000);
}

function cargarLuces() {
    //Cargamos los eventos para que brillen los botones

    //Cargamos los eventos de juego
}

function jugadaMaquina() {
    ocultador[0].innerText="Jugando la maquina";

    //Turno de la maquina

    //Tapo el tablero

    //Genero un color nuevo

    if(ultraViolencia){
        for (let i = 0; i<3; i++){
            jugadaActiva = Math.floor(Math.random() * botones.length);
            jugada.push(jugadaActiva);    
        }
    }else{
        jugadaActiva = Math.floor(Math.random() * botones.length);
        jugada.push(jugadaActiva);


    }
    


    //Lo añado al array

    //Comienzo a reproducirlos todos desde 0

    brillaMaquina();

}

 async function brillaMaquina() {
    for (let i = 0; i < jugada.length; i++){
       for ( let j = 0; j<posiciones.length;j++){
           if (posiciones[j]==jugada[i]){
            await timer(dificultad)

               brillar(posiciones[j]);
           }
       }
    }
    console.log(jugada);
    
    turnoJugador();

    //Mostramos la secuencia de la maquina

}

function turnoJugador(){
    ocultador[0].closest("div").hidden=true;
    for(let i = 0; i<botones.length; i++){
        botones[i].addEventListener("click", repetirJugada);

    }
}

function repetirJugada() {
  

    if(this.id=="Rojo") jugadaJugador.push(0),brillar(0);
    else if(this.id=="Verde") jugadaJugador.push(1),brillar(1);
    else if(this.id=="Amarillo") jugadaJugador.push(2),brillar(2);
    else jugadaJugador.push(3),brillar(3);
    
    comprobar();
   

    


    //Turno del jugador
}
function comprobar(){
    console.log(jugadaJugador);

    for (let i = 0; i<jugadaJugador.length;i++){
        for (let j =0;j<botones.length;j++){
            botones[j].removeEventListener("click",turnoJugador);

        }
        if(jugada[i]!=jugadaJugador[i]){
            
            playing=false;
            finPartida();}
    }
         
    if(playing){
        if (jugada.length==jugadaJugador.length){
            //Este for no se si funciona, la idea es quitarle los event listener para luego añadirselos
            
            
            jugadaJugador.length=0;

            if(ultraViolencia){
                score+=3*(dificultad*(-1) + 2000);
                marcador.innerText = score + " puntos";
            }else{
                score+=(dificultad*(-1) + 2000);
             marcador.innerText = score + " puntos";
            }
            
            ocultador[0].closest("div").hidden=false;

            setTimeout(jugadaMaquina,1000);
        }else{
            turnoJugador()
        }
    }
        
    
    
}

async function brillar(posicion) {
    //Hacemos iluminar el color clicado.

    switch (posicion){
        case 0:
            rojo.classList.add("brillaRojo");
            audio0.play();

            await timer(dificultad);
            audio0.pause();

            audio0.load()
            rojo.classList.remove("brillaRojo");
            
            
            break;
        case 1:
            verde.classList.add("brillaVerde");
            audio1.play();
            await timer(dificultad);
            audio1.pause();
            audio1.load()
            verde.classList.remove("brillaVerde");
            

            break;
        case 2:
            amarillo.classList.add("brillaAmarillo");
            audio2.play();
            await timer(dificultad);
            audio2.pause();

            audio2.load()
            amarillo.classList.remove("brillaAmarillo");
            
            break;
        case 3:
            azul.classList.add("brillaAzul");
            audio3.play();
            await timer(dificultad);
            audio3.pause();

            audio3.load()
            azul.classList.remove("brillaAzul");
            

            break;
    }
}

function aleatorio() {
    return Math.floor(Math.random() * 4);
}

async function finPartida() {
   //MOSTRAMOS PUNTOS
   //REINICIAMOS JUEGO
   let pagina = document.getElementById("main");
    cartel=document.createElement("div");
    let h2 = document.createElement("h2");
    let boton = document.createElement("button")
    cartel.classList.add("cartel");
    cartel.id="cartel";
    h2.innerText="Has perdido, tu puntuacion ha sido "+score;
    boton.innerText="Pulsa aqui  para volver a jugar";
    pagina.appendChild(cartel);
    cartel=document.getElementById("cartel");

    cartel.appendChild(h2);
    cartel.appendChild(boton);
     await timer(dificultad);
    rojo.className="brillaRojo";
    amarillo.className="brillaRojo";
    verde.className="brillaRojo";
    azul.className="brillaRojo";


    boton.addEventListener("click",reiniciar);
}

function reiniciar() {
    location.reload();
}


