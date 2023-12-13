const ErrorExample = () => {
  let count = 0;

  const increase = () => {
    count = count + 1;
    console.log(count);
  };

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={increase}>
        +
      </button>
    </>
  );
};

export default ErrorExample;
