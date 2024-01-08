import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { MapComponent } from '../MapComponent/MapComponent';
import { FaCarSide, FaTrashAlt } from 'react-icons/fa';
import RenderMapCss from './render.module.css';
import { useNavigate } from 'react-router-dom';

export const RenderMapSearchInput = () => {
	//------------------------------------------------  STATE AND HOOKS THIS COMPONTENT
	const serchinpt = useRef();
	const navigate = useNavigate();
	const state = useSelector((state) => state);
	const [TakeMassage, setTakeMassage] = useState();
	const [getNameVechiles, setGetNameVechiles] = useState([]);
	const [query, setQuery] = useState();
	const [validate, setValidate] = useState('');
	const [showMessage, setShowMessage] = useState(true);
	const [Showpopup, setShowpopup] = useState(false);
	//--- Coming from Slice
	const data = state.PostingUsers.value.data;
	const get_Lat_Lng = state.getdata;
	const { lat, print, lng } = get_Lat_Lng.value;

	// For enable & disabled Submit btn Lat ,lng
	const ShowingSubmitBtn = useSelector(
		(state) => state.showingbtn.value.showbtn
	);

	// let userToken = '92d15c07';
	let userToken;
	if (data.length !== 0) {
		userToken = state.PostingUsers.value.data.data.userToken;
	}

	// --- Posting Data

	const urlUserDAtaPost =
		'https://exam.pishgamanasia.com/webapi/Request/SendRequest';
	const postinguserDAta = async (lat, lng, id) => {
		// console.log('data lt lg in function', lat, lng);

		try {
			const resp = await axios.post(urlUserDAtaPost, {
				userToken: userToken,
				vehicleUserTypeId: id,
				source: JSON.stringify(lat),
				destination: JSON.stringify(lng),
			});
			console.log('postinDAta', resp);
		} catch (error) {
			console.log(error);
		}
	};

	//--- Validation Serach input
	let valid;
	useEffect(() => {
		setValidate('جستجو نمی تواند خالی باشد');
	}, []);
	const SearchQuery = async (e) => {
		if (/^\s/.test(e.target.value)) {
			e.target.value = '';
			valid = 'لطفا بدون فاصله تایپ کنید';
		} else if (e.target.value == '') {
			valid = 'جستجو نمی تواند خالی باشد';
		} else if (/[0-9]/.test(e.target.value)) {
			e.target.value = '';
			valid = 'عدد وارد نکنید';
		} else if (e.target.value.match(/^[A-Za-z]+$/)) {
			e.target.value = '';
			valid = 'کیبورد خود را فارسی کنید';
		} else if (e.target.value.length <= 2) {
			valid = 'مقدار وارد شده باید بیشتر از 2 حرف باشید ';
		} else {
		}
		const queryValue = e.target.value;
		setQuery(queryValue);
		setValidate(valid);
	};

	// --- Get Data and Set data to state
	const HandelerSubmit = async (e) => {
		e.preventDefault();
		setShowMessage(true);
		if (serchinpt.current.value == '') {
			setValidate('لطفا نوع وسیله نقیله خود را سرچ کنید ');
		}
		if (userToken && !serchinpt.current.value == '') {
			const resp = await fetch(
				`https://exam.pishgamanasia.com/webapi/Request/GetVehicleUsers?UserToken=${userToken}&SearchTerm=${query}`
			);
			const getData = await resp.json();
			setGetNameVechiles(getNameVechiles.concat(getData.data));
			const { message, status, data } = getData;
			setTakeMassage({
				Status: status,
				VhData: getData.data,
				Message: message,
				successbtn: true,
			});

			if (data.length === 0) {
				setTakeMassage({
					Message: 'وسیله نقیله شما موجود نمی باشد',
					successbtn: false,
				});
			}
		}
	};

	// --- Submit form & pass data to func
	const HandalerSubmitLatLng = (e) => {
		e.preventDefault();
		postinguserDAta(lat, lng, TakeMassage.VhData[0].id);
	};

	// --- Close Vechiles and Reload Page
	const CloseVchiles = (id) => {
		if (getNameVechiles) {
			let deletingVchiles = getNameVechiles.filter(
				(data) => data.id !== id
			);
			setGetNameVechiles(deletingVchiles);
		}
	};

	//--- Contorl dublicate map Names Vechiles
	const uniqueIdsVh = [];

	const uniqueVHichels = getNameVechiles.filter((element) => {
		const VhisDuplicate = uniqueIdsVh.includes(element.id);

		if (!VhisDuplicate) {
			uniqueIdsVh.push(element.id);

			return true;
		}

		return false;
	});

	// --- Remove Mssage Success after 10s
	setTimeout(() => {
		setShowMessage(false);
	}, 30000);

	// ------------------------- Return Ui
	return (
		<section className={RenderMapCss.MainContainer}>
			{/* -------------------------------- Search Form */}
			{/*---------------------------------- Show Validation Massage */}
			<div className={RenderMapCss.validate}>
				<p>{validate}</p>
			</div>
			<form action="" onSubmit={HandelerSubmit}>
				<input
					type="search"
					name="search"
					id=""
					placeholder="وسیله نقلیه را جستجو کنید , سواری ,وانت"
					onChange={SearchQuery}
					ref={serchinpt}
				/>

				<button type="submit">وسیله نقیله را ثبت کنید</button>
			</form>

			{/*----------------------------------- Success massage */}

			{TakeMassage && showMessage ? (
				<section
					className={
						TakeMassage.successbtn
							? RenderMapCss.ParentMssageSucess
							: RenderMapCss.erroMssage
					}
				>
					<div>{TakeMassage.Message}</div>
				</section>
			) : (
				''
			)}
			{/*------------------------------------- Show Name Vechiles */}
			{getNameVechiles &&
				// [...new Set(array)]

				uniqueVHichels.map((items) => {
					const { name, id } = items;

					return (
						<section
							key={id}
							className={RenderMapCss.parentmapVechilename}
						>
							<div className={RenderMapCss.mapingVechilesName}>
								<div className={RenderMapCss.nameIcon}>
									<FaCarSide />

									<p>{name}</p>
								</div>

								<button
									onClick={() => {
										CloseVchiles(id);
									}}
								>
									<FaTrashAlt />
									حذف از لیست
								</button>
							</div>
						</section>
					);
				})}

			{/*------------------------------------ Map Componet & Show Lat , lng , & Submit btn Lat , lng*/}

			{getNameVechiles.length !== 0 ? (
				<section className={RenderMapCss.mainMapingandForm}>
					<MapComponent
						getNameVechiles={getNameVechiles}
					></MapComponent>

					<section className={RenderMapCss.parentBtnLatLang}>
						<form action="" onSubmit={HandalerSubmitLatLng}>
							{print && (
								<button
									type="submit"
									disabled={
										print[0] && print[3] ? false : true
									}
									onClick={() => {
										setShowpopup(true);
									}}
								>
									مبدا و مقصد را ثبت کنید
								</button>
							)}
						</form>
						{print && (
							<div className={RenderMapCss.ParentLatLng}>
								<div>
									<span>مبدا</span>
									<p
										style={{
											padding: '2px',
											margin: '5px',
										}}
									>
										{print[0]}
									</p>

									<p
										style={{
											padding: '2px',
											margin: '5px',
										}}
									>
										{print[1]}
									</p>
								</div>
								<div>
									<span>مقصد</span>
									<p
										style={{
											padding: '2px',
											margin: '5px',
										}}
									>
										{print[2]}
									</p>
									<p
										style={{
											padding: '2px',
											margin: '5px',
										}}
									>
										{print[3]}
									</p>
								</div>
							</div>
						)}
					</section>
				</section>
			) : (
				<div>
					<h4>لطفا یک وسیله نقلیه جستجو وثبت کنید </h4>
				</div>
			)}

			{Showpopup && (
				<div className={RenderMapCss.PopUp}>
					<button
						onClick={() => {
							// navigate('/');
							setShowpopup(false);
						}}
					>
						بستن صحفه
					</button>
					<h3>ممنون که ما را همسفر خود انتخاب کردید</h3>
					<p>
						در صورت نیاز به سفر جدید لطفا سرویس فعلی را از لیست حذف
						کنید سپس مبدا و مقصد جدید وارد کنید , سفر خوبی داشته باشید
					</p>
				</div>
			)}
		</section>
	);
};
