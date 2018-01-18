function pigLatin(phrase){
  if(!isNaN(phrase.charAt(0))){
    return false;
  }
  else if(phrase.charAt(0) === "a" || phrase.charAt(0) === "e" || phrase.charAt(0) === "i" || phrase.charAt(0) === "o" || phrase.charAt(0) === "u"){
    phrase = phrase + "way";
    return phrase;
  } else if (phrase.charAt(0) != "a" || phrase.charAt(0) != "e"|| phrase.charAt(0) != "i"|| phrase.charAt(0) != "o" || phrase.charAt(0) != "u"){
    phrase = phrase.replace(/(\w+?)([aeiou]\w+)/i, '$2$1') + "ay";
    return phrase;
  } else if (phrase[0] === "q" && phrase[1] === "u"){
      phrase = phrase.charAt(0,1) + "quay";
      return phrase;
  }
};

$(document).ready(function() {
  $("form#translated-form").submit(function(event){
    event.preventDefault();
    var newArray = [];
    var phrase = $("input#phrase").val().split(/\b\W\S/i);
    for (var i = 0; i < phrase.length; i ++) {
      newArray.push(pigLatin(phrase[i]));
    }

    $(".phrase").text(phrase);

    if(!result){
      $(".pig-latin").text("This can not be translated to pig latin");
    } else {
      $(".pig-latin").text(newArray);
    }
  });
});
