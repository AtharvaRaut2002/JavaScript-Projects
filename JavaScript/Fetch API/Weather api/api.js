/*
console.log("This is my fetch api");

//Button
let myBtn = document.getElementById("mybtn");


// div container
let content = document.getElementById("content");

/*function getData(){
    console.log("Started getData");
    url = "a.txt";
    fetch(url).then((response)=>{
        console.log("Inside first then");
        return response.text();
    }).then((data)=>{
        console.log("Inside second");
        console.log(data);
    })
}*/
/*
function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"Atharva","salary":"123","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'content-Type' : 'appilication/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json())
    .then(data => console.log(data)
    )
}

console.log("Before running getData");
postData();
console.log("Before running getData");

*/

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'] ;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})
.catch(err => alert("Wrong city name!"));
})

