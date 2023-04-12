const url ="https://api.tvmaze.com/shows"

fetch(url).then(object=>{
    return object.json();
}).then(function(allshows) {
    console.log(allshows);
    allshows.slice(-24).forEach(function (show) {
        rendershowdata(show);        
    });
})



let searcH=document.querySelector("#search-button");

searcH.addEventListener("click",searchShow);

function searchShow(){
    let query=document.querySelector("#search-input").value;
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`).then(object=>{
        return object.json();
    }).then((object) => {
        console.log(object);
        let main= document.querySelector('#show_container');
        main.innerHTML='';
        object.slice(-24).forEach(function (object) {
            rendershowdata(object.show);        
        });
    })  
}

function rendershowdata(show){
    let allshowcontainer=document.getElementById("show_container");
    let showcontainer=document.createElement("div");
    createshowposter(show,showcontainer);

    let hovercard = document.createElement("div");
    hovercard.classList.add("hoverCard");
    hovercard.innerHTML=`<h2>${show.name}</h2>
    <br>${show.rating.average}
    <br><p>${show.summary}</p> `   
    showcontainer.appendChild(hovercard);
    allshowcontainer.appendChild(showcontainer);
}

function createshowposter(show,containerdiv) {
    let poster = document.createElement("img");
    poster.classList.add("showPoster");
    poster.srcset = show.image.medium;
    containerdiv.appendChild(poster);

}