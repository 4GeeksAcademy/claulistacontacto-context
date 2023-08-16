const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			obtenerInfo: async function() {
				console.log("obtener info");
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda", {
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
			}
		}
	};
};

export default getState;
