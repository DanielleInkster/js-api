
function getArticles(){
let output = document.querySelector('.output')
let url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=1841c0b4b8ec4bbba16000ceaef85c30';
fetch(url)
    .then((response) =>{
        return response.json();
    }).then((data) => {
    data.articles.forEach(article =>
    output.innerHTML += "<center><img src="+`${imageUrl(article.urlToImage)}`+" width='280' height='180'></img>"+
                    "<h1> <a href="+ `${article.url}`+">" +`${article.title}`+"</a></h1>" +
                    // "<h3>"+ `${article.description.substring(0, 100)}`+"... </h3>"+
                    "<button id = 'btn' onclick= "+`${readArticle(article)}`+"'> See More </button>" + "</center><br>" 
    )
    document.getElementById('btn').addEventListener('click', readArticle(), false);
  })
}


function readArticle(article){
  let output2 = document.querySelector('.output2')
  output2.innerHTML = "<h2>"+`${article.title}`+"<h2> <br> <p>" + `${article.description}`+"<p>"
}

function imageUrl(img){
 return img===null ?  'img/no-image.png' : img
}