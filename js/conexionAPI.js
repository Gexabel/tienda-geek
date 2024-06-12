async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();

    return conexionConvertida
};

async function enviarProducto(name, price, image){
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "POST",
        headers: {"Content-Type":"aplication/json"},
        body: JSON.stringify({
            name: name,
            price: price,
            image: image,
        })
    })

    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }
    return conexionConvertida;
};

async function eliminarProducto(id) {
    try {
        await fetch(`http://localhost:3001/productos/${id}`, {
          method: 'DELETE'
        });
        console.log(`Producto con ID ${id} eliminado exitosamente.`);
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }

    const conexionConvertida = conexion.json();
    return conexionConvertida;
};

async function actualizarListaProductos() {
    try {
      const listaAPI = await listarProductos();
      products.innerHTML = "";
      listaAPI.forEach((producto) => {
        const card = crearCard(producto.name, producto.price, producto.image, producto.id);
        products.appendChild(card);
      });
    } catch (error) {
      console.error('Error al actualizar la lista de productos:', error);
    }
  };

    export const conexionAPI = {
        listarProductos, 
        enviarProducto, 
        eliminarProducto, 
        actualizarListaProductos
    };