export function elementos(data) {
  const informacaoClima = document.getElementById("clima-info");
  const localDiv = document.createElement("div");
  localDiv.textContent = `Localização: ${data.city.name}, pais: ${data.city.country} `;

  const climaAtual = document.createElement("div");
  climaAtual.textContent = `Condição atual do clima| Temperatura ${data.list[0].main.temp}`;

  const populacao = document.createElement("div");
  populacao.textContent = `A população atual de ${data.city.name} é: ${data.city.population}`;

  informacaoClima.appendChild(localDiv);
  informacaoClima.appendChild(climaAtual);
  informacaoClima.appendChild(populacao);
}
