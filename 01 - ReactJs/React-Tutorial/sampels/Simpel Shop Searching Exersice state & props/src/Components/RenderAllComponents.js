import React from 'react';
import SearchBar from './SerachBar';
import TabelShowProducts from './TabelShowProducts';
class RenderAllComponents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filtertext: '',
			OnlyStocked: false,
		};
	}

	setSTateFiltrText = (filtertext) => {
		this.setState({
			filtertext: filtertext,
		});

		console.log('Valueinput : ', this.state.filtertext);
	};

	setOnlyStocket = (OnlyStocked) => {
		this.setState({
			OnlyStocked: OnlyStocked,
		});

		console.log('checkBox : ', this.state.OnlyStocked);
	};
	render() {
		return (
			<>
				<SearchBar
					filtertext={this.state.filtertext}
					onlyStock={this.state.OnlyStocked}
					HandelerInput={this.setSTateFiltrText}
					HandelerCheckbox={this.setOnlyStocket}
				></SearchBar>

				<TabelShowProducts
					filtertext={this.state.filtertext}
					onlyStock={this.state.OnlyStocked}
					products={this.props.products}
				></TabelShowProducts>
			</>
		);
	}
}

export default RenderAllComponents;
