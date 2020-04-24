
//PARA DESENVOLVIMENTO


//PARA PRODUÇÃO
// var pubkey = "key_publica";
// var pvtkey = "key_privada";

var ts = new Date().getTime();

function getCharacter() {

  var hashkey = CryptoJS.MD5(ts + pvtkey + pubkey).toString();
  var hero = document.getElementById("CharacterSelect").value;
  
  //Busca herói por nome
  // var url = "http://gateway.marvel.com/v1/public/characters?ts="+ts + "&apikey="+pubkey + "&hash="+hashkey + "&name="+hero;
  //Busca comic por id de herói
  var url = "https://gateway.marvel.com:443/v1/public/characters/" + hero + "/comics?orderBy=issueNumber&ts=" + ts + "&apikey=" + pubkey + "&hash=" + hashkey;

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);

  var comics = JSON.parse(xmlHttp.responseText);
  
  Comics(comics);

  // Apresenta o nome do primeiro Heroi da pesquisa.
  // document.getElementById("heroName").innerHTML = character.data.results[0].description;
  
  // Apresenta a primeira cover do heroi.
  // document.getElementById("cover").src = character.data.results[0].images[0].path +"."+ character.data.results[0].images[0].extension; 

  
  // const imageCover = document.querySelector('#cover');
  // if (imageCover.classList.contains("hide")) {
  //   imageCover.classList.remove("hide");
  // }
}

function Comics(character) {

  // Seleciona os quadrinhos de personagem na posição 0.
  // var comics = character.data.results[0].comics;

  var comic = document.getElementById("comics_list");

  if (comic != null) {
    //comic.removeChild(div);

  }

  // ver comic possui algo, se possui deleta, senão ignora esse passo

  for (var i = 0; i < 9; i++) {

    var imageCover = document.createElement("img");
    var divExtra = document.createElement("div");

    divExtra.classList.add("col-4");
    divExtra.classList.add("my-3");
    imageCover.classList.add("cover");

    imageCover.src = character.data.results[i].thumbnail.path + "." + character.data.results[i].thumbnail.extension;


    divExtra.appendChild(imageCover)
    comic.appendChild(divExtra);

  }
}
