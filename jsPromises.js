//Part 1.

let numApiUrl = 'http://numbersapi.com'

function threeNums() {  axios
    .get(`${numApiUrl}/1?json`)
    .then(p1 => {
      console.log(p1.data.text);
      return axios.get(`${numApiUrl}/2?json`);
    })
    .then(p2 => {
      console.log(p2.data.text);
      return axios.get(`${numApiUrl}/3?json`);
    })
    .then(p3 => {
      console.log(p3.data.text);
    })
    .catch(err => {
      console.log(`Oops, there was a problem :( ${err}`);
    });  }

function fourFacts(num){
  axios
  .get(`${numApiUrl}/${num}?json`)
  .then(p1 => {
    $("body").append(`<p>${p1.data.text}</p>`);
    return axios.get(`${numApiUrl}/${num}?json`);
  })
  .then(p2 => {
    $("body").append(`<p>${p2.data.text}</p>`);
    return axios.get(`${numApiUrl}/${num}?json`);
  })
  .then(p3 => {
    $("body").append(`<p>${p3.data.text}</p>`);
    return axios.get(`${numApiUrl}/${num}?json`);
  })
  .then(p4 => {
    $("body").append(`<p>${p4.data.text}</p>`);;
  })
  .catch(err => {
    console.log(`Oops, there was a problem :( ${err}`);
  });  
}


// Part 2.

let cardApiUrl = 'https://deckofcardsapi.com/';
let deckID = 'new'
let drawUrl = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`

$(":button").on("click", singleCard)

function singleCard(){
  axios.get(`${drawUrl}`)
  .then(res => {
    console.log(res.data.deck_id)
    deckID = res.data.deck_id
    drawUrl = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
    $("p").text(`Your card is the ${res.data.cards[0].value} of ${res.data.cards[0].suit}!`);
  })
  .catch(err => {
    console.log(`Oops, there was a problem :( ${err}`);
    $(":button").on("click", singleCard).remove()
  });
}
