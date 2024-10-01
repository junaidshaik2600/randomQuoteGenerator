const quoteText = document.getElementById("text");
const authorName = document.getElementById("author");
const body = document.getElementById("body");
const dark = document.getElementById("mode")
const btn = document.querySelectorAll(".btns");

const link = "https://junaidshaik2600.github.io/api-s/Data.json";
let quoteToShow;
let quotes;

fetch(link)
  .then(function (response) {
    return response.json();
  })
  .then((response) => {
    quotes = response;
    quote();
  })
  .catch(() => {
    console.log("Error : Something When Wrong ");
  });

function quote() {
  let quotesLength = quotes.length - 1;
  let value = Math.round(Math.random() * quotesLength);
  quoteToShow = quotes[value];
  quoteText.innerText = `“  ${quoteToShow.text} ”`;
  authorName.innerText = `- ${quoteToShow.author}`;
}
function copy() {
  navigator.clipboard.writeText(quoteToShow.text);
  // https and localHost
}

btn.forEach((element) => {
  element.addEventListener("click", function (element) {
    let id = element.target.id;
    eventHandler(id);
  });
});

function eventHandler(id) {
  switch (id) {
    case "change":
      quote();
      break;
    case "copy":
      copy()
      break;
    case "mode":
      document.body.classList.toggle("dark");
      if(document.body.classList.contains("dark")){
        dark.value="Light"
      }else{
        dark.value="Dark"
      }
      break;

    default:
      break;
  }
}
