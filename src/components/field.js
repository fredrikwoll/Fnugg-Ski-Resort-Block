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
            <li onClick={() => onClick(resort._source.name)} key={index}>
              {resort._source.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Field;
