
function ObtenerDatos() {
	var nombre = document.getElementById('inombre').value;
	var correo = document.getElementById('iemail').value;
	var celular = parseFloat(document.getElementById('icel').value);
	var gusto = document.getElementById('igustoa').value;
	


	let tabla1 = document.getElementById('tabla1').insertRow(0);
	let newDeleteCell = tabla1.insertCell(0);
	let editB = document.createElement("button");
	let col2 = tabla1.insertCell(0);
	let col3 = tabla1.insertCell(0);

	editB.textContent = "edit"
	newDeleteCell.appendChild(editB);
	col2.innerHTML = '0';
	col3.innerHTML = gusto;

	function editar(){
		gustos = prompt('Ingrese el nuevo gusto','')
		var newgusto = gustos;
		porcentaje = prompt('Ingrese el nuevo porcentaje','')
		var newpor = porcentaje;
		col2.innerHTML = newpor;
		col3.innerHTML = newgusto;
				
	}
	editB.addEventListener("click", editar,true)	
}