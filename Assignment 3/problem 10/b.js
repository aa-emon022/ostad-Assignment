var button = document.getElementById("myButton");
    var paragraph = document.getElementById("myParagraph");

    button.addEventListener("click", function() {
      paragraph.classList.add("highlight");
    });