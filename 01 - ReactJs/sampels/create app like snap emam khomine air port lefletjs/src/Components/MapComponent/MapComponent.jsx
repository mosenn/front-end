import React, { useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { GetAlldatafunc } from '../../slices/GetData';
import './mapstyle.css';

export const MapComponent = (getNameVechiles) => {
	// ------------------------------------------ Hooks and State
	const dispatch = useDispatch();
	const [printlatlng, setPrintlatlng] = useState([]);
	const [showSubmitbtnData, setShowSubmitbtnData] = useState(false);



	//--- leaflet Icon style

	let markerlength = 0;
	let Dimoned = L.icon({
		iconUrl: '/public/marker1.png',
		iconSize: [50, 50], // size of the icon
	});
	let MArker2 = L.icon({
		iconUrl: '/public/marker2.png',
		iconSize: [50, 50], // size of the icon
	});

	// ------------------------------ Return Ui
	return (
		<div className="ParentMap">
			<MapContainer
				whenReady={(map) => {
					map.target.on('click', function (e) {
						const { lat, lng } = e.latlng;

						markerlength++;

						if (
							markerlength === 2 &&
							getNameVechiles.length !== 0
						) {
						}
						if (markerlength <= 2 && getNameVechiles.length !== 0) {
							L.marker([lat, lng], {
								// draggable:'',
								autoPan: false,
								icon: markerlength === 1 ? Dimoned : MArker2,
							}).addTo(map.target);

							printlatlng.push(lat, lng);
							dispatch(
								GetAlldatafunc({
									lat: lat,
									lng: lng,
									print: [...printlatlng],
									showbtn: showSubmitbtnData,
								})
							);
						}
						L.marker;
					
					});
				}}
				center={{ lat: 29.591768, lng: 52.583698 }}
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer
					attribution='&copy; <a href="https://map.pishgamanasia.ir">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
			</MapContainer>
		</div>
	);
};
