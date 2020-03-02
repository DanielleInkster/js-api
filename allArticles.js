const url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=1841c0b4b8ec4bbba16000ceaef85c30';

let output = document.querySelector('.output')
let output2 = document.querySelector('.output2')

function getArticles(){

  fetch(url)
      .then((response) =>{
          return response.json();
      }).then((data) => {
      data.articles.forEach(function(article, index){
            output.innerHTML += "<center><img class = output1 src="+`${imageUrl(article.urlToImage)}`+"></img>"+
                                "<h1 class = 'sidebarTitle'> " +`${article.title}`+"</a></h1>" +
                                "<h2 class = 'sidebarArticle'>"+ `${article.description.substring(0, 100)}`+"... </h2>"+
                                "<button id='"+`${index}`+"' onclick ='readArticle("+`${index}` +");'> See More </button>" + 
                                "</center><br><br>"                             
      } )

      output.innerHTML += "<center><p class = 'attribute'> This content made available by" +
                          "<a href ='https://newsapi.org/'> NewsAPI</a>,<br> a free resource for "+ 
                          "open source and non-commercial projects.</p><center>"
    })
}

function readArticle(index){

  fetch(url)
    .then((response) =>{
        return response.json();
    }).then((data) => {
    output2.innerHTML = "<center><img class = 'output2' src="+`${imageUrl(data.articles[index].urlToImage)}`+"></img> <br>"+
                        "<h1 class = 'title2'><a href="+ `${data.articles[index].url}`+">"+
                        `${data.articles[index].title}`+"</a><h1>"+
                        "<h4 class='article'><br class= 'article'>" + `${data.articles[index].content}`+"<h4></center>"
  })
}

function imageUrl(img){
  return img===null ?  'img/no-image.png' : img
}