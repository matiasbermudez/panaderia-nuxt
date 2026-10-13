export default defineEventHandler(async (event) => {
    // Aquí puedes implementar la lógica para obtener los productos desde tu base de datos
    const productos = [
         {
        id : 1,
        nombre : "Pan de Chocolate",
        descripcion : " API Pan de chocolate con relleno de crema",
        precio : 2500,
        imagen : "/pan-chocolate.webp",
        tipo : "Pan"
    },
    {
        id : 2,
        nombre : "Croissant",
        descripcion : " API Crujiente croissant con mantequilla",
        precio : 3000,
        imagen : "/croissant.webp",
        tipo : "Factura"
    },
    {
        id : 3,

        nombre : "Pan Integral",
        descripcion : " API Pan integral saludable y nutritivo",
        precio : 2000,
        imagen : "/pan-integral.webp",
        tipo : "Pan"
    },
    {   
        id : 4,
        nombre : "Pan de Ajo",
        descripcion : " API Pan de ajo con mantequilla y hierbas",
        precio : 2750,
        imagen : "/pan-ajo.webp",
        tipo : "Pan"
    },
{   
        id : 5,
        nombre : "Medialunas",
        descripcion : " API Medialuna de manteca y almibar",
        precio : 2750,
        imagen : "/medialunas.webp",
        tipo : "Factura"
    },
    {
        id : 6,
        nombre : "Palmeritas",
        descripcion : " API Palmeritas de hojaldre con azúcar",
        precio : 3500,
        imagen : "/palmeritas.webp",
        tipo : "Factura"
    },
    {
        id : 7,
        nombre : "Membrillitos",
        descripcion : " API Hojaldre relleno de dulce de membrillo",
        precio : 3000,
        imagen : "/membrillitos.webp",
        tipo : "Factura"
    },
    {
        id : 8,
        nombre : "Selva Negra",
        descripcion : " API Tarta de chocolate con crema y cerezas",
        precio : 4000,
        imagen : "/selva-negra.webp",
        tipo : "Tarta"
    },
    {
        id : 9,
        nombre : "Pasta Frola",
        descripcion : " API Deliciosa pasta frola con dulce de membrillo",
        precio : 4500,
        imagen : "/pastafrola.webp",
        tipo : "Tarta"
    },
    {
        id : 10,
        nombre : "Tarta de Ricota",
        descripcion : " API Tarta de ricota con ricota dulce",
        precio : 4000,
        imagen : "/tarta-ricota.webp",
        tipo : "Tarta"
    }];
    return productos;
});