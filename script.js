// Get Quote from API
async function getQuote() {
  const proxyUrl = 'http://api.allorigins.win/get?url=';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    const data = await response.json();
    const quoteObj = JSON.parse(data.contents);
    console.log(quoteObj);
  } catch (error) {
    getQuote();
    console.log('whoops, no quote', error);
  }
}

// On Load
getQuote();