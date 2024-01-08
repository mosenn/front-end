import './App.css';
import React, { useState, useEffect } from 'react';
import { List } from './Components/List';
import { Alert } from './Components/Alert';
import { Header } from './Components/Hedaer/Hedaer';
let GetLocalStorge = () => {
	let listlocal = localStorage.getItem('myList');
	if (listlocal) {
		return JSON.parse(localStorage.getItem('myList'));
	} else {
		return [];
	}
};
function App() {
	const [inpValue, SetinpValue] = useState('');
	const [list, SetList] = useState(GetLocalStorge());
	const [alert, setalrert] = useState({
		show: false,
		msg: '',
		type: '',
	});

	const [Edit, SetEditing] = useState(false);
	const [GetID, SetGetID] = useState(null);

	const OnSubmitFrom = (e) => {
		e.preventDefault();
		if (!inpValue) {
			ShowAlert(true, 'yellowgreen', 'type someting to filed');
		} else if (inpValue && Edit) {
			SetList(
				list.map((item) => {
					if (item.id === GetID) {
						return { ...item, title: inpValue };
					}
					return item;
				})
			);
			SetinpValue('');
			SetGetID(null);
			SetEditing(false);

			ShowAlert(true, 'gray', 'value change');
		} else {
			ShowAlert(true, 'green', 'item add to your list');
			const newItem = {
				id: new Date().getTime().toString(),
				title: inpValue,
			};

			SetList([...list, newItem]);
			SetinpValue('');
		}
	};

	const Remove = (id) => {
		let Filterlist = list.filter((list) => list.id !== id);
		SetList(Filterlist);
		ShowAlert(true, 'skyblue', `item is remove`);
	};

	const ShowAlert = (show = false, type = '', msg = '') => {
		setalrert({
			show,
			type,
			msg,
		});
	};

	const ClearList = () => {
		ShowAlert(true, 'crimson', `y'ur list is clear`);
		SetList([]);
	};

	const EditList = (id) => {
		const FindeItems = list.find((items) => items.id === id);
		SetEditing(true);
		SetGetID(id);
		SetinpValue(FindeItems.title);
	};

	useEffect(() => {
		localStorage.setItem('myList', JSON.stringify(list));
	}, [list]);

	return (
		<div className="App">
			<Header></Header>
			{alert.show && <Alert {...alert} alertfunc={ShowAlert}></Alert>}
			<form onSubmit={OnSubmitFrom}>
				<textarea
					maxLength={20}
					type="text"
					name=""
					id=""
					value={inpValue}
					onChange={(e) => {
						SetinpValue(e.target.value);
					}}
				/>
				<button type="submit">{Edit ? 'Edit' : 'Add'}</button>
			</form>
			<div className="test2">
				<List list={list} remove={Remove} edit={EditList} />
			</div>
			{list.length > 1 && (
				<button
					onClick={() => {
						ClearList();
					}}
				>
					Clear List
				</button>
			)}
		</div>
	);
}

export default App;
