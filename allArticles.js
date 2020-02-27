
function getArticles(){
let output = document.querySelector('.output')
let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=1841c0b4b8ec4bbba16000ceaef85c30';
fetch(url)
    .then((response) =>{
        return response.json();
    }).then((data) => {
    data.articles.forEach(article =>
    output.innerHTML += "<center><img src="+`${article.urlToImage}`+" width='280' height='180'></img>"+
                    "<h1>"+`${article.title}`+"</h1>" +
                    "<h3>"+ `${article.description}`+"... </h3> </center> <br>" 
    )
  })
}