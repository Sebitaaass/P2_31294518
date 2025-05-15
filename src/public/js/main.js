const productCard = document.querySelectorAll('.product-card');

productCard.forEach(producto=>{
	producto.addEventListener('click',()=>{
		window.location.href='/payment';
	});
})