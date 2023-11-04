import React from "react";

const Button = ({onClick}) => {
  return (
    <div className="Button-container">
         <button type="button" onClick={onClick} className="Button">Load more</button>
        </div>
  );
};

export default Button;