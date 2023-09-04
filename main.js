if (confirm("Bienvenidos a la mejor plataforma de CDs de Argentina. ¿Desea continuar?")) {
    console.log("Continuar");

    let cdArtista = prompt("Ingrese nombre del artista:");
    cdArtista = cdArtista.toLowerCase();

    // Array de los CDs
    const cds = [
        {
            id: 1,
            titulo: "Paradise",
            artista: "Lana del Rey",
            precio: 99, 
            genero: "Indie Pop",
        },
        {
            id: 2,
            titulo: "WorldWide Angel",
            artista: "Bad Gyal",
            precio: 39, 
            genero: "Genero Urbano",
        },
        {
            id: 3,
            titulo: "When We All Fall Asleep, Where Do We Go?",
            artista: "Billie Eillish",
            precio: 59, 
            genero: "Indie",
        }
    ];

    const cdsArtista = cds.filter(cd => cd.artista.toLowerCase() === cdArtista);

    if (cdsArtista.length > 0) {
        for (const cd of cdsArtista) {
            alert(`Título: ${cd.titulo}\nArtista: ${cd.artista}\nPrecio: $${cd.precio}\nGénero: ${cd.genero}`);
        }
    } else {
        alert(`No se encontraron CDs para el artista ${cdArtista}.`);
    }

    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea calcular:"));
    let costoTotal = 0;

    for (let contador = 1; contador <= cantidadProductos; contador++) {
        let producto = prompt(`Ingrese el nombre del Producto ${contador}:`);
        let precioProducto = parseFloat(prompt(`Introduzca el precio del Producto ${producto}:`));

        if (isNaN(precioProducto)) {
            alert("El precio ingresado no es válido. Inténtalo nuevamente.");
        } else {
            costoTotal += precioProducto;
        }
    }
    alert(`El costo total de tus productos es: $${costoTotal}`);

    if (confirm("¿Antes de irte, te gustaría agregar algún álbum a nuestra colección?")) {
        // Pide al usuario los datos del nuevo álbum
        let NewArtista = prompt("Introduce el nombre del artista");
        let NewAlbum = prompt("Introduce el nombre del álbum");
        let NewPrecio = parseInt(prompt("Introduce el precio"));
    
        // nuevo objeto con los datos 
        let nuevoProducto = {
            artista: NewArtista,
            album: NewAlbum,
            precio: NewPrecio,
        };
    
        let coleccion = JSON.parse(localStorage.getItem("coleccion")) || [];
        coleccion.push(nuevoProducto);
        localStorage.setItem("coleccion", JSON.stringify(coleccion));
    
        alert(`Álbum "${NewAlbum}" de "${NewArtista}" agregado a la colección.`);
    } else {
        alert("¡Te esperamos pronto!");
    }
}
const coleccionGuardada = JSON.parse(localStorage.getItem("coleccion"));

// Verifica si hay datos en la colección y muestra los detalles
if (coleccionGuardada && coleccionGuardada.length > 0) {
    console.log("Colección actual:");
    coleccionGuardada.forEach((producto, index) => {
        console.log(`Álbum ${index + 1}:`);
        console.log(`Artista: ${producto.artista}`);
        console.log(`Álbum: ${producto.album}`);
        console.log(`Precio: ${producto.precio}`);
    });
} else {
    console.log("La colección está vacía o no se ha agregado ningún álbum aún.")
};

const contador = document.querySelector('.quantity'); 
const totalPrecio = document.getElementById('total-precio');

// Escucha los eventos de cambio en el contador
contador.addEventListener('change'), () => {
const cantidad = parseInt(contador.value);
const costoTotal = cantidad * 99;
totalPrecio.textContent = `$${costoTotal}`;
};







