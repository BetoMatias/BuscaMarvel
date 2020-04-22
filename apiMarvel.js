
//PARA DESENVOLVIMENTO

//PARA PRODUÇÃO
var pubkey = "key_publica";
var pvtkey = "key_privada";

var ts = new Date().getTime();

function getCharacter() {

  var hashkey = CryptoJS.MD5(ts + pvtkey + pubkey).toString();
  var hero = document.getElementById("Name").value;
  var url = "http://gateway.marvel.com/v1/public/characters?ts=" + ts + "&apikey=" + pubkey + "&hash=" + hashkey + "&name=" + hero;

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);


  var character = JSON.parse(xmlHttp.responseText);

  //Apresenta o nome do primeiro Heroi da pesquisa.
  document.getElementById("heroName").innerHTML = character.data.results[0].name; 

}

function Comics(character) {

  for(var i = 0; i<11; i++){ 
  document.getElementById("comics").innerHTML = character.data.results[0].comics.items[i];
  document.createElement("div");
  
  }
}
