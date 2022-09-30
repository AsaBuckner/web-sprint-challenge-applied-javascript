import axios from "axios"

const Card = (article) => {

  const card = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  headline.textContent = article.headline
  img.src = article.authorPhoto
  authorName.textContent = `By ${article.authorName}`
    
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

   

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  imgContainer.appendChild(img)
  author.appendChild(authorName)


  return card

}


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


const cardAppender = (selector) => {
axios.get('http://localhost:5001/api/articles')
    .then( res => {
      const bootstrap = res.data.articles.bootstrap
      const javascript = res.data.articles.javascript
      const jquery = res.data.articles.jquery
      const node = res.data.articles.node
      const technology = res.data.articles.technology
      
      const location = document.querySelector(selector)
      
      bootstrap.forEach(elm => {
      location.appendChild(Card(elm))
      });

      javascript.forEach(elm => {
      location.appendChild(Card(elm))
      });

    jquery.forEach(elm => {
        location.appendChild(Card(elm))
      });

    node.forEach(elm => {
      location.appendChild(Card(elm))
      });

      technology.forEach(elm => {
      location.appendChild(Card(elm))
      });

    })


}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
