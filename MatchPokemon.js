$(document).ready(function () {
  var pokeIndex = createPokeIndex(51);
  for (var i = 0; i < pokeIndex.length; i++) {
    
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + pokeIndex[i],
    }).done(function (pokemonOjb) {
      var box = $(
        "<div class='pokeBox img" + pokemonOjb.id +"'><img src='" +
          pokemonOjb.sprites.front_default +
          "'></div>"
      );
      $('#container').append(box);
    });
  }
  $(document).on("click", "img", function () {
    // console.log("Image was clicked!");
    $(this).hide();
  });
});

//Idea: fix the gird to get x and y

function createPokeIndex(startNum) {
  //Create an array consists of 1 to 50:
  var arr = [];
  for (var j = startNum; j < startNum + 50; j++) {
    arr.push(j);
  }
  // Double the array created above:
  var newArr = arr.concat(arr);

  //Shuffle the array values:
  for (var i = newArr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
}
