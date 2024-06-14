export default class Funcionamento {
  constructor(data) {
    this.funcionamento = document.querySelector(data);
    this.active = "aberto";
  }
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }
  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }
  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      (this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }
  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.active);
    }
  }
  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    console.log(this);
    return this;
  }
}
