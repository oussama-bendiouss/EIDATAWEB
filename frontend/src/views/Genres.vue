<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div class="scrollmenu">
      <a href="#Action">Action</a>
      <a href="#Adventure">Adventure</a>
      <a href="#Comedy">Comedy</a>
      <a href="#Crime">Crime</a>
      <a href="#Drama">Drama</a>
      <a href="#Documentary">Documentary</a>
      <a href="#Fantasy">Fantasy</a>
      <a href="#Historical">Historical</a>
      <a href="#Horror">Horror</a>
      <a href="#Kids">Kids</a>
      <a href="#Romance">Romance</a>
      <a href="#Satire">Satire</a>
      <a href="#Science_fiction">Science fiction</a>
      <a href="#Thriller">Thriller</a>
      <a href="#Western">Western</a>
      <a href="#War">War</a>
    </div>

    <h2>Horizontal Scrollable Menu</h2>
    <p>Resize the browser window to see the effect.</p>
  </body>
</template>
<style>
div.scrollmenu {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  background-color: #777;
}
</style>
