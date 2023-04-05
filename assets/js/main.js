 async function saveAlbum(){

    // capturo el valor de los dos input
    const userId = document.getElementById("userId").value;
    const title = document.getElementById("title").value;

    // verifico que no esten vacios
    if(userId == 0 || title == ""){
        return alert("Los campos solcitados no pueden ser nulos")
    }
    
    // POST 
    // https://jsonplaceholder.typicode.com/albums
    // {
    //     "userId" : 3,
    //     "title": "Probando"
    // }
   
    // crearmos y convertimos a json nuestro obj

   const data = {"userId":userId, "title":title}
   const dataJson = JSON.stringify(data)

   // armamos nuestro request 
   const response = await fetch('https://jsonplaceholder.typicode.com/albums',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:dataJson
   })

   const responseData = await response.json()

   document.getElementById("respuesta").innerHTML = `
   <h2>Se creo correctamente el album</h2> 
  <p>id: ${responseData.id} y su titulo es: ${responseData.title}</p>`

  document.getElementById("formularioAlbum").reset(); 

}