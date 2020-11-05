import React, { Component } from 'react';
import Results from './Results';

class Calculator extends Component {
	constructor(props) {
		super(props)

		this.state = {
			weight: '',
			age: '56',
			activity: ''

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
			<>
				<div>
					<form onSubmit={e => e.preventDefault()}>
						<label htmlFor="age">Age: {this.state.age}</label>
						<div className="slidecontainer">
							<input type="range" className="slider" name="age" min="1" max="110" setdefault="1" value={this.state.value} onChange={this.handleChange} />
						</div>
						<div>
							<select name="activity" onChange={this.handleChange} value={this.state.value} >
								<option>--Activity Level--</option>
								<option value="1">Sedentary</option>
								<option value="2">Moderetly Active</option>
								<option value="3">Active</option>
								<option value="4">Highly Active</option>
							</select>
						</div>
						<div>
							<input type="text" name="weight" value={this.state.value} onChange={this.handleChange} placeholder="Weight lbs" />
							<hr></hr>
						</div>
					</form>
				</div>
				<div className="results"><Results data={this.state} /></div>
			</>

		)
	}
}
export default Calculator;