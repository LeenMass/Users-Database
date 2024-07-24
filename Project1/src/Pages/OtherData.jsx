import React from "react";

export default function OtherData(props) {
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
        defaultValue={props.moreData.address?.street}
        onChange={props.data}
      />
      <br />
      <strong>City:</strong>
      <input
        name="city"
        defaultValue={props.moreData.address?.city}
        onChange={props.data}
      />
      <br />
      <strong>Zip Code:</strong>
      <input
        name="zipcode"
        defaultValue={props.moreData.address?.zipcode}
        onChange={props.data}
      />
    </div>
  );
}
