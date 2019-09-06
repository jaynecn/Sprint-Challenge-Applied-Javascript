// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function getNews() {
  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
      console.log(response.data);

      const testArray = response.data.articles;
      const javascript = testArray.javascript;
      const bootstrap = testArray.bootstrap;
      const jquery = testArray.jquery;
      const node = testArray.node;
      const tech = testArray.technology;

      let myBigArray = javascript.concat(bootstrap).concat(jquery).concat(node).concat(tech);
      console.log(myBigArray);

      myBigArray.forEach((info) => {
        const newarticle = CardComponent(info);
        console.log(newarticle);

        // const newarticle = document.querySelector('.cards-container');

        // newarticle.appendChild(newtab);
      })
    })
    .catch(error => {
        console.log(error.message);
    });
}

getNews();

function CardComponent(article) {
  
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const span = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  image.setAttribute('src', article.authorPhoto);

  headline.textContent = article.headline;
  span.textContent = `By ${article.authorName}`;

  imgContainer.appendChild(image);
  author.appendChild(imgContainer);
  author.appendChild(span);
  card.appendChild(headline);
  card.appendChild(author);

  return card;
};
