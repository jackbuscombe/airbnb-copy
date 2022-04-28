import Map, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function SearchMap({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({});

	// Transfer the search results object into the {latitude: 52.232, longitude: 13.3772} object
	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));

	const center = getCenter(coordinates);
	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});
	console.log(selectedLocation);

	return (
		<Map mapStyle="mapbox://styles/bigbabyjack/cl2ifu9xl002714mj3k1susst" mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY} {...viewport} onMove={(evt) => setViewport(evt.viewport)}>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker longitude={result.long} latitude={result.lat}>
						<p onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce" aria-label="push-pin" role="img">
							📌
						</p>
					</Marker>

					{/* Popup that should show if we click a marker */}
					{selectedLocation.long === result.long ? (
						<Popup onClose={() => setSelectedLocation({})} closeOnClick={true} latitude={result.lat} longitude={result.long}>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</Map>
	);
}
export default SearchMap;
