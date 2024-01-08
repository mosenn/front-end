import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { a: '' };
	}

	TakeValueinputSettosate = (e) => {
		this.props.HandelerInput(e.target.value);
	};

	TakeCheckbox = (e) => {
		this.props.HandelerCheckbox(e.target.checked);
	};
	render() {
		return (
			<div>
				<from>
					<input
						type="text"
						value={this.props.filtertext}
						onChange={this.TakeValueinputSettosate}
					></input>

					<input
						type="checkbox"
						onChange={this.TakeCheckbox}
						checked={this.props.onlyStock}
					/>
				</from>
			</div>
		);
	}
}

export default SearchBar;
