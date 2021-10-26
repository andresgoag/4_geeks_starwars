const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favoritesList: []
		},
		actions: {
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err));
			},
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }))
					.catch(err => console.error(err));
			},
			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err));
			},
			addFavorites: name => {
				let favsList = getStore().favoritesList;
				if (!getStore().favoritesList.find(item => item == name)) {
					favsList.push(name);
				}
				setStore({ favoritesList: favsList });
			},
			deleteFavorite: name => {
				let filterFavorites = getStore().favoritesList.filter(favoriteToRemove => name != favoriteToRemove);
				setStore({ favoritesList: filterFavorites });
			}
		}
	};
};

export default getState;
