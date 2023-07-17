const button = document.getElementById("button");
const jokeContent = document.getElementById("jokeContent");
const joke = document.getElementById("joke");

button.onclick = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(function(response){
        button.textContent='Next';
        jokeContent.textContent=response.data.setup;
        joke.textContent = "";
        setTimeout(function(){
            joke.textContent = response.data.punchline;
        },2000)
        
    })
    .catch(function (error) {
        console.log(error);
    })
}