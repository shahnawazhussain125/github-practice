var table = document.getElementById("tab");

var proxyURL = 'https://cors-anywhere.herokuapp.com/';
var data1;
fetch(proxyURL + 'http://pokeapi.co/api/v2/pokemon')
.then((res) => res.json())
.then(function(data){
    data1 = data.results;
    console.log(data1);  
    data1.forEach(element => {
        fetch(proxyURL + element.url)
        .then((res) => res.json())
        .then(function(data)
        {
            
            var tr = document.createElement("tr");
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var img = document.createElement("img");
            img.setAttribute("src", data.sprites.front_default);
            td1.innerHTML = data.species.name;
            td2.appendChild(img);
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            
            table.appendChild(tr);
        })
        }); 
    
});


// for(var key in data1)
// {
    // fetch(proxyURL + "https://pokeapi.co/api/v2/pokemon/1/")
    // .then((res) => res.json())
    // .then(function(data){
    //     console.log(data)
        // var table = document.createElement("table");
        // var tr = document.createElement("tr");
        // var td1 = document.createElement('td');
        // var td2 = document.createElement('td');
        // td1.innerHTML = 
   // })
//}

if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('/sw.js')
    .then(function(){
        console.log("Service Worker is registered");
    })
}







