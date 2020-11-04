function Results(props) {
	const inOz = props.data.weight / 2;
	let inCups = inOz * 0.125;
	let solo = Math.floor(inOz / 12);
	return (
		<>
			<p><span>{inOz}</span> Oz Per Day</p>
			<h2>So about {solo} of those red solo cups 🥤!</h2>
			<p>(That's {inCups} cups on your measuring cup)</p>
		</>
	)
}

export default Results;

