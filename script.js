var listaFilmes = [
  "https://br.web.img3.acsta.net/pictures/20/11/23/14/35/4981975.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/b0/Bridget_Jones_The_Edge_of_Reason.jpg",
  "https://assetsgn.nowonline.com.br/assets/p34314_v_v8_ai.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/22/10/20135178.JPG"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}