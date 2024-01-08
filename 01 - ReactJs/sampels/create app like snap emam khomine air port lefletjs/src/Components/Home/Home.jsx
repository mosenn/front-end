const url = 'https://exam.pishgamanasia.com/webapi/Account/Login';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SendData } from '../../slices/getresponse';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import homeCss from './home.module.css';
export const Home = () => {
	let InpPhoneValue = useRef();
	const [apiData, SetData] = useState();
	const [takeValues, SetTakeValues] = useState();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	// --- Take Input Values
	const TakeValue = (e) => {
		SetTakeValues({
			...takeValues,
			[e.target.name]: e.target.value,
		});
	};

	// --- Submit Form and Posting user
	const SubmitFunction = async (e) => {
		e.preventDefault();

		try {
			const resp = await axios.post(url, {
				username: takeValues.username,
				password: takeValues.password,
			});
			console.log(resp);
			SetData(resp);
			dispatch(SendData(resp.data)); // send user token and other !

			if (resp.data.data.userToken !== null) {
				setInterval(() => {
					navigate('/map');
				}, 3000);
			}
		} catch (error) {
			console.log(error);
		}
	};
	// --- Return Ui
	return (
		<div className={homeCss.homeparent}>
			<form action="" method="post" onSubmit={SubmitFunction}>
				<input
					onChange={TakeValue}
					type="text"
					name="username"
					id=""
					placeholder="نام کاربری خود را وارد کنید"
					ref={InpPhoneValue}
				/>
				<input
					type="text"
					id=""
					name="password"
					onChange={TakeValue}
					placeholder="رمز عبور خود را وارد کنید"
				/>

				<button type="submit">
					به صحفه انتخاب وسیله نقیله وارد شوید
				</button>
				{apiData && (
					<div
						className={
							apiData.data.status === 1
								? homeCss.MassageSucces
								: homeCss.error
						}
					>
						{' '}
						{apiData && apiData.data.message}
					</div>
				)}
			</form>
		</div>
	);
};
