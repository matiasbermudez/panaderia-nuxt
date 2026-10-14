interface InterfaceProducto {
    id: number;
    nombre: string;
    precio: number;
    tipo: string;  
}

interface InterfaceCarrito extends InterfaceProducto {
    cantidad: number;
}

export const useCarrito = () => {
    const carrito = useState<InterfaceCarrito[]>(
        'carrito',
        () => []
    );


    const agregarAlCarrito = (producto: InterfaceProducto) => {
        const existingProduct = carrito.value.find(item => item.id === producto.id);
        if (existingProduct) {
            existingProduct.cantidad += 1;
            
        } else {
            carrito.value.push({ ...producto, cantidad: 1 });
        }
    };

    const sacarDelCarrito = (producto: InterfaceProducto) => {
        const index = carrito.value.findIndex(item => item.id === producto.id);
        if (index !== -1) {
            carrito.value.splice(index, 1);
        }
    };

    const vaciarCarrito = () => {
        carrito.value.length = 0;
    };

    const obtenerCarrito = () => {
        return carrito.value;
    };

    return {
        carrito: carrito,
        agregarAlCarrito,
        sacarDelCarrito,
        vaciarCarrito,
        obtenerCarrito
    };
};



