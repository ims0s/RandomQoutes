let btn = document.getElementById('quote-btn')
let quoteSec, authorSec;
quoteSec = document.getElementById('quote')
authorSec = document.getElementById('author')
let quotes = [
    { 
        quote: '"You see, but you do not observe."', 
        author: 'shelrock Homes' 
    },
    {
        quote:'"If you\'re good at something, never do it for free."',
        author:'The Joker'
    },
    {
        quote:'"Try to learn something about everything and everything about something."',
        author:'Thomas Henry Huxley'
    },
    {
        quote:'"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."',
        author:'Albert Einstein'
    },
    {
        quote:'"The Earth is a mass of stupidity, and we humans are parts of this stupidity"',
        author:'Me: Mahmoud Sorour'
    }
]
btn.addEventListener('click' ,()=>{
    let random = Math.floor(Math.random(new Date())*100)%5
    const {quote,author}=quotes[random]
    quoteSec.innerText=quote
    authorSec.innerText=`--${author}`
})