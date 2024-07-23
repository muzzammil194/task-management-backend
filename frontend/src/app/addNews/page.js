import React from "react";
import FormComponent from "./_component/Form";

function page() {
  return (
    <div>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        Add News
      </h3>
      <FormComponent />
    </div>
  );
}

export default page;
