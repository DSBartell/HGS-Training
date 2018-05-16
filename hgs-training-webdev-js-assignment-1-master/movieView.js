
$(document).ready(init);

  $('#addMovie').click(function()
  {});

/*

  Your code goes here

*/
function appendMovieDiv(movie)
{
  var movieElement;

  // create a div for the movie
  //$('#movieView').append();
}

function init()
{
  var xhr = new XMLHttpRequest();
  xhr.open('GET','https://training1.hmgrwn.app/movies/get/all', true);
  xhr.onload = function()
  {
    if(this.status == 200)
    {
      var movies = JSON.parse(this.responseText);
      console.log(movies);
      var output ='';
      for(var i in movies)
      {
        output += '<div class="movie-text p-2 m-2 text-center">'+
        '<p>'+movies[i].title+'</p>'+
        '<p>'+movies[i].description+'</p>'+
        '<a href="'+movies[i].weblink+'"></a>'+
        '<p>Movie ID: '+movies[i].id+'</p>'+
        '</div>'
      }
      document.getElementById('movieView').innerHTML = output;
    }
    else if(this.status == 403)
    {
      alert('HTTP Request Error 403: Access Forbidden');
    }
    else if(this.status == 404)
    {
      alert('HTTP Request Error 404: Not Found');
    }
    else
    {
      alert('HTTP Request Error ' + this.status);
    }
  }
  xhr.send();
}
