// Faceti un request catre: https://jsonplaceholder.typicode.com/photos
// Sa afisati primele 10 poze;

// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   } asa arata obiectul din array-ul nostru

window.onload = function () {
  document.getElementById("pictures").onclick = function () {
    //XHR is a JavaScript predefined object
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
    // We send the request
    xhr.send();
    // We add an event listener, waiting for the answer
    xhr.onload = function (data) {
      let jsonResponse = JSON.parse(data.target.response);
      let pics = "";
      for (var i = 0; i < 10; i++) {
        console.log(jsonResponse[i].url);
        pics += "<img src= '" + jsonResponse[i].url + "'>";
      }
      document.getElementById("pictures").innerHTML = pics;
    };
  };
};
