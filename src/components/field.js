const Field = ({ resorts, resortValue, onChange, onClick }) => {
  return (
    <>
      <input
        className="resort-input"
        type="text"
        value={resortValue}
        onChange={onChange}
      />
      <ul>
        {_.map(resorts, (resort, index) => {
          return (
            <li onClick={() => onClick(resort.name)} key={index}>
              {resort.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Field;
