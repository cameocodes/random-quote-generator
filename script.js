const btnClick = document.querySelector('button')
const para = document.querySelector('p')
const head = document.querySelector('h3')
const request = fetch('https://cameocodes.github.io/random-quote-generator/quotes.json')

request
    .then(response => response.json())
    .then(parsedQuotes => showQuote(parsedQuotes))
    .catch(err => console.log(err.message))


const showQuote = response => {
    btnClick.addEventListener("click", function(){
    const quoteNum = Math.floor((Math.random() * 1640) + 1)
    head.innerText = response[quoteNum].quoteText
    para.innerText = response[quoteNum].quoteAuthor
})
}
