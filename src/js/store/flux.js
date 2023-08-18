const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			agregarContacto: async function(fullName, email, address, phone) {
				console.log("agregarcontacto");
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "Claudia",
							address: address,
							phone: phone
						})
					});
					let data = await response.json(); //guardo el objeto en data
					console.log(data);
					if (data.msg === "Contact created successfully") {
						getActions().obtenerInfo();
					}
				} catch (error) {
					console.log(error); //si hay un error me muestra cual fue
				}
			},

			obtenerInfo: async function() {
				//obtener informacion de la API
				console.log("obtener info");
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Claudia", {
						method: "GET"
						// ContentType: "application/json",
						// PARAMS: "None"
					}); //especificamos la url donde vamos a buscar info
					let data = await response.json();
					console.log(data); //llama a la funcion y le pasa como argumento data( que es un objeto label y done)
					setStore({ contacts: data });
				} catch (error) {
					console.log(error);
				}
			},

			eliminarContacto: async function(id) {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					let data = await response.json();
					if (data.msg === "Contact deleted successfully") {
						getActions().obtenerInfo();
					}
				} catch (error) {
					console.log(error);
				}
			},

			editarContacto: async function(fullName, email, address, phone, id) {
				console.log("puedes editar");
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "Claudia",
							address: address,
							phone: phone
						})
					});
				} catch (error) {}
			}
		}
	};
};

export default getState;
