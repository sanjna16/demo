import * as React from "react";
const Click = () => {
  const handleClick = () => {
    window.open("https://upsc.gov.in/apply-online", "_blank");
  };

  const buttonStyle = {
    width: "165px",
    height: "40px",
    backgroundColor: "#3535FD",
    color: "white",
    fontWeight: 500,
    textAlign: "center",
    lineHeight: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={handleClick} type="button">
      Enroll Now
    </button>
  );
};

export default Click;
