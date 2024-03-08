export function pegarDados() {
  const localizacaoDigitada = document.getElementById("localizar");
  const campoLocalizacao = document.getElementById("dadoDigitado");

  localizacaoDigitada.addEventListener("click", () => {
    const informacao = campoLocalizacao.value;
    if (informacao.trim() !== "") {
      window.location.href = `./paginaPrincipal.html`;
    } else {
      alert("Digite Algo");
    }
  });
}
