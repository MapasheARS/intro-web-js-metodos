const { expect } = require("chai");
const sinon = require("sinon");

describe("index.js", () => {
  
  describe("contador", () => {
    it("1. El objeto contador existe", () => {
      expect(contador).to.be.an("object");
    });

    it("2. El objeto contador tiene propiedades unidades, decenas y puntaje", () => {
      expect(contador.unidades).to.eql(1);
      expect(contador.decenas).to.eql(4);
      expect(contador.puntaje).to.eql(0);
    });

    it("3. El metodo incrementarPuntaje incrementa el puntaje por 1", () => {
      expect(contador.incrementarPuntaje()).to.eql(1);
    });

    it("4. El metodo decrementarPuntaje decrementa el puntaje por 1", () => {
      expect(contador.decrementarPuntaje()).to.eql(0);
    });
  }),
    describe("juego", () => {
      it("5. El objeto juego existe", () => {
        expect(juego).to.be.an("object");
      });

      it("6. El objeto juego tiene propiedades timerId, timerObstaculos y gravedad", () => {
        expect(juego.timerObstaculos).to.eql(0);
        expect(juego.timerId).to.eql(0);
        expect(juego.gravedad).to.eql(2);
      });

      it("7. El metodo aleatorio del objeto gravedad devuelve un numero aleatorio entre dos numeros que se pasan como parametros", () => {
        expect(juego.aleatorio(0, 2)).to.be.lessThanOrEqual(2);
        expect(juego.aleatorio(0, 2)).to.be.greaterThanOrEqual(0);
        expect(juego.aleatorio(100, 120)).to.be.lessThanOrEqual(120);
        expect(juego.aleatorio(100, 120)).to.be.greaterThanOrEqual(100);
      });
    });
});
