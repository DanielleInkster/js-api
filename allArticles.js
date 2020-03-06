const url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=1841c0b4b8ec4bbba16000ceaef85c30';

let output = document.querySelector('#output')
let output2 = document.querySelector('#output2')

function getArticles(){

  fetch(url)
      .then((response) =>{
          return response.json();
      }).then((data) => {
      data.articles.forEach(function(article, index){
            output.innerHTML += "<div class = 'card bg-secondary rounded p-2 mx-auto'><img class ='rounded mx-auto d-block' id = 'articleImage1'" +
                                "src="+`${imageUrl(article.urlToImage)}`+"></img>"+
                                "<h1 id ='sidebarTitle'> " +`${article.title}`+"</a></h1>" +
                                "<h2 id ='sidebarArticle'>"+ `${article.description.substring(0, 100)}`+"... </h2>"+
                                "<button id='btn' onclick ='readArticle("+`${index}` +");'> See More </button>" + 
                                "</div><br>"                             
      } )

      output.innerHTML += "<center><p id = 'attribute'> This content made available by" +
                          "<a href ='https://newsapi.org/'> NewsAPI</a>,<br> a free resource for "+ 
                          "open source and non-commercial projects.</p><center>"
    })
}

function readArticle(index){

  fetch(url)
    .then((response) =>{
        return response.json();
    }).then((data) => {
    output2.innerHTML = "<center><div class = 'card bg-secondary rounded p-2 mx-auto'><img class ='rounded' id='articleImage2'"+
                        "src="+`${imageUrl(data.articles[index].urlToImage)}`+"></img>"+
                        "<br class='articleBreak'> <h1 id ='title2'><a class='text-white' href="+ `${data.articles[index].url}`+">"+
                        `${data.articles[index].title}`+"</a></h1>"+
                        "<h4 id='article'>" + `${data.articles[index].content}`+"<h4></div></center>"
  })
}

function imageUrl(img){
  return img===null ?  'img/no-image.png' : img
}