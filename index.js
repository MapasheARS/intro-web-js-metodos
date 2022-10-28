// Agrega el objeto contador
let contador = {
  unidades:1,
  decenas:4,
  puntaje:0
 incrementarPuntaje(){
    contador.unidades++
    return contador.puntaje
  }
decrementarPuntaje(){
    contador.puntaje--
    return contador.puntaje
}
}
// Agrega el obeto juego
let juego = {
    timerId:0,
    timerObstaculos:0,
    gravedad:2
    aleatorio(4, 5){
      let aleatorio = (4, 5)
        return Math.random(aleatorio)
    }
}

