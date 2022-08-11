# Tienda Aguacates

> ✨ Tienda de aguacates manipulando DOM

## Plantilla

```sh
npx create-snowpack-app my-app --template snowpack-template-tailwind
```

## Consumir Api y Exponer mediante DOM.

-Crear div contenedor de la app en *pulic/index.html*
```bash
<div id="app"></div>
```
-Consumir api con fetch en *index.js*
```bash
//#Declarar url de manera general
const url = "https://platzi-avo.vercel.app";

const nombres = async ()=>{

    #Consumir api usando fetch
    const response = await fetch(`${url}/api/avo`);
    const data = await response.json();

    #Seleccionar div con id app
    const appNode = document.querySelector('div#app')
    
    #Inicializar lista de elementos a mostrar en página
    const listaElemento=[]

    #Recorrer la lista de datos 
    data.data.forEach(
        item => {
            #Crear elemento div contenedor
            const container = document.createElement('div')
  
            #Crear elemento imagen
            const image = document.createElement('img')
            image.src = `${url}${item.image}`

            #Crear elemento título
            const title = document.createElement('h2')
            title.textContent = item.name

            #Crear elemento div
            const price = document.createElement('div')
            price.textContent = item.price

            #Añadir elementos a container
            container.append( image, title, price)
            #Añadir elemento a lista
            listaElemento.push(container)
        }
    )
    #Añadir lista elementos a div del app
    appNode.append(...listaElemento);
}

```

## Personalizar con estilos 

```bash
    #Uso de estilos de manera directa
    title.style = 'font-size: 2rem'
```
```bash            
    #Uso de estilos mediante objetos 
    title.style.fontSize = '2rem'
```
```bash            
    #Uso de estilos mediante className
    title.className = "title-style"
```
```bash            
    #Uso de estilos mediante tailwindcss
    title.className = "text-xl"
```            

