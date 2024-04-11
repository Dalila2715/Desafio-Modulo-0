//ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//-----------------------------------------------------------------------//

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto 
// de la lógica funcione bien)

const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque: 70,
      velocidad: 30,
      vida: 60,
      magia: 120,

    },

    articulos: ["espada", "escudo", "varita",],
    };
  
  const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque: 73,
      velocidad: 30,
      vida: 80,
      magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
  };
  
  //-----------------------------------------------------------------------//
  
  //PUNTOS INICIALES DEL JUEGO:
  //Estas variables servirán para almacenar los puntos ganados por cada jugador.
  //Cada vez que un jugador gana en una habilidad determinada se deberá
  //sumar 1 punto en el contador correspondiente:
  var contadorPuntosJug1 = 0;
  var contadorPuntosJug2 = 0;
  //Ganador:
  var ganador;
  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR PODER DE ATAQUE
  
  //La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
  //contador. Según la condición que se cumpla, se irán sumando los puntos.
  
  //EJEMPLO ESTRUCTURA DE COMPARACIÓN
  //ATAQUE
  if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque ) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
    console.log("ATAQUE");
    console.log("Suma un punto a Jugador 1",jugadorUno.habilidades.ataque  );
  } else if (jugadorDos.habilidades.ataque  > jugadorUno.habilidades.ataque ) {
    contadorPuntosJug2++;
    console.log("ATAQUE");
    console.log("Suma un punto a Jugador 2",jugadorDos.habilidades.ataque );
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("ATAQUE");
    console.log("Suma un punto a los jugadores ");
  }
  //VELOCIDAD
  if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad ) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
    console.log("VELOCIDAD");
    console.log("Suma un punto a Jugador 1",jugadorUno.habilidades.velocidad  );
  } else if (jugadorDos.habilidades.velocidad  > jugadorUno.habilidades.velocidad ) {
    contadorPuntosJug2++;
    console.log("VELOCIDAD");
    console.log("Suma un punto a Jugador 2",jugadorDos.habilidades.velocidad );
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("VELOCIDAD");
    console.log("Suma un punto a los jugadores",jugadorDos.habilidades.velocidad,jugadorUno.habilidades.velocidad);
  }
  //VIDA
  if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida ) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
    console.log("VIDA");
    console.log("Suma un punto a Jugador 1",jugadorUno.habilidades.vida  );
  } else if (jugadorDos.habilidades.vida  > jugadorUno.habilidades.vida ) {
    contadorPuntosJug2++;
    console.log("VIDA");
    console.log("Suma un punto a Jugador 2",jugadorDos.habilidades.vida );
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("VIDA");
    console.log("Suma un punto a los jugadores",jugadorDos.habilidades.vida,jugadorUno.habilidades.vida);
  }
//MAGIA
  if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia ) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
    console.log("MAGIA");
    console.log("Suma un punto a Jugador 1",jugadorUno.habilidades.magia  );
  } else if (jugadorDos.habilidades.magia  > jugadorUno.habilidades.magia ) {
    contadorPuntosJug2++;
    console.log("MAGIA");
    console.log("Suma un punto a Jugador 2",jugadorDos.habilidades.magia );
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("MAGIA");
    console.log("Suma un punto a los jugadores",jugadorDos.habilidades.magia,jugadorUno.habilidades.magia);
  }
  //-----------------------------------------------------------------------//  
  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
  //(Escribir debajo el código que te permita generar esta comparación)
  if(jugadorUno.articulos.length>jugadorDos.articulos.length){
    contadorPuntosJug1=contadorPuntosJug1+1;
    console.log("ARTICULOS");
    console.log("Suma un punto a Jugador 1",jugadorUno.articulos.length);
  } else if (jugadorDos.articulos.length>jugadorUno.articulos.length){
    contadorPuntosJug2++;
    console.log("ARTICULOS");
    console.log("Suma un punto a Jugador 2", jugadorDos.articulos.length)
  } else{
    contadorPuntosJug1++;
    contadorPuntosJug2++;
    console.log("ARTICULOS");
    console.log("Suma un punto a los jugadores", jugadorUno.articulos.length,jugadorDos.articulos.length)
    
    
  }
  
  //-----------------------------------------------------------------------//
  
  //DEFINIENDO EL GANADOR DE LA PARTIDA
  //En este espacio deberás generar la comparación final de puntos
  //que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida
  console.log("******************************************************************************************");
  console.log("Puntaje Final");  
  
  if (contadorPuntosJug1>contadorPuntosJug2){
        console.log("El ganador de esta ronda es : ",jugadorUno.nombre,contadorPuntosJug1);
   } else if(contadorPuntosJug2>contadorPuntosJug1){
        console.log("El ganador de esta ronda es: ",jugadorDos.nombre,contadorPuntosJug2);
   } else{
    console.log("Es un empate");
    console.log("Jugador1:", jugadorUno.nombre,contadorPuntosJug1);
    console.log("Jugador2:", jugadorDos.nombre,contadorPuntosJug2);
   }
    
          
 
 
    
  //-----------------------------------------------------------------------//*/
