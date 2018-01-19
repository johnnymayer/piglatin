function pigLatin(phrase) {
  if (phrase.match(/[a-z]/)) {
    if (phrase.charAt(0) === "q" && phrase.charAt(1) === "u") {
      phrase = phrase.slice(2) + "quay";
      return phrase;
    } else if (phrase.charAt(0) === "a" || phrase.charAt(0) === "e" || phrase.charAt(0) === "i" || phrase.charAt(0) === "o" || phrase.charAt(0) === "u") {
      return phrase.replace(/^([aeiouy])(.*)/, '$1$2way');
    } else if (phrase.charAt(0) != "a" || phrase.charAt(0) != "e" || phrase.charAt(0) != "i" || phrase.charAt(0) != "o" || phrase.charAt(0) != "u") {
      return phrase.replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
    }
    }
    else {
      return phrase;
    }
  }

$(document).ready(function() {
  $("form#translated-form").submit(function(event){
    event.preventDefault();
    var newArray = [];
    var phrase = $("input#phrase").val().toLowerCase().split(/\b/i);
    for (var i = 0; i < phrase.length; i ++) {
      newArray.push(pigLatin(phrase[i]));
    }

    $(".phrase").text(newArray.join(" "));

    // if(!result){
    //   $(".pig-latin").text("This can not be translated to pig latin");
    // } else {
    //   $(".pig-latin").text(newArray);
  });
});
