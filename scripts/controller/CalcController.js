class CalcController {
  constructor() {
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate; // this é para referenciar a propriedade da classe
    this.initialize();
  }

  initialize() { // método para iniciar a calculadora
    this.setDisplayDateTime();

    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
  }

  setDisplayDateTime() {   // método para exibir a data e hora
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayTime() {  // método para pegar a hora
    return this._timeEl.innerHTML;
  }

  set displayTime(value) { // método para setar a hora
    return (this._timeEl.innerHTML = value);
  }

  get displayDate() { // método para pegar a data
    return this._dateEl.innerHTML;
  }

  set displayDate(value) { // método para setar a data
    return (this._dateEl.innerHTML = value);
  }

  get displayCalc() { // get é para pegar o valor
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) { // set é para setar o valor

    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(valor) {
    this._currentDate = valor;
  }
}
