function saveAlbum(){
    // capturo el valor de los dos input
    const userId = document.getElementById("userId").value;
    const title = document.getElementById("title").value;

    // verifico que no esten vacios
    if(userId == 0 || title == ""){
        return alert("Los campos solcitados no pueden ser nulos")
    }
    // POST 
    // https://jsonplaceholder.typicode.com/posts
    // {
    //     "userId" : 3,
    //     "title": "Probando"
    // }

    console.log("Funciona")

}