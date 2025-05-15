const formulario = document.getElementById('formulario');

formulario.addEventListener('submit',e=>{
	e.preventDefault();

	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('email').value;
	const comentario = document.getElementById('comentario').value;

	fetch('/contact/add',{
		method:'POST',
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify({email,nombre,comentario})
	})
	.then(res=>res.json())
	.then(res=>{
		if(res.status==true){
			alert('¡Datos de Contacto creados Correctamente!');
		}else{
			alert('¡Los Datos no se pudieron crear correctamente!');
		}
	})
	
});
