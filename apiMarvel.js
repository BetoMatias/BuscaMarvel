var pubkey ="f0e03b687bccf18c1395697572390d5f";
var pvtkey ="45769aa8f2b721194ac733cccee5285a981ea539";
var ts = new Date().getTime();

function getCharacter() {

  var hashkey = CryptoJS.MD5(ts + pvtkey + pubkey).toString();
  var hero = document.getElementById("CharacterSelect").value;
  
  //Busca herói por nome
  // var url = "http://gateway.marvel.com/v1/public/characters?ts="+ts + "&apikey="+pubkey + "&hash="+hashkey + "&name="+hero;

  //Busca comic por id de herói
  var url = "https://gateway.marvel.com:443/v1/public/characters/" + hero + "/comics?format=comic&formatType=comic&noVariants=true&orderBy=-onsaleDate&ts=" + ts + "&apikey=" + pubkey + "&hash=" + hashkey;
     

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);

  var comics = JSON.parse(xmlHttp.responseText);
  
  Comics(comics);
}

function Comics(character) {

  // Seleciona os quadrinhos de personagem na posição 0.
  // var comics = character.data.results[0].comics;

  var comic = document.getElementById("comics_list");
  //Quantas edições
  var qttIssues = 9;


  if (document.body.contains(document.getElementById('coverSearch'))) {

    for (var i=0; i<qttIssues
  ;i++){
    var comicList = document.getElementById("comics_list");
    comicList.removeChild(document.getElementById('coverSearch'));
    }
  }

  for (var i = 0; i < qttIssues
; i++) {

    var imageCover = document.createElement("img");
    var divExtra = document.createElement("div");

    divExtra.id="coverSearch";
    divExtra.classList.add("col-4");
    divExtra.classList.add("my-3");

    imageCover.classList.add("cover");
    imageCover.classList.add("shadow-lg");
    imageCover.classList.add("p-3");
    imageCover.classList.add("mb-5");
    imageCover.classList.add("bg-white");
    imageCover.classList.add("rounded");

    imageCover.src = character.data.results[i].thumbnail.path + "." + character.data.results[i].thumbnail.extension;

    divExtra.appendChild(imageCover)
    comic.appendChild(divExtra);

  }
}
