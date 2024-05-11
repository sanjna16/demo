import * as React from "react";
const Click1 = () => {
  const handleClick = () => {
    window.open("https://upsc.gov.in/apply-online", "_blank");
  };

  const buttonStyle = {
    width: "320px",
    height: "40px",
    radius: "4px",
    backgroundColor: "white",
    border: "solid 1px #3535FD",
    padding: "8px 20px 8px 20px",
    gap: "8px",
    color: "#3535FD",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "24px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={handleClick} type="button">
      Book a Free Demo Today ->
    </button>
  );
};

export default Click1;
