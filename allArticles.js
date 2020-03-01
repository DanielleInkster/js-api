let url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=1841c0b4b8ec4bbba16000ceaef85c30';

function getArticles(){
let output = document.querySelector('.output')

fetch(url)
    .then((response) =>{
        return response.json();
    }).then((data) => {
    data.articles.map(function(article, index){
          output.innerHTML += "<center><img src="+`${imageUrl(article.urlToImage)}`+" width='280' height='180'></img>"+
                    "<h1> <a href="+ `${article.url}`+">" +`${article.title}`+"</a></h1>" +
                    "<h3>"+ `${article.description.substring(0, 100)}`+"... </h3>"+
                    "<button id='"+`${index}`+"' onclick ='readArticle("+`${index}` +")'> See More </button>" + 
                    "</center><br><br>" 
                                   
     } )
  })
}

function readArticle(index){
  let output2 = document.querySelector('.output2')
  output2.innerHTML =""
  fetch(url)
    .then((response) =>{
        return response.json();
    }).then((data) => {
    output2.innerHTML = "<center><h1>"+`${data.articles[index].title}`+"<h1>"+
                        "<h4><br>" + `${data.articles[index].content}`+"<h4> </center"
  })
}

function imageUrl(img){
 return img===null ?  'img/no-image.png' : img
}