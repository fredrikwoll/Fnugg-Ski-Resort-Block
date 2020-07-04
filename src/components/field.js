import { isEmpty } from "lodash";

const Field = ({ resorts, resortValue, searchStatus, onChange, onClick }) => {
  return (
    <>
      <input
        className="resort-input"
        type="text"
        value={resortValue}
        onChange={onChange}
      />
      <ul>
        {resortValue && searchStatus && isEmpty(resorts) && <li>No result</li>}
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
