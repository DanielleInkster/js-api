
function getArticles(){
let output = document.querySelector('.output')
let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=1841c0b4b8ec4bbba16000ceaef85c30';
fetch(url)
    .then(function(response) {
        return response.json();
    }).then((data) => {
    console.log(data);
    output.innerHTML="<center><img src="+`${data.articles[0].urlToImage}`+" width='280' height='180'></img>"+
                    "<h1>"+`${data.articles[0].title}`+"</h1>" +
                    "<h3>"+ `${data.articles[0].content.substring(0, 230)}`+"... </h3> </center>" 
  })
}