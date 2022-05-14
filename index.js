const leiaMais = () => {
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btnLeiamais = document.getElementById("btnLeiamais");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiamais.innerHTML = "Leia mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiamais.innerHTML = "Leia menos";
    }
}

const leiaRespostas = () => {
    let pontosRespostas = document.getElementById("pontosRespostas");
    let maisRespostas = document.getElementById("maisRespostas");
    let btnLeiarespostas = document.getElementById("btnLeiarespostas");

    if (pontosRespostas.style.display === "none") {
        pontosRespostas.style.display = "inline";
        maisRespostas.style.display = "none";
        btnLeiarespostas.innerHTML = "Visualizar respostas";
    } else {
        pontosRespostas.style.display = "none";
        maisRespostas.style.display = "inline";
        btnLeiarespostas.innerHTML = "Ocultar respostas";
    }
}