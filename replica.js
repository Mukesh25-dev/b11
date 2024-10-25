let api="https://www.omdbapi.com/?apikey=d3790b7a&t=";
let title=document.getElementById('title');
let Director=document.getElementById('DIRECTOR');
let Released=document.getElementById('RELEASED');
let Actors=document.getElementById('ACTORS');
let Rated=document.getElementById('RATED');
let Runtime=document.getElementById('RUNTIME');
let Genre =document.getElementById('GENRE');
let Plot=document.getElementById('PLOT');
let Language=document.getElementById('LANGUAGE');
let poster=document.getElementById('poster');
let BoxOffice =document.getElementById('BoxOffice');

function SearchMovie(){
    let moviename=document.getElementById("moviename")
    let query = api+(moviename.value)
    fetch(query).then((response)=>{
        return response.json()
    }).then((data)=>{
        title.innerText=data.Title;
        Director.innerText= data. Director;
        RELEASED.innerText=data.Released;
        ACTORS.innerText=data.Actors;
        RATED.innerText=data.Rated;
        RUNTIME.innerText=data.Runtime;
        GENRE.innerText=data.Genre;
        PLOT.innerText=data.Plot;
        LANGUAGE.innerText=data.Language;
        BoxOffice.innerText=data.BoxOffice;
        poster.src=data.Poster;
    })  
}