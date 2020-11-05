function Results(props) {
	let inOz = props.data.weight / 2;
	let inCups = inOz * 0.125;
	let solo = Math.floor(inOz / 12);
	if (props.data.age > 65) {
		inOz = inOz + 24
	} else if (props.data.age > 40) {
		inOz = inOz + 12
	}
	if (props.data.activity == 3) {
		inOz = inOz + 12
	} else if (props.data.activity == 4) {
		inOz = inOz + 24
	}
	return (
		<>
			<p><span>{inOz}</span> Oz Per Day</p>
			<h2>So about {solo} of those red solo cups 🥤!</h2>
			<p>(That's {inCups} cups on your measuring cup)</p>
			<p>Keep in mind all liquids count towards your daily intake, read more about that <a href="https://www.health.harvard.edu/healthbeat/fight-fatigue-with-fluids">here</a></p>
		</>
	)
}

export default Results;

