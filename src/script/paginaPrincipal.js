import { clima } from "./apis/apiWeather";

let dadosObtidos = "";
let dataValue = "";
const dadoRecebido = document.getElementById("dadosRecebidos");
const urlparams = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", () => {
  if (urlparams.has("data")) {
    dataValue = urlparams.get("data");
    dadoRecebido.textContent = `Dados recebidos: ${dataValue}`;
    dadosObtidos = dataValue;
    clima(dataValue);
  } else {
    console.log("Não existe dados");
  }
});