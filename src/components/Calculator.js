import React, { Component } from 'react';
import Results from './Results';

class Calculator extends Component {
	constructor(props) {
		super(props)

		this.state = {
			weight: '',
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={e => e.preventDefault()}>
					<div>
						<input type="text" name="weight" value={this.state.weight} onChange={this.handleChange} placeholder="Weight lbs" />
					</div>
					<div className="results"><Results data={this.state} /></div>
				</form>
			</div>
		)
	}
}
export default Calculator;