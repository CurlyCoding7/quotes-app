//import axios from 'axios';



const quoteButton = document.querySelector('#quoteButton');
const quoteDisplay = document.querySelector('.quote');
const authorDisplay = document.querySelector('.author');


  const getQuote = async () => {
    try {
        quoteDisplay.innerHTML = "Loading...";

        const config = {headers: {Accept: 'application/json'}} 
        const response = await axios.get(
            'https://api.quotable.io/quotes/random',config);
            console.log(response);
        const quote = response.data[0].content;
        const author = response.data[0].author;

        quoteDisplay.innerHTML = quote;
        authorDisplay.innerHTML = author;


        //return quoteData;
      } catch (error) {
        console.error(error);
        return "NO QUOTES AVAILABLE! SORRY :("
      }
    }


// const dispalyQuote = async () => {
//     quoteDisplay.innerHTML = "Loading...";
//     const quote = await getQuote();
//     quoteDisplay.innerHTML = quote;
// }


quoteButton.addEventListener('click', getQuote);