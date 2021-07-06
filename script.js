function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    /** asdasdasds */
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 4) {
        img.setAttribute("src", "homembebe.png");
        // bebe
      } else if (idade < 13) {
        img.setAttribute("src", "homemcrianca.png");
        // crianca
      } else if (idade < 18) {
        img.setAttribute("src", "homemadolescente.png");
        // adolecente
      } else if (idade < 50) {
        img.setAttribute("src", "homemadulto.png");
        // adulto
      } else {
        img.setAttribute("src", "homemidoso.png");
        //idoso
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 4) {
        img.setAttribute("src", "mulherbebe.png");
        // bebe
      } else if (idade < 13) {
        img.setAttribute("src", "mulhercrianca.png");
        // crianca
      } else if (idade < 18) {
        img.setAttribute("src", "mulheradolescente.png");
        // adulto
      } else if (idade < 50) {
        img.setAttribute("src", "mulheradulta.png");
        // adulto
      } else {
        img.setAttribute("src", "mulheridosa.png");
        //idoso
      }
    }
    res.style.textAlign = "center";
    // centraliza o texto
    res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos.`;
    // mostra o calculo com a resposta na tela
    res.appendChild(img);
    // chama a img na tela
  }
}
