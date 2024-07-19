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
      <input defaultValue={props.moreData.address?.street} />
      <br />
      <strong>City:</strong>
      <input defaultValue={props.moreData.address?.city} />
      <br />
      <strong>Zip Code:</strong>
      <input defaultValue={props.moreData.address?.zipcode} />
    </div>
  );
}
