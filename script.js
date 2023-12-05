document.addEventListener('DOMContentLoaded', function () {
    const productInfo = document.querySelector('.product-info');
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');

    let total = 0;

    function mostrarDescripcion() {
        productInfo.innerHTML = "<p><strong>Descripción del producto:</strong> Esta es una bebida energética deliciosa y llena de energía.</p>";
        productInfo.style.display = 'block';
    }

    function mostrarInfoNutricional() {
        productInfo.innerHTML = "<p><strong>Información Nutricional:</strong> Calorías: 100, Azúcares: 20g, Cafeína: 80mg, ...</p>";
        productInfo.style.display = 'block';
    }

    function agregarAlCarrito() {
        const flavor = document.getElementById('flavor').value;
        const size = document.getElementById('size').value;
        const payment = document.getElementById('payment').value;

        const itemPrice = size === '320' ? 5 : 7; // Asumiendo precios fijos por tamaño

        total += itemPrice;

        const newItem = document.createElement('li');
        newItem.textContent = `Sabor: ${flavor}, Tamaño: ${size}ml, Pago: ${payment}, Precio: $${itemPrice}`;
        cartItems.appendChild(newItem);

        totalElement.textContent = total;
    }

    document.querySelector('#btnDescripcion').addEventListener('click', mostrarDescripcion);
    document.querySelector('#btnInfoNutricional').addEventListener('click', mostrarInfoNutricional);
    document.querySelector('.order-section button').addEventListener('click', agregarAlCarrito);
});
