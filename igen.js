//document.addEventListener('DOMContentLoaded', getRandomQuote);

function displayQuote(quoteData) {
    document.getElementById('quote').innerHTML = '"' + quoteData[0].content + '"';
    document.getElementById('author').innerHTML = '- ' + quoteData[0].author;
}

function getRandomQuote() {
    fetch("https://api.quotable.io/quotes/random").then(response=>response.json()).then(exampleData=>{
    
    displayQuote(exampleData);
}).catch(error=>console.error(error));

}