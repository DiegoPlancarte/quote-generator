const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote from API
async function getQuote() {
  const apiUrl = 'http://api.quotable.io/random';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // If Author is blank, add 'Unknown'
    if (data.author === '') {
      authorText.innerText = 'Unknown';
    } else {
      authorText.innerText = data.author
    }
    // Reduce font size for long quotes
    if (data.content.length > 120) {
      quoteText.classList.add('long-quote')
    } else {
      quoteText.classList.remove('long-quote')
    }
    quoteText.innerText = data.content
  } catch (error) {
    getQuote();
  }
}

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote)

// On Load
getQuote();