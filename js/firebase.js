document.getElementById('pedido-pizza').addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        await db.collection("pedidos").add({
            nombre: document.getElementById('nombre').value,
            telefono: document.getElementById('telefono').value,
            tipoPizza: document.getElementById('tipo-pizza').value,
            tamañoPizza: document.getElementById('tamaño-pizza').value,
            extras: document.getElementById('extras').value,
            fecha: new Date()
        });

        alert("Pedido realizado con éxito!");
        document.getElementById('pedido-pizza').reset();
        cargarPedidos();
    } catch (error) {
        console.error("Error: ", error);
    }
});

// Read orders
async function cargarPedidos() {
    const listaPedidos = document.getElementById('pedidos-lista');
    listaPedidos.innerHTML = '';

    try {
        const querySnapshot = await db.collection("pedidos").get();
        querySnapshot.forEach((doc) => {
            const pedido = doc.data();
            const li = document.createElement('li');
            li.innerHTML = `
                Nombre: ${pedido.nombre}, Pizza: ${pedido.tipoPizza}, 
                Tamaño: ${pedido.tamañoPizza}, Extras: ${pedido.extras}
                <button onclick="eliminarPedido('${doc.id}')">Eliminar</button>
                <button onclick="editarPedido('${doc.id}')">Editar</button>
            `;
            listaPedidos.appendChild(li);
        });
    } catch (error) {
        console.error("Error: ", error);
    }
}

// Delete order
window.eliminarPedido = async (id) => {
    try {
        await db.collection("pedidos").doc(id).delete();
        alert("Pedido eliminado con éxito!");
        cargarPedidos();
    } catch (error) {
        console.error("Error: ", error);
    }
};

// Edit order
window.editarPedido = async (id) => {
    try {
        const doc = await db.collection("pedidos").doc(id).get();
        const pedido = doc.data();

        const updates = {
            nombre: prompt("Editar Nombre", pedido.nombre),
            telefono: prompt("Editar Teléfono", pedido.telefono),
            tipoPizza: prompt("Editar Tipo de Pizza", pedido.tipoPizza),
            tamañoPizza: prompt("Editar Tamaño", pedido.tamañoPizza),
            extras: prompt("Editar Extras", pedido.extras)
        };

        await db.collection("pedidos").doc(id).update(updates);
        alert("Pedido actualizado con éxito!");
        cargarPedidos();
    } catch (error) {
        console.error("Error: ", error);
    }
};

window.onload = cargarPedidos;