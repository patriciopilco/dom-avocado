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



const formatPrice = (price) =>
  new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

const nombres = async ()=>{
    const response = await fetch(`${url}/api/avo`);
    const data = await response.json();
    const appNode = document.getElementById('app')
    const listaElemento=[]
    data.data.forEach(
        item => {
            const container = document.createElement('div')
            const image = document.createElement('img')
            image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
            image.src = `${url}${item.image}`
            const title = document.createElement('h2')
            title.textContent = item.name
            title.className = "text-xl text-red-600"
            const price = document.createElement('div')
            price.className = "text-gray-600";
            price.textContent = formatPrice(item.price)
            const priceAndTitle = document.createElement("div");
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);
            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.appendChild(image);
            card.appendChild(priceAndTitle);
            container.append( card)
            listaElemento.push(container)
        }
    )
    appNode.append(...listaElemento);
}

nombres()
