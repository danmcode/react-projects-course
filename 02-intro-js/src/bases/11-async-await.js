
const getImagen = async()=>{

    try {
        const apiKey = '6Jo2fjFv9D9TUGeEIGqHPqwfjHIk8Ek9';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data = await resp.json();
        const {url} = data.data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    
    
        console.log(data);
    } catch (error) {
        console.error(error);
    }

}

getImagen();

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp=> resp.json())
//     .then(({ data })=> {
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);