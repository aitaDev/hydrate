import React, { Component } from 'react';
import Calculator from './Calculator';


export class Main extends Component {
	render() {
		return (
			<>
				<div className="title">Hydrate</div>
				<p>A simple tool to calculate water intake</p>
				<Calculator />
				<p className="signs">
					Drinking water Helps:
					<ul>
						<li>It lubricates the joints</li>
						<li>It forms saliva and mucus</li>
						<li>It delivers oxygen throughout the body</li>
						<li>It boosts skin health and beauty</li>
						<li>It cushions the brain, spinal cord, and other sensitive tissues</li>
						<li>It regulates body temperature</li>
						<li>The digestive system depends on it</li>
						<li>It flushes body waste</li>
						<li>It helps maintain blood pressure</li>
						<li>The airways need it</li>
					</ul>
				</p>
			</>
		)
	}
}

export default Main
