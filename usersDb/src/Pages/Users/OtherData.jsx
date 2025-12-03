const OtherData = ({ moreData, handleChange }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "9px",
        marginTop: "6px",
        marginBottom: "6px",
      }}
    >
      <strong>Street:</strong>
      <input
        name="street"
        defaultValue={moreData.address?.street}
        onChange={handleChange}
      />
      <br />
      <strong>City:</strong>
      <input
        name="city"
        defaultValue={moreData.address?.city}
        onChange={handleChange}
      />
      <br />
      <strong>Zip Code:</strong>
      <input
        name="zipcode"
        defaultValue={moreData.address?.zipcode}
        onChange={handleChange}
      />
    </div>
  );
};
export default OtherData;
