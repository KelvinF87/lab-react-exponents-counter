const ExponentThree = ({ onCounter }) => {
	const { count, setCount } = onCounter; // Desestructuro count y setCount

	return (
		<div className="exponent-counter-container">
			<p className="exponent-label">{count}³</p>
			<p className="exponent-result">
			{count} * {count} * {count} = <span className="total">{count * count* count}</span>
			</p>
		</div>
	);
};

export default ExponentThree;
