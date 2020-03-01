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
            output.innerHTML += "<center><img src="+`${imageUrl(article.urlToImage)}`+
                                " style = 'width: 100%; max-width: 350px; height: auto;'></img>"+
                                "<h1 style ='font-size:2vw'> " +`${article.title}`+"</a></h1>" +
                                "<h2 style ='font-size:1vw'>"+ `${article.description.substring(0, 100)}`+"... </h2>"+
                                "<button id='"+`${index}`+"' onclick ='readArticle("+`${index}` +");'> See More </button>" + 
                                "</center><br><br>"                             
      } )

      output.innerHTML += "<center><p style ='font-size:.75vw'> This content made available by" +
                          "<a href ='https://newsapi.org/'> NewsAPI</a>,<br> a free resource for "+ 
                          "open source and non-commercial projects.</p><center>"
    })
}

function readArticle(index){

  fetch(url)
    .then((response) =>{
        return response.json();
    }).then((data) => {
    output2.innerHTML = "<center><img src="+`${imageUrl(data.articles[index].urlToImage)}`+
                        " style = 'width: 100%; max-width: 500px; height: auto;'></img> <br>"+
                        "<h1 style ='font-size:2.5vw'><a href="+ `${data.articles[index].url}`+">"+
                        `${data.articles[index].title}`+"</a><h1>"+
                        "<h4 style='font-size:1.2vw'><brstyle='font-size:1.2vw'>" + `${data.articles[index].content}`+"<h4></center>"
  })
}

function imageUrl(img){
  return img===null ?  'img/no-image.png' : img
}