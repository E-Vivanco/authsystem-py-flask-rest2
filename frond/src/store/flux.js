const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl:"https://3000-evivanco-authsystempyfl-r906cwdh8n8.ws-eu93.gitpod.io/api/register",
            currentUser:null,
        },   
		actions: {
			// Use getActions to call a function within a fuction
            getLogin: async (info={name:'',lastename:'',email:'',password:'',avatar:''})
			},
			getLogout: () => {
				//if(sessionStorage.getItem('currentUser'))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};


export default getState;
