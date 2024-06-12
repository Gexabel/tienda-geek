import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-form]")


async function crearProducto(evento){

    evento.preventDefault();
    const name = document.querySelector("[data-name]").value
    const price = document.querySelector("[data-price]").value
    const image = document.querySelector("[data-image]").value

    try{
        await conexionAPI.enviarProducto(name, price, image);
        /* window.location.href = "index.html"; */
    }catch(e){
        alert(e)
    }
    
}

formulario.addEventListener("submit",evento => crearProducto(evento));


window.addEventListener("DOMContentLoaded", function() {
    function limpiarForm() {
      const nameInput = document.querySelector("[data-name]");
      const priceInput = document.querySelector("[data-price]");
      const imageInput = document.querySelector("[data-image]");
  
      if (nameInput) {
        nameInput.value = "";
      }
  
      if (priceInput) {
        priceInput.value = "";
      }
  
      if (imageInput) {
        imageInput.value = "";
      }
    }
  
    const limpiarButton = document.getElementById("limpiar");
    limpiarButton.addEventListener("click", (e) => {
      e.preventDefault();
      limpiarForm();
    });
  });


