import React from "react";

// Components
import { Card } from "../component/card.jsx";
import { URL_API } from "../index.js";

export const Home = () => {
	const [characters, setCharacters] = React.useState([]);
	const [planets, setPlanets] = React.useState([]);
	const [vehicles, setVehicles] = React.useState([]);

	React.useEffect(() => {
		fetch(`${URL_API}/people`)
			.then(response => {
				if (response.ok) return response.json();
				throw new Error("Error fetching from API");
			})
			.then(data => setCharacters(data.results))
			.catch(error => console.error(error));
	}, []);

	React.useEffect(() => {
		fetch(`${URL_API}/planets`)
			.then(response => {
				if (response.ok) return response.json();
				throw new Error("Error fetching from API");
			})
			.then(data => setPlanets(data.results))
			.catch(error => console.error(error));
	}, []);

	React.useEffect(() => {
		fetch(`${URL_API}/vehicles`)
			.then(response => {
				if (response.ok) return response.json();
				throw new Error("Error fetching from API");
			})
			.then(data => setVehicles(data.results))
			.catch(error => console.error(error));
	}, []);

	return (
		<div>
			<div className="container">
				<div className="row-container">
					{characters.map((character, index) => {
						character.img_url =
							"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6090f7f251c9c6c605e612fc%2FDarth-Vader%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D3127%26cropY1%3D33%26cropY2%3D1792";
						return <Card item={character} key={`character${index}`} />;
					})}
				</div>

				<div className="row-container">
					{planets.map((planet, index) => {
						planet.img_url =
							"https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg";
						return <Card item={planet} key={`planet${index}`} />;
					})}
				</div>

				<div className="row-container">
					{vehicles.map((vehicle, index) => {
						vehicle.img_url =
							"https://starwarsblog.starwars.com/wp-content/uploads/2015/03/Which-Star-Wars-Vehicle-is-Meant-For-You-X-wing-1536x864-590622789366.jpeg";
						return <Card item={vehicle} key={`planet${index}`} />;
					})}
				</div>
			</div>
		</div>
	);
};
