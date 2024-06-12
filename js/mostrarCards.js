import { conexionAPI } from "./conexionAPI.js";

const products = document.querySelector("[data-product]")

function crearCard(name,price,image,id){
    const producto = document.createElement("div");
    producto.className = "card";
    producto.innerHTML = `<div class="img-container">
                        <img src="${image}" alt="${name}">
                    </div>
            
                    <div class="card-container--info">
                        <p class="name-size">${name}</p>
                        <div class="card-container--value">
                        <p>$${price}</p>
                        <button class="delete-button" data-id = "${id}">
                            <img src="./assets/trash-icon.png" alt="Eliminar">
                        </button>
                        </div>
                    </div>`

                    const deleteButton = producto.querySelector("[data-id]");
                    deleteButton.addEventListener("click", () => conexionAPI.eliminarProducto(id));

    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto => products.appendChild(crearCard(producto.name, producto.price, producto.image, producto.id)))
}

listarProductos()

