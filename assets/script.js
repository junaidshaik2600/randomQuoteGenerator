let quotes;
const link = "https://junaidshaik2600.github.io/api-s/Data.json";
const xhr = new XMLHttpRequest();
xhr.open("Get", link);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    quotes = JSON.parse(this.response);
    const  randomQuoteGenerator = () => {
        let quotesLength = quotes.length - 1;
        let value = Math.round(Math.random() * quotesLength);
        return quotes[value]
    }
    let randomObj = randomQuoteGenerator(quotes);
    console.log(`“ ${randomObj.text} ”`)
    console.log(`- ${randomObj.author}`)
  }
};
xhr.send();//calling xhr open