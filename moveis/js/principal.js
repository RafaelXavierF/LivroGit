var banners =
["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var bannerAtual = 0;
function trocaBanner() {
    var banners = ["Do lixo ao luxo!","Reaproveitar é aproveitar!"];document.querySelector('h2#mensagem').textContent =
banners[bannerAtual];
}
setInterval(trocaBanner, 2000);