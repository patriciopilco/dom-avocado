console.log('Happy hacking :)------------')

const url = "https://platzi-avo.vercel.app";

//web api trae recuros desde cualquier sitio
//1. conectar con el servidor
//2. procesar la respuesta y obtener un json
//3. Realizar el render en la página

//# usando promesas
//window.fetch(url).then(res => res.json())
//                 .then(data => {
//                  data.data.forEach(element => { console.log(element.name) })
//                 })


//#Usando  async await
const nombres = async ()=>{
    const response = await fetch(`${url}/api/avo`);
    const data = await response.json();

    const appNode = document.querySelector('div#app')
    console.log('-------------------------');
    const listaElemento=[]
    data.data.forEach(
        item => {
            const container = document.createElement('div')
            //crear elementos html
            const image = document.createElement('img')
            image.src = `${url}${item.image}`
            const title = document.createElement('h2')
            title.textContent = item.name
            const price = document.createElement('div')
            price.textContent = item.price
            container.append( image, title, price)
            listaElemento.push(container)
        }
    )
    
    appNode.append(...listaElemento);
}

nombres();
