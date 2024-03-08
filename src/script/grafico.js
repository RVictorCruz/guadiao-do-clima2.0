export function extrairTemperaturasEData(dados) {
  const temperaturas = [];
  const datas = [];

  dados.list.forEach((element) => {
    const conversaoData = converterkelvinParaCelsius(element.main.temp);
    temperaturas.push(conversaoData);
    const dataFormatada = formatarData(element.dt_txt);
    datas.push(dataFormatada);
  });
  return { temperaturas, datas };
}

function converterkelvinParaCelsius(conversao) {
  return conversao - 273.15;
}

function formatarData(dataString) {
  const data = new Date(dataString);
  let horas = data.getHours();
  let minutos = data.getMinutes();

  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (horas < 10) {
    horas = "0" + horas;
  }

  return `${horas} : ${minutos}`;
}

export function configurarGrafico(temperaturas, datas) {
  const ctx = document.getElementById("meuGrafico").getContext("2d");
  const meuGrafico = new Chart(ctx, {
    type: "line",
    data: {
      labels: datas,
      datasets: [
        {
          label: "Temperatura",
          data: temperaturas,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}
