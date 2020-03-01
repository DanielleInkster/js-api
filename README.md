# News Summary challenge

## Challenge

You'll create an app that summarises the news.

## Project overview

Your app will grab all the headlines from the NewsAPI and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

You'll write a single page web app.  You'll write your code in frontend JavaScript, CSS and HTML.  You won't use Ruby or backend JavaScript.

### Serving your app

You'll use a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve your HTML, CSS and JavaScript files.  You'll send requests to an API to get data from the News API and to summarise text.

> The API is hosted on an external server that you don't have to worry about.  You only need a static web server.  That's why this type of architecture is called "serverless".

## User Stories

Some of these stories will need decomposing if they seem too large.

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```

```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

## How to Install and Run
```bash
> git clone git@github.com:DanielleInkster/js-api.git
> npm install http-server -g
> http-server
(or)
> git clone git@github.com:DanielleInkster/js-api.git
> open news.html
```
## How It Works

<div class="imgContainer" float="left">
  Open page
<img src="img/openpage.png" width="400" height="300" />
  Select an Article
<img src="img/readarticle.png" width="400" height="300" />
  <br>
  Can be viewed easily on multiple devices
<img src="img/ipad.png" width="400" height="300" />
  4
<img src="img/iphone.png" width="400" height="300" />
</div>
