var pigLatin = function(phrase){
  if(phrase[0] === "a" || phrase[0] === "e" || phrase[0] === "i" || phrase[0] === "o" || phrase[0] === "u"){
    phrase = phrase + "way";
    return phrase;
  } else if (phrase[0] != "a" || phrase[0] != "e" || phrase[0] != "i" || phrase[0] != "o" || phrase[0] != "u"){
    phrase = phrase.replace(/(\w+?)([aeiou]\w+)/i, '$2$1') + "ay";

    // phrase = phrase.slice(1) + phrase[0] + "ay";
    return phrase;

  } else if (isNaN(phrase)) {

    return false;
  }
};

$(document).ready(function() {
  $("form#translated-form").submit(function(event){
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var result = pigLatin(phrase);

    $(".phrase").text(phrase);

    if(!result){
      $(".pig-latin").text("This can not be translated to pig latin");
    } else {
      $(".pig-latin").text(result);
    }
  });
});


// (phrase[0] === 0 || phrase[0] === 1 || phrase[0] === 2 || phrase[0] === 3 || phrase[0] === 4 || phrase[0] === 5 || phrase[0] === 6 || phrase[0] === 7 || phrase[0] === 8 || ){
