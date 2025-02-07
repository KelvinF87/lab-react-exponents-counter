const ExponentTwo = ({ onCounter }) => {
  const { count, setCount } = onCounter; // Desestructuro count y setCount

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">
        {count}* {count} = <span className="total">{count * count}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
