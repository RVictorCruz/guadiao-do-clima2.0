import { elementos } from "./elementosJson.js";
import { extrairTemperaturasEData, configurarGrafico } from "./grafico.js";

const chaveApi = "475823ee622ed2e28f31ff84e43afa5e";
let resultado = "";
// Fazer a chamada à API usando fetch
export function clima(resultado) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${resultado}&appid=${chaveApi}`;
  fetch(apiUrl)
    .then((response) => {
      // Verificar se a resposta da solicitação foi bem-sucedida (status 200)
      if (response.ok) {
        // Se a resposta estiver OK, transformar a resposta em formato JSON
        resultado = response;
        return response.json();
      }
      // Se houver um erro de solicitação, lançar uma exceção
      throw new Error("Erro ao obter os dados da API");
    })
    .then((data) => {
      // Manipular os dados recebidos da API
      console.log(data);

      elementos(data);
      const { temperaturas, datas } = extrairTemperaturasEData(data);
      configurarGrafico(temperaturas, datas);
      // Aqui você pode fazer o que quiser com os dados da API
    })
    .catch((error) => {
      // Capturar e tratar erros da solicitação
      console.error("Erro na solicitação:", error);
    });
}

function printNome(infor) {
  console.log(infor);
}
